// ==========================================
// SMOOTH SCROLL REVEAL
// ==========================================

const reveals = document.querySelectorAll(
".section-title, .about-text, .service-card, .gallery-item, .timeline-item, .project-card, .platform-card, .contact-card"
);

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach((item,index)=>{

const top = item.getBoundingClientRect().top;

if(top < windowHeight - 120){

setTimeout(()=>{

item.classList.add("active");

},index*20);

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


// ==========================================
// BACK TO TOP
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.style.display="none";

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==========================================
// COPY DISCORD USERNAME
// ==========================================

const copyBtn = document.getElementById("copyDiscord");

const discordName = document.getElementById("discordName");

copyBtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(discordName.innerText);

    copyBtn.innerText="Copied!";

    setTimeout(()=>{

        copyBtn.innerText="Copy Username";

    },2000);

});


// ==========================================
// ACTIVE NAVBAR (Future Support)
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ==========================================
// GALLERY CLICK EFFECT
// ==========================================

const gallery = document.querySelectorAll(".gallery-item");

gallery.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(.97)";

        setTimeout(()=>{

            card.style.transform="scale(1)";

        },150);

    });

});


// ==========================================
// HERO PARALLAX
// ==========================================

window.addEventListener("scroll",()=>{

    const hero = document.querySelector("#hero");

    hero.style.backgroundPositionY =
    window.scrollY * 0.35 + "px";

});


// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

const buttons = document.querySelectorAll(

".hero-btn,.project-btn,.contact-card button,.contact-card a"

);

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transition=".3s";

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


// ==========================================
// PAGE LOADED
// ==========================================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

    setTimeout(()=>{

        document.getElementById("loader").classList.add("hide");

    },1800);

});

// ==========================
// SCROLL PROGRESS BAR
// ==========================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop / scrollHeight) * 100;

progressBar.style.width =
progress + "%";

});

// Navbar Scroll Effect

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "1s ease";

        setTimeout(() => {
            loader.style.display = "none";
        },1000);

    },3500);

});
