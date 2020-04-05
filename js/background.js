chrome.runtime.onInstalled.addListener(function () {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.covid19india.org/data.json', true);
    request.onload = function () {
        // Begin accessing JSON data here
        var result = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            const [data] = result.cases_time_series.slice(-1);
            if (data && data.totalconfirmed) {
                chrome.storage.sync.set(
                    { totalCases: data.totalconfirmed },
                    function () {
                        console.log(
                            'The total cases in india = ',
                            data.totalconfirmed
                        );
                        chrome.browserAction.setBadgeText({
                            text: `${data.totalconfirmed}`,
                        });
                    }
                );
            }
        } else {
            console.log('error');
        }
    };
    request.send();
});
