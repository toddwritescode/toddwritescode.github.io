/* When the user scrolls down, show the to top triangle. */
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (currentScrollPos > 50) {
//     document.getElementById("to-top-tri").style.opacity = "1";
//   } else {
//     document.getElementById("to-top-tri").style.opacity = "0";
//   }
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var sessionHeaders = document.getElementsByClassName("session-header");
    var sessionSlides = document.getElementsByClassName("session-slide");
    var dots = document.getElementsByClassName("dot");
    if (n > sessionSlides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = sessionSlides.length}
    for (i = 0; i < sessionSlides.length; i++) {
        sessionHeaders[i].style.display = "none"; 
        sessionSlides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    sessionHeaders[slideIndex-1].style.display = "block";  
    sessionSlides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function activateScroll() {
    if(checkVisible(document.getElementById('home-section'))){
            // console.log('home is visible');
            document.getElementById('home-section').scrollIntoView({behavior:'smooth',block:'start'});
    } else if(checkVisible(document.getElementById('session-section'))){
            // console.log('session is visible');
            document.getElementById('session-section').scrollIntoView({behavior:'smooth',block:'start'});
    } else if(checkVisible(document.getElementById('pricing-section'))){
            // console.log('pricing is visible');
            document.getElementById('pricing-section').scrollIntoView({behavior:'smooth',block:'start'});
    } else if(checkVisible(document.getElementById('about-section'))){
            // console.log('about is visible');
            document.getElementById('about-section').scrollIntoView({behavior:'smooth',block:'start'});
    } else if(checkVisible(document.getElementById('contact-section'))){
            // console.log('contact is visible');
            document.getElementById('contact-section').scrollIntoView({behavior:'smooth',block:'start'});
    } else {
            // console.log('at the top');
            document.getElementById('introduction-section').scrollIntoView({behavior:'smooth',block:'start'});
    }
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}