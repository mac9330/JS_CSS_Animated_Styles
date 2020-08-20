import "./styles/index.scss";
import TxtType from "./scripts/typewriter"

// hero images interact on scroll
const heroEles = document.querySelectorAll('.hero')
// define position based on scroll percent
const scrollHero = () => {
  let scrollTop = window.scrollY - (prevScrollTop || 0);

  heroEles[0].style.left =  42 - scrollTop / 8 + "%"
  heroEles[0].style.top = scrollTop + 200 + "px"

  heroEles[1].style.left =  42 + scrollTop / 8 + "%"
  heroEles[1].style.top = scrollTop + 300 + "px"
  
  let prevScrollTop = window.scrollY // important being used on line 13 dont delete again :(
}
// event listener for hero image animation on scroll
window.addEventListener("scroll", scrollHero)


// load top of page after reload
// window.onbeforeunload = function () {
//   if (window.scrollTo) window.scrollTo(0, 0);
// };

// end of hero image / start of grid buttons


// card flip click listener

let cardOne = document.querySelector('.card-1');
cardOne.addEventListener('click', () => {
  cardOne.classList.toggle('is-flipped');
});

let cardTwo = document.querySelector('.card-2');
cardTwo.addEventListener('click', () => {
  cardTwo.classList.toggle('is-flipped');
});

let cardThree = document.querySelector('.card-3');
cardThree.addEventListener('click', () => {
  cardThree.classList.toggle('is-flipped');
});

let cardFour = document.querySelector('.card-4');
cardFour.addEventListener('click', () => {
  cardFour.classList.toggle('is-flipped');
});

let cardFive = document.querySelector('.card-5');
cardFive.addEventListener('click', () => {
  cardFive.classList.toggle('is-flipped');
});

let cardSix = document.querySelector('.card-6');
cardSix.addEventListener('click', () => {
  cardSix.classList.toggle('is-flipped');
});

const text = ["Frontend Developer!", "Backend Developer!", "Database Engineer!", "Data Scientist!", "Graphic Designer!", "FullStack Developer!", "Software Engineer!"]
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

// debugger

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function type() {
  // debugger
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index)
  document.querySelector('.typewriter').textContent = letter;

  if(letter.length === currentText.length) {
    setTimeout(erase, 3000)
  } else {
    setTimeout(type, 200);
  }
}

function erase() {
  if (index > 0) {
    currentText = text[count];
    letter = currentText.slice(0, --index)
    document.querySelector('.typewriter').textContent = letter;
    setTimeout(erase, 200)
  } 
  else {
    count++;
    setTimeout(type, 1000)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000)
})
