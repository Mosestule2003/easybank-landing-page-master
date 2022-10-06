const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItemCenter = document.querySelector(".nav-item-center");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navItemCenter.classList.toggle("active");
    // navItemCenter.style.display = block;
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))