const aboutSection = document.querySelector("#about");
const aboutImageBox = document.querySelector(".about-image-box");
const aboutCard = document.querySelector(".about-card");
const aboutText = document.querySelector(".about-text");

// Store original text from HTML
const fullText = aboutText.textContent.trim();
aboutText.textContent = ""; // clear for typing effect

let i = 0;
let typingStarted = false;

function typeWriter() {
    if (i < fullText.length) {
        aboutText.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeWriter, 25); // typing speed
    }
}

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // Slide animations
            aboutImageBox.classList.add("show");
            aboutCard.classList.add("show");

            // Start typing only once
            if (!typingStarted) {
                typingStarted = true;
                typeWriter();
            }

        } else {

            // optional reset (remove if you want one-time animation only)
            aboutImageBox.classList.remove("show");
            aboutCard.classList.remove("show");

        }

    });

}, {
    threshold: 0.5
});

observer.observe(aboutSection);