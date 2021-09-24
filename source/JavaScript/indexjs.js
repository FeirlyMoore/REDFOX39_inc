console.log('%cТы шо, Вася, потерялася ? 👿', 'font: 5em roboto; color: #e95420;');

let nav = document.querySelector('.nav_block');

window.onscroll = () => ScrollNav();

function ScrollNav() {
  if (document.body.scrollDown > 50 || document.documentElement.scrollTop > 50) nav.classList.add = "mobile-menu2";
  
  nav.classList.remove = "mobile-menu2";/*mobile-menu*/
}
