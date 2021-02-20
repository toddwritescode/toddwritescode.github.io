function pageHasLoaded() {
    // first thing to fire on page
    console.warn('Welcome to Todd Writes Code. Are you lost? Or did you mean to come here?');
    console.log('Thanks for waiting. Please take a look around');
    // hide loading div
    document.getElementById('loading-div').classList.add('hide-loading-div'); 
    // unblur sections
    setTimeout(function(){
        for (var sections = document.getElementsByTagName('section'), i = sections.length; i--;) {
            [/*Sections to not unblur*/].indexOf(sections[i].id) == -1 && (sections[i].classList.remove('blur'));
        }
        // enable page scrolling
        var bodyElement = document.getElementsByTagName('BODY')[0];
        bodyElement.classList.remove('overflowHidden'); 
        bodyElement.classList.add('overflowYOnly'); 
    }, 2000);
    // handle default loading for menu
    var menuOpened = false;
    // fire on browser load
    if(typeof(Storage) != "undefined"){
        menuOpened = window.localStorage.getItem('menuState') == 'true' ? true : false;
    }
    toggleMenu(menuOpened);
}

// Old Code 200220211600 ------------------------------------------------------------------------

// 
// function checkForJavaScript() {
//     // first thing to fire on page
//     console.warn('Welcome to Todd Writes Code. Are you lost? Or did you mean to come here?');
//     document.getElementById('noscript-dialog').classList.add('hide');
// }

// function pageHasLoaded() {
//     calculateRemainingCodeDays();
//     generateMostRecentArticles();
//     // show all sections and hide non javascript and useless facts dialogs if javascript enabled
//     document.getElementById('useless-facts-dialog').classList.add('hide');
//     var navBar = document.getElementsByTagName('NAV')[0].classList;
//     if (navBar != undefined) {
//         navBar.remove('hide');
//     }
//     for (var sections = document.getElementsByTagName('section'), i = sections.length; i--;) {
//         ['noscript-dialog', 'useless-facts-dialog'].indexOf(sections[i].id) == -1 && (sections[i].classList.remove('hide'));
//     }
// }

// function docReady(fn) {
//     // see if DOM is already available
//     if (document.readyState === "complete" || document.readyState === "interactive") {
//         // call on next available tick
//         setTimeout(fn, 1);
//     } else {
//         document.addEventListener("DOMContentLoaded", fn);
//     }
// }

// docReady(function() {
//     window.stopUselessFacts = true;
// });