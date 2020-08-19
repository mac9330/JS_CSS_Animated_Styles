import "./styles/index.scss";

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
