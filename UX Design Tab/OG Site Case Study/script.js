

const observer = new IntersectionObserver(animate, {threshold: 0.25});

function animate(entries, observer)
{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("inView");
        } else{
            entry.target.classList.remove("inView");
        };
    });
}
const animList = document.querySelectorAll(".animated");
animList.forEach(entry => {
    observer.observe(entry);
});



const backToTop = document.querySelector("#backToTop");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backToTop.classList.add("activeTop");
    } else {
        backToTop.classList.remove("activeTop");
    }
});



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

