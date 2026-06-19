// Typing Animation

let text = [
"Frontend Developer",
"Java Programmer",
"Web Designer",
"CSE Student"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

current = text[i];

if(!isDeleting){
document.getElementById("typing")
.innerHTML = current.substring(0,j++);
}
else{
document.getElementById("typing")
.innerHTML = current.substring(0,j--);
}

if(j==current.length+1){
isDeleting=true;
}

if(j==0){
isDeleting=false;
i++;

if(i==text.length){
i=0;
}
}

setTimeout(type,120);

}
if (document.getElementById("typing")) {
    type();
}


// Contact Form Event

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message Sent Successfully!");
    });
}




// Hover Event

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.boxShadow = "0 0 20px cyan";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const themeToggle = document.getElementById("theme-toggle");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");

            const icon = themeToggle.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-moon");
                icon.classList.toggle("fa-sun");
            }
        });
    }

});