function closeMenu(activeCard) {
    // closes menu and adds active-card class to relevant anchors / cards
    // time out is required to overcome onclick action for menu triggering updateActiveCard
    setTimeout(function () {
        document.getElementById("menu-toggle").checked = false;
        var activeCards = document.getElementsByClassName("active-card");
        while (activeCards.length > 0) {
            activeCards[0].classList.remove("active-card");
        }
        document.querySelector('#' + activeCard).scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth"
        });
        if (Array.isArray(activeCard)) {
            for (i = 0; i < activeCard.length; i++) {
                document.getElementById(activeCard[i]).classList.add("active-card");
            }
        } else {
            document.getElementById(activeCard).classList.add("active-card");
        }
    }, 10);
}

function updateActiveCard(activeCard) {
    // closes adds active-card class to relevant anchors / cards
    var activeCards = document.getElementsByClassName("active-card");
    while (activeCards.length > 0) {
        activeCards[0].classList.remove("active-card");
    }
    if (Array.isArray(activeCard)) {
        for (i = 0; i < activeCard.length; i++) {
            document.getElementById(activeCard[i]).classList.add("active-card");
        }
    } else {
        document.getElementById(activeCard).classList.add("active-card");
    }
}

function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}