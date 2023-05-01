// storing window height and width in their respective variables
let height = window.innerHeight;
let width = window.innerWidth;

if (window.location.pathname == "/photos.html") {
let slideIndex = 1;
if (window.location.pathname == "/photos.html") {
  showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
}

// initializing buttons on the homescreen for story, video, and cast that
// will scroll to the respective pages when clicked

// if (window.location.pathname == "/index.html") {
let button1;
button1 = document
  .getElementById("button1")
  .addEventListener("click", function () {
    window.location.href = "cast.html";
  });

let button2;
button2 = document
  .getElementById("button2")
  .addEventListener("click", function () {
    window.location.href = "video.html";
  });

let button3;
button3 = document
  .getElementById("button3")
  .addEventListener("click", function () {
    window.location.href = "photos.html";
  });

if (window.location.pathname == "/index.html") {
  // calling the scroll function for the back-to-top button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    // the button only appears after 300 pixels have been scrolled down
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }

  // upon clicking the back-to-top button, the website scrolls back to the homepage
  // it takes an invisible placeholder at the top-left of the homepage as its reference of where to scroll to
  document.getElementById("back-to-top").addEventListener("click", function () {
    const target = document.querySelector("#placeholder-2");
    target.scrollIntoView({ behavior: "smooth" });
  });
}
