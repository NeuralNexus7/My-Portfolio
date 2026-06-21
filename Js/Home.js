
/* =========================
   HOME TYPEWRITER ONLY
========================= */

const homeText = document.querySelector(".home-text");

let homeStarted = false;

const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting && !homeStarted) {
            homeStarted = true;

            typeWriter(homeText, "I am a Computer Science Engineer", 25);
        }

    });
}, {
    threshold: 0.4
});

homeObserver.observe(document.querySelector("#home"));

/* =========================
   ABOUT SECTION (FIXED)
========================= */

const aboutSection = document.querySelector("#about");
const aboutImageBox = document.querySelector(".about-image-box");
const aboutCard = document.querySelector(".about-card");
const aboutText = document.querySelector(".about-text");

let aboutStarted = false;

// store original text
const aboutString = aboutText.textContent.trim();
aboutText.textContent = "";

function typeWriter(element, text, speed = 25) {
    let i = 0;
    element.textContent = "";

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            aboutImageBox.classList.add("show");
            aboutCard.classList.add("show");

            if (!aboutStarted) {
                aboutStarted = true;
                typeWriter(aboutText, aboutString, 20);
            }

        }

    });

}, {
    threshold: 0.5
});

aboutObserver.observe(aboutSection);