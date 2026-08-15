console.log("javascript is connected");

let year=new Date().getFullYear();
document.querySelector(".site-footer p").innerHTML=
`&copy; ${year} nisha roy. All rights reserved`;

function getGreeting(){
    const hour=new Date().getHours();
    if(hour<12) return"Good Morning";
    if(hour<17) return"Good Afternoon";
    return "Good Evening"
}
let hero=document.querySelector(".hero-section h1")
if(hero){
    hero.textContent=`${getGreeting()},I'm Nisha Roy👋`
}

//menu toggle

let menuToggle=document.querySelector(".menu-toggle");
let navLinks=document.querySelector(".nav-links");
menuToggle.addEventListener("click",() => {
    navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",navLinks.classList.contains("open"))
})

let header=document.querySelector(".site-header")
window.addEventListener('scroll',() => {
    if(window.scrollY > 50){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove("scrolled")
    }
})
let sections=document.querySelectorAll('section[id]');
let navitems=document.querySelectorAll(".nav-links a")

window.addEventListener("scroll",() => {
    let current="";
    sections.forEach(section=>{
        if(window.scrollY>=section.offsetTop-100) {
            current=section.getAttribute("id");
        }
   })
   
   navitems.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute('href')===`#${current}`){
        link.classList.add("active")
    }
})
})
