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

// only show the scroll to top if page is scrolled down
window.onscroll = function(){
    var pageOffset =document.documentElement.scrollTop || document.body.scrollTop;
    if(pageOffset >= 200){
    	document.getElementById('menu-bar').classList.add('minified');
        document.getElementById('scroll-to-top').classList.remove('hide');
    }
    else{
    	document.getElementById('menu-bar').classList.remove('minified');
        document.getElementById('scroll-to-top').classList.add('hide');
    }
};