JotForm.init(function() {
    setTimeout(function() {
        $('input_6').hint('Please enter your name');
    }, 20);
    setTimeout(function() {
        $('input_4').hint('Please enter your email address');
    }, 20);
    setTimeout(function() {
        $('input_7').hint('Please enter your best contact number');
    }, 20);
    JotForm.setCustomHint('input_5', 'Please enter your message');
    JotForm.alterTexts(undefined);
    JotForm.clearFieldOnHide = "disable";
    FormTranslation.init({ "detectUserLanguage": "1", "firstPageOnly": "0", "options": "English (Australia)", "originalLanguage": "en-AU", "primaryLanguage": "en-AU", "saveUserLanguage": "1", "showStatus": "flag-with-nation", "theme": "light-theme", "version": "2" });
    JotForm.submitError = "jumpToFirstError";
    /*INIT-END*/
});

JotForm.prepareCalculationsOnTheFly([null, null, null, null, { "description": "", "name": "email", "qid": "4", "subLabel": "example@example.com", "text": "Email", "type": "control_email" }, { "description": "", "name": "message", "qid": "5", "subLabel": "", "text": "Message", "type": "control_textarea" }, { "description": "", "name": "name", "qid": "6", "subLabel": "John Smith", "text": "Name", "type": "control_textbox" }, { "description": "", "name": "phone", "qid": "7", "subLabel": "0400 066 100", "text": "Phone", "type": "control_textbox" }, { "name": "submit", "qid": "8", "text": "Submit", "type": "control_button" }]);
setTimeout(function() {
    JotForm.paymentExtrasOnTheFly([null, null, null, null, { "description": "", "name": "email", "qid": "4", "subLabel": "example@example.com", "text": "Email", "type": "control_email" }, { "description": "", "name": "message", "qid": "5", "subLabel": "", "text": "Message", "type": "control_textarea" }, { "description": "", "name": "name", "qid": "6", "subLabel": "John Smith", "text": "Name", "type": "control_textbox" }, { "description": "", "name": "phone", "qid": "7", "subLabel": "0400 066 100", "text": "Phone", "type": "control_textbox" }, { "name": "submit", "qid": "8", "text": "Submit", "type": "control_button" }]);
}, 20);