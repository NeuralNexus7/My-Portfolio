const profileSection = document.querySelector("#profile");
const cardsWrapper = document.querySelector(".cards-wrapper");

const profileObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            cardsWrapper.classList.remove("show");

            void cardsWrapper.offsetWidth;

            cardsWrapper.classList.add("show");

        }else{

            cardsWrapper.classList.remove("show");

        }

    });

},{
    threshold:0.4
});

profileObserver.observe(profileSection);