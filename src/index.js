import "./styles/index.scss";

let scrollTop = window.scrollY

const heroEles = document.querySelectorAll('.hero')
heroEles[0].style.left = "50%"
heroEles[1].style.left = "50%"
heroEles[0].style.top = scrollTop + 200 + "px"
heroEles[1].style.top = scrollTop + 300 + "px"


const scrollHero = () => {
  let scrollTop = window.scrollY - (prevScrollTop || 0);

  heroEles[0].style.left =  50 - scrollTop / 8 + "%"
  heroEles[0].style.top = scrollTop + 200 + "px"

  heroEles[1].style.left =  50 + scrollTop / 8 + "%"
  heroEles[1].style.top = scrollTop + 300 + "px"
  
  let prevScrollTop = window.scrollY // important being used on line 18 dont delete again :(
}


// event listener for hero image animation on scroll
window.addEventListener("scroll", scrollHero)


// load top of page after reload
window.onbeforeunload = function () {
  if (window.scrollTo) window.scrollTo(0, 0);
};