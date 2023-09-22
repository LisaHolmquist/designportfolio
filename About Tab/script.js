
const hamburger = document.querySelector(".burger-menu");
const navbar = document.querySelector(".mob-nav");

hamburger.addEventListener("click", ()=> {
    navbar.classList.toggle("open");
});

const hamburgerBtn = document.querySelector('.burger-menu');
let hamburgerOpen = false;

hamburgerBtn.addEventListener('click', () => {
    if (!hamburgerOpen) {
        hamburgerBtn.classList.add('open');
        hamburgerOpen = true;
    } else {
        hamburgerBtn.classList.remove('open');
        hamburgerOpen = false;
    }
});
