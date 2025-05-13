/*
Title: W3.CSS Lightbox
Author: W3Schools
Date:
Code version:
Availability:
Location: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_modal_lightbox
*/

var modalOpen = false;

// Open the Modal
function openModal() {
  modalOpen = true;
  disableScroll();
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  modalOpen = false;
  enableScroll();
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/*
Title: How to disable scrolling temporarily using JavaScript?
Author: GeeksforGeeks
Date:
Code version:
Availability:
Location: https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/
*/

// Disable scroll
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  document.body.style.overflow = 'hidden'; // hide scroll bars
  window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
  };
}

// Enable scroll
function enableScroll() {
  document.body.style.overflow = 'visible'; // show scroll bars
  window.onscroll = function() {};
}
