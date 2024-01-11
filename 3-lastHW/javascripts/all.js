
//toggleNav
const showNav = document.querySelector("#showNav");
const closeNav = document.querySelector("#closeNav");
const body = document.querySelector("body");
showNav.addEventListener("click", () => {
    showNav.classList.toggle("fa-bars");
    body.classList.toggle("toggle-nav");
})
closeNav.addEventListener("click", () => {
    showNav.classList.toggle("fa-bars");
    body.classList.toggle("toggle-nav");
})

