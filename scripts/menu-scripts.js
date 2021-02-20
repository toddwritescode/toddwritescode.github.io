function storeMenuState() {
    var menuOpened = document.getElementById('menu-toggle').checked;
    if(typeof(Storage) != undefined){
        window.localStorage.setItem('menuState', menuOpened.toString());
    }
}

function toggleMenu(isOpen){
    document.getElementById('menu-toggle').checked = isOpen;
}

function scrollToTop() {
    // scroll to top of page
    window.scrollTo(0, 0);
}