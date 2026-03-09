function loadComponent(id, file)
{
fetch(file)
.then(response => response.text())
.then(data =>
{
document.getElementById(id).innerHTML = data;
});
}

loadComponent("header","header.html");
loadComponent("footer","footer.html");
/* HERO SLIDER */

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index)
{
slides.forEach(slide => slide.classList.remove("active"));
slides[index].classList.add("active");
}

function nextSlide()
{
currentSlide++;

if(currentSlide >= slides.length)
{
currentSlide = 0;
}

showSlide(currentSlide);
}

function prevSlide()
{
currentSlide--;

if(currentSlide < 0)
{
currentSlide = slides.length - 1;
}

showSlide(currentSlide);
}

/* AUTO SLIDER */

setInterval(nextSlide,5000);



/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter =>
{
counter.innerText = "0";

const updateCounter = () =>
{

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 80;

if(count < target)
{
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCounter,20);
}
else
{
counter.innerText = target;
}

};

updateCounter();

});



/* SCROLL REVEAL ANIMATION */

function revealSections()
{

let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++)
{

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 120;

if(elementTop < windowHeight - elementVisible)
{
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll", revealSections);



/* SMOOTH SCROLL FOR MENU LINKS */

document.querySelectorAll("nav a").forEach(anchor =>
{

anchor.addEventListener("click", function(e)
{

let target = this.getAttribute("href");

if(target.startsWith("#"))
{
e.preventDefault();

document.querySelector(target).scrollIntoView(
{
behavior:"smooth"
});
}

});

});



/* HEADER SHADOW WHEN SCROLLING */

window.addEventListener("scroll", function()
{

let header = document.querySelector("header");

if(window.scrollY > 50)
{
header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
}
else
{
header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
}

});

/* MOBILE MENU */

/* MOBILE MENU */

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if(toggle)
{
toggle.addEventListener("click", function()
{
menu.classList.toggle("active");
});
}

