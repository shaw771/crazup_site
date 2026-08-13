
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

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const data = new FormData(form);
            const company = data.get("company") ? `\nEmpresa: ${data.get("company")}` : "";
            const text =
                "Olá, Crazy Up! Gostaria de conversar sobre um projeto.\n\n" +
                `Nome: ${data.get("name")}\n` +
                `E-mail: ${data.get("email")}` +
                `${company}\n` +
                `Serviço: ${data.get("service")}\n\n` +
                `Mensagem:\n${data.get("message")}`;
            const whatsappUrl = `https://wa.me/5512991503338?text=${encodeURIComponent(text)}`;

            formMessage.textContent = "Abrindo o WhatsApp com sua mensagem...";
            formMessage.classList.remove("text-muted");
            formMessage.classList.add("text-success");
            window.open(whatsappUrl, "_blank", "noopener");
        });
    }
});
