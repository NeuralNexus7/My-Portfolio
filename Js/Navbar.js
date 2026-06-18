const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Active page highlight

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    const linkPage = link.getAttribute("href");

    if (
        currentPage === linkPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {
        link.classList.add("active");
    }
});