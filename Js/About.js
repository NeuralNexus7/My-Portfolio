const aboutSection = document.querySelector("#about");
const aboutCard = document.querySelector(".about-card");

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            aboutCard.classList.remove("show");

            void aboutCard.offsetWidth;

            aboutCard.classList.add("show");

        }else{

            aboutCard.classList.remove("show");

        }

    });

},{
    threshold:0.4
});

aboutObserver.observe(aboutSection);