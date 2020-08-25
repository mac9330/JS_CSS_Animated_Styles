"use strict";

require("./styles/index.scss");

// hero images interact on scroll
var heroEles = document.querySelectorAll('.hero'); // define position based on scroll percent

var scrollHero = function scrollHero() {
  var scrollTop = window.scrollY - (prevScrollTop || 0);
  heroEles[0].style.left = 42 - scrollTop / 8 + "%";
  heroEles[0].style.top = scrollTop + 200 + "px";
  heroEles[1].style.left = 42 + scrollTop / 8 + "%";
  heroEles[1].style.top = scrollTop + 300 + "px";
  enhance();
  var prevScrollTop = window.scrollY; // important being used on line 13 dont delete again :(
}; // event listener for hero image animation on scroll


window.addEventListener("scroll", scrollHero); // load top of page after reload
// window.onbeforeunload = function () {
//   if (window.scrollTo) window.scrollTo(0, 0);
// };
// end of hero image / start of grid buttons
// card flip click listener

var cardOne = document.querySelector('.card-1');
cardOne.addEventListener('click', function () {
  cardOne.classList.toggle('is-flipped');
});
var cardTwo = document.querySelector('.card-2');
cardTwo.addEventListener('click', function () {
  cardTwo.classList.toggle('is-flipped');
});
var cardThree = document.querySelector('.card-3');
cardThree.addEventListener('click', function () {
  cardThree.classList.toggle('is-flipped');
});
var cardFour = document.querySelector('.card-4');
cardFour.addEventListener('click', function () {
  cardFour.classList.toggle('is-flipped');
});
var cardFive = document.querySelector('.card-5');
cardFive.addEventListener('click', function () {
  cardFive.classList.toggle('is-flipped');
});
var cardSix = document.querySelector('.card-6');
cardSix.addEventListener('click', function () {
  cardSix.classList.toggle('is-flipped');
}); // typewriter

var text = ["Frontend Developer!", "Backend Developer!", "Database Engineer!", "Data Scientist!", "Graphic Designer!", "FullStack Developer!", "Software Engineer!"];
var count = 0;
var index = 0;
var currentText = '';
var letter = '';

function sleep(milliseconds) {
  var date = Date.now();
  var currentDate = null;

  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function type() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.querySelector('.typewriter').textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(erase, 3000);
  } else {
    setTimeout(type, 200);
  }
}

function erase() {
  if (index > 0) {
    currentText = text[count];
    letter = currentText.slice(0, --index);
    document.querySelector('.typewriter').textContent = letter;
    setTimeout(erase, 200);
  } else {
    count++;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000);
});
document.addEventListener("DOMContentLoaded", enhance());

function enhance() {
  var scrollpos = window.scrollY;
  var body = document.querySelector("body");
  var nav = document.querySelector("nav");
  var chevrons = document.querySelectorAll(".chevron");
  var background = document.querySelector(".center");
  var content1_height = body.offsetHeight;

  var add_class_on_scroll = function add_class_on_scroll() {
    body.classList.add("content2");
    nav.classList.add("nav");
    background.classList.add("center-change");
    chevrons.forEach(function (chevron) {
      return chevron.classList.add("chevron-change");
    });
  };

  var remove_class_on_scroll = function remove_class_on_scroll() {
    body.classList.remove("content2");
    nav.classList.remove("nav");
    chevrons.forEach(function (chevron) {
      return chevron.classList.remove("chevron-change");
    });
    background.classList.remove("center-change");
  };

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= content1_height + 168) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
  });
}

document.getElementById('design-button').addEventListener('click', function (event) {
  if (event.target.tagName === 'LABEL' || event.target.tagName === 'SPAN') {
    return;
  }

  document.getElementById('designer').classList.toggle("draw");
  debugger;
});