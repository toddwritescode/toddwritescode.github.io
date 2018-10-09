function closeMenu(activeCard) {
    // closes menu and adds active-card class to relevant anchors / cards
    document.getElementById("menu-toggle").checked = false;
    document.getElementsByClassName("active-card")[0].classList.remove("active-card");
    if (Array.isArray(activeCard)) {
        for (i = 0; i < activeCard.length; i++) {
            document.getElementById(activeCard[i]).classList.add("active-card");
        }
    } else {
        document.getElementById(activeCard).classList.add("active-card");
    }
}