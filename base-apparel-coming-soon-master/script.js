var error = $('#error');
var errorMsg = $('#error-msg');
var button = $('button');
var input = $('input');
var subMsg = $('#subscribe-msg');

const hide = () => {
    error.hide();
    errorMsg.hide();
}

subMsg.hide();
hide();

const errorShow = () => {
    error.fadeIn(100);
    errorMsg.fadeIn(100);
    input.css('border-color', 'hsl(0, 93%, 68%)');
}

button.click(function () {
    if (input.val().includes('.com') && input.val().includes('@')) {
        hide();
        subMsg.fadeIn(100);
    } else {
        errorShow();
        subMsg.hide();
    }
});