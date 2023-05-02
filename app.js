// storing window height and width in their respective variables
let height = window.innerHeight;
let width = window.innerWidth;

// checking if window is at the photos.html page to load the slideshow elements and functions
if (window.location.pathname == "/photos.html") {
  // the following has been adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  // function to display the slides
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

// initializing buttons on the homescreen for gallery, video, and creators that
// will take the user to the respective pages when clicked

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

  // upon clicking the back-to-top button, the website scrolls back to the top of the homepage
  // it takes an invisible placeholder at the top-left of the homepage as its reference of where to scroll to
  document.getElementById("back-to-top").addEventListener("click", function () {
    const target = document.querySelector("#placeholder-2");
    target.scrollIntoView({ behavior: "smooth" });
  });
}
