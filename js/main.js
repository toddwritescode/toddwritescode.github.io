function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function closeMenu(activeCard) {
    // closes menu
    setTimeout(function () {
        document.getElementById("menu-toggle").checked = false;
        document.querySelector('#' + activeCard).scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth"
        });
    }, 10);
}