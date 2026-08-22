
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
    let contactAction = "whatsapp";

    if (form) {
        form.querySelectorAll("[data-contact-action]").forEach((button) => {
            button.addEventListener("click", () => {
                contactAction = button.dataset.contactAction;
            });
        });

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
            const emailSubject = "Novo contato pelo site Crazy Up";
            const emailUrl = `mailto:c.eusth@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(text)}`;

            const isEmail = contactAction === "email";
            formMessage.textContent = isEmail
                ? "Abrindo seu aplicativo de e-mail com a mensagem preenchida..."
                : "Abrindo o WhatsApp com sua mensagem...";
            formMessage.classList.remove("text-muted");
            formMessage.classList.add("text-success");
            window.open(isEmail ? emailUrl : whatsappUrl, "_blank", "noopener");
        });
    }

    const projectEntries = `01 foodee|index.html
02 tasty|about.html
03 ethereal|index.html
04 karmo|contact.html
05 bodo|index.html
06 portfolio-master|index.html
07 Snow-master|blog-single.html
08 Synthetica|index.html
09 Sprout-master|image-background.html
10 bicycling-master|index.html
100 CookingSchool|index.html
11 megakit-master|HTML/about.html
12 GARAGE|contact.html
13 Knight|index.html
14 New Age|index.html
15 Treviso|index.html
16 story|index-demo.html
17 Cardio|index.html
18 infinity|index.html
19 Made One|index.html
20 Made Two|index.html
21 Weather|index.html
22 John Doe|index.html
23 rage|index.html
24 Solid-State|elements.html
25 Invention|elements.html
26 exigo|index.html
27 logic|index.html
28 clemo|aboutus.html
29 bino|index.html
30 hats|index.html
31 vira|elements.html
32 landing-zero|index.html
33 Aircv|HTML/index.html
34 wow|element.html
35 Volcan|elements.html
36 rabbit|index.html
37 Lazyfox|index.html
38 conference|index.html
39 SIGHT|about.html
40 Metronic-Shop-UI|theme/shop-about.html
41 Metronic-One-Page|theme/index.html
42 navigator-onepage|index.html
43 Metronic-One-Page|theme/index.html
44 fame|index.html
45 themelight|blog.html
46 Plantilla|index.html
47 avana|about.html
48 Metronic-Frontend|theme/blog-item.html
49 Asentus|HTML/about.html
50 airspace|contact.html
51 acidus|HTML/about.html
52 AppLayers|about-us.html
53 BizExpress|index.html
54 Bizium|blog.html
55 robot_factory|about.html
56 ghughu|about.html
57 Texas-Lawyer|index.html
58 lifetrackr|404.html
59 Euro-Travels|about.html
60 MeatKing|index.html
61 Mamma-s-Kitchen|index.html
62 Twenty|contact.html
63 Spectral|elements.html
64 gentelella|documentation/index.html
65 boxer|index.html
66 white_pro|blog-post.html
67 awesome|index.html
68 JohnDoe|index.html
69 lucy|index.html
70 brandi|index.html
71 meghna|blog.html
72 Navada-plus|index.html
73 Rain|index.html
74 sports-coach|index.html
75 agency|about.html
76 humanity|about.html
77 Imminent|index.html
78 Evento|index.html
79 layla|index.html
80 restaurant|index.html
81 Travellers|index.html
82 Restaurant|index.html
83 Fitness|index.html
84 Creative|index.html
85 Awesome|index.html
86 Photographer|index.html
87 Luxury|index.html
88 DarkJoe|index.html
89 Developer|index.html
90 polo|HTML/index.html
91 Renessa|index.html
92 Office|about.html
93 Flusk|index.html
94 the_portfolio|index.html
95 Initio|about.html
96 dolphin|index.html
97 Soft-Tech|index.html
98 Mind-Craft|index.html
99 Season|index.html
academia|index.html
advocacia|index.html
clinica-estetica|index.html
clinica-medica|index.html
coach-consultor|index.html
consultorio-odontologico|index.html
contabilidade|index.html
escola-idiomas|index.html
imobiliaria|index.html
infoprodutor|index.html
loja-roupa|index.html
oficina-mecanica|index.html
petshop|index.html
restaurante|index.html
salao-beleza|index.html`.trim().split("\n").map((entry) => {
        const [folder, page] = entry.split("|");
        return { folder, page };
    });

    const encodePath = (path) => path.split("/").map(encodeURIComponent).join("/");
    const projectTitle = (folder) => folder.replace(/^\d+\s+/, "").replace(/[-_]/g, " ");
    const projectCard = (project, index, basePath) => {
        const title = projectTitle(project.folder);
        const projectUrl = `${basePath}page-project/${encodePath(project.folder)}/${encodePath(project.page)}`;
        return `<div class="col-md-6 col-lg-4"><article class="portfolio-card h-100"><div class="project-screen"><iframe src="${projectUrl}" title="Prévia do projeto ${title}" loading="lazy"></iframe><span>CRAZY UP / ${String(index + 1).padStart(2, "0")}</span></div><div class="portfolio-card__content"><span class="project-type">EXPERIÊNCIA DIGITAL</span><h3>${title}</h3><a class="project-link" href="${projectUrl}" target="_blank" rel="noopener">Abrir projeto <span aria-hidden="true">↗</span></a></div></article></div>`;
    };

    const projectGrid = document.getElementById("projectGrid");
    if (projectGrid) {
        projectGrid.innerHTML = projectEntries.map((project, index) => projectCard(project, index, "../")).join("") + `<div class="col-md-6 col-lg-4"><a class="portfolio-add-card h-100" href="contato.html"><span class="portfolio-add-card__plus" aria-hidden="true">+</span><span class="project-type">PRÓXIMO PROJETO</span><h3>Seu projeto pode ser o próximo destaque.</h3><p>Vamos conversar sobre a sua ideia?</p><span class="project-link">Falar com a Crazy Up <span aria-hidden="true">→</span></span></a></div>`;
    }

    const homeProjectGrid = document.getElementById("homeProjectGrid");
    if (homeProjectGrid) {
        homeProjectGrid.innerHTML = projectEntries.slice(0, 3).map((project, index) => projectCard(project, index, "")).join("");
    }
});
