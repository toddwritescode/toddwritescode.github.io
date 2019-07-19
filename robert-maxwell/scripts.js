// --------------------------- FIX SCROLL BUG

function activateScroll() {
    if (checkVisible(document.getElementById('home-section'))) {
        // console.log('home is visible');
        document.getElementById('home-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (checkVisible(document.getElementById('session-section'))) {
        // console.log('session is visible');
        document.getElementById('session-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (checkVisible(document.getElementById('pricing-section'))) {
        // console.log('pricing is visible');
        document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (checkVisible(document.getElementById('about-section'))) {
        // console.log('about is visible');
        document.getElementById('about-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (checkVisible(document.getElementById('contact-section'))) {
        // console.log('contact is visible');
        document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // console.log('at the top');
        document.getElementById('introduction-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// --------------------------- SLIDE TRANSITIONS

function nextSlide() {
    var slides = document.getElementsByClassName('slide');
    var headers = document.getElementsByClassName('session-header');
    var activeSlideIndex = 0;
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active') || slides[i].classList.contains('active-reverse')) {
            activeSlideIndex = i;
        }
        slides[i].classList.remove('previous');
        slides[i].classList.remove('previous-reverse');
        headers[i].classList.remove('active-header');
    }
    // used only one for initial load of first slide
    slides[activeSlideIndex].classList.remove('initial');
    headers[activeSlideIndex].classList.remove('initial-header');
    slides[activeSlideIndex].classList.remove('active');
    slides[activeSlideIndex].classList.remove('active-reverse');
    slides[activeSlideIndex].classList.add('previous');
    if (activeSlideIndex === 4) {
        activeSlideIndex = 0;
    } else {
        activeSlideIndex++;
    }
    slides[activeSlideIndex].classList.add('active');
    headers[activeSlideIndex].classList.add('active-header');
}

function previousSlide() {
    var slides = document.getElementsByClassName('slide');
    var headers = document.getElementsByClassName('session-header');
    var activeSlideIndex = 0;
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active') || slides[i].classList.contains('active-reverse')) {
            activeSlideIndex = i;
        }
        slides[i].classList.remove('previous');
        slides[i].classList.remove('previous-reverse');
        headers[i].classList.remove('active-header');
    }
    // used only one for initial load of first slide
    slides[activeSlideIndex].classList.remove('initial');
    headers[activeSlideIndex].classList.remove('initial-header');
    slides[activeSlideIndex].classList.remove('active');
    slides[activeSlideIndex].classList.remove('active-reverse');
    slides[activeSlideIndex].classList.add('previous-reverse');
    if (activeSlideIndex === 0) {
        activeSlideIndex = 4;
    } else {
        activeSlideIndex--;
    }
    slides[activeSlideIndex].classList.add('active-reverse');
    headers[activeSlideIndex].classList.add('active-header');
}