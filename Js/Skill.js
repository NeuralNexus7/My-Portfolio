const filterButtons = document.querySelectorAll(".filter-btn");
const skillBoxes = document.querySelectorAll(".skill-box");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        skillBoxes.forEach(skill => {

            if (
                filter === "all" ||
                skill.classList.contains(filter)
            ) {
                skill.style.display = "flex";
            } else {
                skill.style.display = "none";
            }

        });

    });

});