// Link Formatter js

// hide the alert that will be triggered if there is a failure to copy text
$('#alert').hide();

// to close the alert
$('#alert').click(() => {
    $('#alert').hide();
});

// Copy button events, obtains the input id from amending the button id
$('button').click((event) => {
    let inputId = '#' + event.target.id.replace('CopyButton', 'Input');
    console.log('inputId = ', inputId);
});

const alertError = (error, message) => {
    console.log(message);
    console.log(error);
    $('#alertText').text(message);
    $('#alert').show();
};
