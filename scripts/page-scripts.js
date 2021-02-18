// A file used to manage any menu interactions and date calculations/ updates
function calculateRemainingCodeDays() {
    // calculate how many days remaining of challenge - starting on 25th of Jan, 2021
    const startDate = new Date('01/25/2021');
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('day-count').innerText = (100 - diffDays).toString();
}

function toggleMenu(openMenu) {
    // show or hide the menu depending on user interaction
    if (openMenu) {
        document.getElementById('menu').classList.remove('hide');
        document.getElementById('menu').classList.remove('fade-out');
        document.getElementById('menu').classList.add('fade-in');
    } else {
        document.getElementById('menu').classList.remove('fade-in');
        document.getElementById('menu').classList.add('fade-out');
        setTimeout(function() {
            // delay setting of class for 1 second so animation can run
            document.getElementById('menu').classList.add('hide');
        }, 500)
    }
}

function scrollToTop() {
    // scroll to top of page
    window.scrollTo(0, 0);
}