import "./styles/index.scss";


// hero images interact on scroll
const heroEles = document.querySelectorAll('.hero')
// define position based on scroll percent
const scrollHero = () => {
  let scrollTop = window.scrollY - (prevScrollTop || 0);

  heroEles[0].style.left =  42 - scrollTop / 5 + "%"
  heroEles[0].style.top = scrollTop + 200 + "px"

  heroEles[1].style.left =  42 + scrollTop / 5 + "%"
  heroEles[1].style.top = scrollTop + 300 + "px"

  enhance()
  
  let prevScrollTop = window.scrollY // important being used on line 13 dont delete again :(
}
// event listener for hero image animation on scroll
window.addEventListener("scroll", scrollHero)


// load top of page after reload (removed)
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

// typewriter

const text = ["Frontend Developer!", "Backend Developer!", "Database Engineer!", "Data Scientist!", "Graphic Designer!", "FullStack Developer!", "Software Engineer!"]
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function type() {
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

document.addEventListener("DOMContentLoaded", enhance())

function enhance() {


  let scrollpos = window.scrollY
  const body = document.querySelector("body");
  const nav = document.querySelector("nav");
  const chevrons = document.querySelectorAll(".chevron");
  const background = document.querySelector(".center")

  const content1_height = body.offsetHeight

  const add_class_on_scroll = () => {
    body.classList.add("content2");
    nav.classList.add("nav");
    background.classList.add("center-change")
    chevrons.forEach(chevron => chevron.classList.add("chevron-change"));

  }
  const remove_class_on_scroll = () => {
    body.classList.remove("content2");
    nav.classList.remove("nav");
    chevrons.forEach(chevron => chevron.classList.remove("chevron-change"));
    background.classList.remove("center-change")
  } 

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= content1_height + 168) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }

  })

}

document.getElementById('design-button').addEventListener('click', function (event) {
  if (event.target.tagName === 'LABEL' || event.target.tagName === 'SPAN') {
    return;
  }
  document.getElementById('designer').classList.toggle("draw")
})

