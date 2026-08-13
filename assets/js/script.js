
document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.endsWith(currentPage)) {
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        }
    });

    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            formMessage.textContent =
                "Formulário demonstrativo: conecte este formulário ao seu e-mail, WhatsApp ou backend para receber as mensagens.";
            formMessage.classList.remove("text-muted");
            formMessage.classList.add("text-success");
        });
    }
});
