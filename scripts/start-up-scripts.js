function checkForJavaScript() {
    // first thing to fire on page
    console.warn('Welcome to Todd Writes Code. Are you lost? Or did you mean to come here?');
    generateUselessFact();
    // show useless facts dialog and hide non javascript dialog if javascript enabled
    document.getElementById('noscript-dialog').classList.add('hide');
    document.getElementById('useless-facts-dialog').classList.remove('hide');
}

function pageHasLoaded() {
    calculateRemainingCodeDays();
    generateMostRecentArticles();
    // show all sections and hide non javascript and useless facts dialogs if javascript enabled
    document.getElementById('useless-facts-dialog').classList.add('hide');
    var navBar = document.getElementsByTagName('NAV')[0].classList;
    if (navBar != undefined) {
        navBar.remove('hide');
    }
    for (var sections = document.getElementsByTagName('section'), i = sections.length; i--;) {
        ['noscript-dialog', 'useless-facts-dialog'].indexOf(sections[i].id) == -1 && (sections[i].classList.remove('hide'));
    }
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    window.stopUselessFacts = true;
});