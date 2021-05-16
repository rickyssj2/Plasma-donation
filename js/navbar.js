const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const mainNavLinks = document.querySelectorAll('.abc');
const sections = document.querySelectorAll('section')
const navLink = document.querySelectorAll(".nav-link");


window.addEventListener('scroll', e => {
    let fromTop = window.scrollY + 10;

    mainNavLinks.forEach(link => {
        console.log(link.hash);
        let section = document.querySelector(link.hash)
        if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
            link.classList.add('current')
        } else{
            link.classList.remove('current')
        }
    })
})

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}