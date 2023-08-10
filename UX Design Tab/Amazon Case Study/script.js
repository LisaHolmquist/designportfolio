

const observer = new IntersectionObserver(animate, {threshold: 0.25});

function animate(entries, observer)
{
    entries.forEach(entry => {
        //const animated = document.querySelectorAll(".animated");
        //console.log("entry=" + entry);
        if(entry.isIntersecting){
            entry.target.classList.add("inView");
            //console.log("running");
        } else{
            //console.log("outOfView");
            entry.target.classList.remove("inView");
        };
    });
}
const animList = document.querySelectorAll(".animated");
animList.forEach(entry => {
    //console.log("entry=" + entry);
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



//document.getElementById("backToTop").addEventListener("mouseover", mouseOver);
//console.log("mouse over");
//document.getElementById("backToTop").addEventListener("mouseout", mouseOut);

//function mouseOver() {
    //el=document.getElementById("backToTop");
    //console.log("mouse in");
    //el.classList.add(".hoverTop");
//}
//function mouseOut() {
    //console.log("mouse out");
    //document.getElementById("backToTop").classList.remove(".hoverTop");
//}
