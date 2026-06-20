const aboutSection = document.querySelector("#about");
const aboutCard = document.querySelector(".about-card");
const aboutImageBox = document.querySelector(".about-image-box");

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            aboutCard.classList.add("show");
            aboutImageBox.classList.add("show");
        } 
        else {
            aboutCard.classList.remove("show");
            aboutImageBox.classList.remove("show");
        }

    });

}, {
    threshold: 0.4
});

aboutObserver.observe(aboutSection);