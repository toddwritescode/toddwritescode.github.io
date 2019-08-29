// --------------------------- DOCUMENT LOADED LISTENER
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('loader').classList.add('hide-loader');
    shouldWeScrollSnap();
});

function shouldWeScrollSnap() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        console.log("You're using Mobile Device!!")
    }
}

// --------------------------- FIX SCROLL BUG - NOT USING

// function activateScroll() {
//     if (checkVisible(document.getElementById('home-section'))) {
//         console.log('home is visible');
//         document.getElementById('home-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
//     } else if (checkVisible(document.getElementById('session-section'))) {
//         console.log('session is visible');
//         document.getElementById('sessions-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
//     } else if (checkVisible(document.getElementById('pricing-section'))) {
//         console.log('pricing is visible');
//         document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
//     } else if (checkVisible(document.getElementById('about-section'))) {
//         console.log('about is visible');
//         document.getElementById('about-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
//     } else if (checkVisible(document.getElementById('contact-section'))) {
//         console.log('contact is visible');
//         document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
//     } else {
//         console.log('at the top');
//         document.getElementById('introduction-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
// }

// function checkVisible(elm) {
//     var rect = elm.getBoundingClientRect();
//     var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
//     return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
// }

// --------------------------- SESSIONS SLIDESHOW - NOT USING

// function nextSlide() {
//     var slides = document.getElementsByClassName('session-slide');
//     var currentActiveSlideIndex = 0; // by default
//     for (var i = 0; i < slides.length; i++) {
//         if (slides[i].classList.contains('active-slide')) {
//             currentActiveSlideIndex = i;
//             slides[i].classList.remove('active-slide');
//         }
//     }
//     var newActiveSlideIndex = currentActiveSlideIndex === slides.length - 1 ? 0 : ++currentActiveSlideIndex;
//     // console.log('new active slide ', newActiveSlideIndex);
//     slides[newActiveSlideIndex].classList.add('active-slide');
// }

// function previousSlide() {
//     var slides = document.getElementsByClassName('session-slide');
//     var currentActiveSlideIndex = 0; // by default
//     for (var i = 0; i < slides.length; i++) {
//         if (slides[i].classList.contains('active-slide')) {
//             currentActiveSlideIndex = i;
//             slides[i].classList.remove('active-slide');
//         }
//     }
//     var newActiveSlideIndex = currentActiveSlideIndex === 0 ? slides.length - 1 : --currentActiveSlideIndex;
//     // console.log('new active slide ', newActiveSlideIndex);
//     slides[newActiveSlideIndex].classList.add('active-slide');
// }