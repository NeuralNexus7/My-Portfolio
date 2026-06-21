window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});

document.querySelectorAll("a").forEach(link => {

    if (
        link.hostname === window.location.hostname &&
        !link.hasAttribute("target") &&
        !link.href.includes("#")
    ) {

        link.addEventListener("click", function(e) {

            e.preventDefault();

            const destination = this.href;

            document.body.classList.add("page-exit");

            setTimeout(() => {
                window.location.href = destination;
            }, 700);

        });

    }

});