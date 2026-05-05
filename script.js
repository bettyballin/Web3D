/* =============================================================
   Carlos · Mechanical Engineer — script
   - bilingual (ES/EN) toggle
   - mobile menu
   - lightweight contact form handling (mailto fallback)
   ============================================================= */

const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.process": "Proceso",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Ingeniero Mecánico · Diseño 3D",
    "hero.title1": "De la idea",
    "hero.title2": "al prototipo funcional.",
    "hero.sub":
      "Soy Carlos, ingeniero mecánico especializado en modelado CAD, diseño de producto y fabricación digital. Convierto conceptos en piezas listas para producir.",
    "hero.ctaPrimary": "Ver proyectos",
    "hero.ctaSecondary": "Solicitar presupuesto",

    "stats.years": "Años de experiencia",
    "stats.projects": "Proyectos entregados",
    "stats.clients": "Clientes satisfechos",

    "about.eyebrow": "Sobre mí",
    "about.title": "Ingeniería con criterio, diseño con propósito.",
    "about.lead":
      "Combino formación en ingeniería mecánica con experiencia en fabricación para entregar diseños viables, optimizados y listos para producción.",
    "about.body":
      "Trabajo con startups, talleres de fabricación y equipos de I+D en proyectos de modelado 3D, diseño paramétrico, ingeniería inversa y preparación de archivos para CNC, impresión 3D e inyección. Mi prioridad: entregar planos claros, tolerancias correctas y un diseño que resuelva el problema real.",
    "about.tag1": "Mecánica",
    "about.tag2": "Producto",
    "about.tag3": "Fabricación",

    "services.eyebrow": "Servicios",
    "services.title": "Lo que puedo hacer por ti.",
    "services.lead":
      "Soluciones completas de diseño mecánico, desde el primer boceto hasta los archivos finales de fabricación.",
    "services.s1.title": "Modelado 3D & CAD",
    "services.s1.body":
      "Modelos paramétricos precisos en SolidWorks o Fusion 360, listos para iterar y producir.",
    "services.s2.title": "Planos técnicos",
    "services.s2.body":
      "Planos 2D normalizados con cotas, tolerancias y GD&T para taller y proveedores.",
    "services.s3.title": "Ingeniería inversa",
    "services.s3.body":
      "Reconstrucción de piezas existentes a partir de mediciones o escaneos 3D.",
    "services.s4.title": "Diseño para fabricación",
    "services.s4.body":
      "Optimización de piezas para CNC, impresión 3D, inyección y chapa metálica.",
    "services.s5.title": "Prototipado rápido",
    "services.s5.body":
      "Iteraciones físicas con impresión 3D FDM/SLA para validar funcionamiento y ergonomía.",
    "services.s6.title": "Render & visualización",
    "services.s6.body":
      "Imágenes fotorrealistas para presentaciones, marketing y validación con cliente.",

    "projects.eyebrow": "Proyectos",
    "projects.title": "Selección de trabajos recientes.",
    "projects.p1.tag": "Producto industrial",
    "projects.p1.title": "Carcasa de motor compacto",
    "projects.p1.body":
      "Diseño y optimización para mecanizado CNC en aluminio 6061.",
    "projects.p2.tag": "Estructura",
    "projects.p2.title": "Bastidor ligero de aluminio",
    "projects.p2.body":
      "Análisis estructural FEA y reducción de peso del 22 %.",
    "projects.p3.tag": "Electrónica",
    "projects.p3.title": "Carcasa para placa IoT",
    "projects.p3.body":
      "Diseño para impresión 3D con clips a presión y disipación pasiva.",
    "projects.p4.tag": "Mecanismo",
    "projects.p4.title": "Mecanismo de plegado",
    "projects.p4.body":
      "Cinemática y diseño paramétrico para mobiliario portátil.",
    "projects.p5.tag": "Render",
    "projects.p5.title": "Visualización de producto",
    "projects.p5.body":
      "Renders fotorrealistas para campaña de lanzamiento.",
    "projects.p6.tag": "Ingeniería inversa",
    "projects.p6.title": "Reconstrucción de pieza obsoleta",
    "projects.p6.body":
      "A partir de medición manual, listo para refabricar en CNC.",

    "process.eyebrow": "Proceso",
    "process.title": "Cómo trabajo.",
    "process.lead":
      "Un flujo claro y transparente, pensado para minimizar iteraciones y entregar a tiempo.",
    "process.p1.title": "Briefing",
    "process.p1.body":
      "Entendemos requisitos, restricciones y objetivos del proyecto.",
    "process.p2.title": "Concepto",
    "process.p2.body":
      "Bocetos y propuestas iniciales con materiales y proceso de fabricación.",
    "process.p3.title": "Diseño 3D",
    "process.p3.body":
      "Modelado paramétrico, validación y revisiones en conjunto.",
    "process.p4.title": "Entrega",
    "process.p4.body":
      "Planos, archivos STEP/STL y documentación lista para producir.",

    "contact.eyebrow": "Contacto",
    "contact.title": "¿Tienes un proyecto en mente?",
    "contact.lead":
      "Cuéntame qué necesitas. Respondo en menos de 24 horas con una propuesta inicial sin compromiso.",
    "contact.email": "Email",
    "contact.location": "Ubicación",
    "contact.locationVal": "Madrid, España · Trabajo remoto",
    "contact.availability": "Disponibilidad",
    "contact.availabilityVal": "Aceptando proyectos para 2026",

    "form.name": "Nombre",
    "form.email": "Email",
    "form.message": "Mensaje",
    "form.submit": "Enviar mensaje",
    "form.validation": "Por favor, rellena todos los campos.",
    "form.success": "¡Gracias! Abriendo tu cliente de correo…",

    "footer.rights": "Todos los derechos reservados.",
    "footer.tag": "Diseño mecánico · Modelado 3D · Fabricación",

    "meta.title": "Carlos · Ingeniero Mecánico · Diseño 3D & CAD",
    "meta.description":
      "Carlos — Ingeniero Mecánico. Diseño 3D, modelado CAD, simulación e ingeniería de producto.",
  },

  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.process": "Process",
    "nav.contact": "Contact",

    "hero.eyebrow": "Mechanical Engineer · 3D Design",
    "hero.title1": "From idea",
    "hero.title2": "to working prototype.",
    "hero.sub":
      "I'm Carlos, a mechanical engineer specialised in CAD modelling, product design and digital fabrication. I turn concepts into production-ready parts.",
    "hero.ctaPrimary": "View projects",
    "hero.ctaSecondary": "Request a quote",

    "stats.years": "Years of experience",
    "stats.projects": "Projects delivered",
    "stats.clients": "Happy clients",

    "about.eyebrow": "About",
    "about.title": "Engineering with judgement, design with purpose.",
    "about.lead":
      "I combine mechanical-engineering training with hands-on manufacturing experience to deliver feasible, optimised, production-ready designs.",
    "about.body":
      "I work with startups, fabrication workshops and R&D teams on 3D modelling, parametric design, reverse engineering and file preparation for CNC, 3D printing and injection moulding. My priority: clear drawings, correct tolerances and a design that solves the real problem.",
    "about.tag1": "Mechanical",
    "about.tag2": "Product",
    "about.tag3": "Manufacturing",

    "services.eyebrow": "Services",
    "services.title": "What I can do for you.",
    "services.lead":
      "End-to-end mechanical design — from the first sketch to the final manufacturing files.",
    "services.s1.title": "3D Modelling & CAD",
    "services.s1.body":
      "Precise parametric models in SolidWorks or Fusion 360, ready to iterate and produce.",
    "services.s2.title": "Technical drawings",
    "services.s2.body":
      "Standards-compliant 2D drawings with dimensions, tolerances and GD&T for shop and suppliers.",
    "services.s3.title": "Reverse engineering",
    "services.s3.body":
      "Reconstruction of existing parts from measurements or 3D scans.",
    "services.s4.title": "Design for manufacturing",
    "services.s4.body":
      "Part optimisation for CNC, 3D printing, injection moulding and sheet metal.",
    "services.s5.title": "Rapid prototyping",
    "services.s5.body":
      "Physical iterations with FDM/SLA 3D printing to validate function and ergonomics.",
    "services.s6.title": "Render & visualisation",
    "services.s6.body":
      "Photorealistic imagery for presentations, marketing and client validation.",

    "projects.eyebrow": "Projects",
    "projects.title": "A selection of recent work.",
    "projects.p1.tag": "Industrial product",
    "projects.p1.title": "Compact motor housing",
    "projects.p1.body":
      "Design and optimisation for CNC machining in 6061 aluminium.",
    "projects.p2.tag": "Structure",
    "projects.p2.title": "Lightweight aluminium frame",
    "projects.p2.body":
      "FEA structural analysis with a 22% weight reduction.",
    "projects.p3.tag": "Electronics",
    "projects.p3.title": "IoT board enclosure",
    "projects.p3.body":
      "3D-printable design with snap-fit clips and passive cooling.",
    "projects.p4.tag": "Mechanism",
    "projects.p4.title": "Folding mechanism",
    "projects.p4.body":
      "Kinematics and parametric design for portable furniture.",
    "projects.p5.tag": "Render",
    "projects.p5.title": "Product visualisation",
    "projects.p5.body":
      "Photorealistic renders for a launch campaign.",
    "projects.p6.tag": "Reverse engineering",
    "projects.p6.title": "Obsolete-part reconstruction",
    "projects.p6.body":
      "Built from manual measurements, ready to remanufacture on CNC.",

    "process.eyebrow": "Process",
    "process.title": "How I work.",
    "process.lead":
      "A clear, transparent workflow designed to minimise iterations and deliver on time.",
    "process.p1.title": "Briefing",
    "process.p1.body":
      "We map requirements, constraints and project goals.",
    "process.p2.title": "Concept",
    "process.p2.body":
      "Initial sketches and proposals including materials and process.",
    "process.p3.title": "3D design",
    "process.p3.body":
      "Parametric modelling, validation and joint reviews.",
    "process.p4.title": "Delivery",
    "process.p4.body":
      "Drawings, STEP/STL files and documentation, ready to produce.",

    "contact.eyebrow": "Contact",
    "contact.title": "Got a project in mind?",
    "contact.lead":
      "Tell me what you need. I reply within 24 hours with an initial, no-strings proposal.",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.locationVal": "Madrid, Spain · Remote work",
    "contact.availability": "Availability",
    "contact.availabilityVal": "Booking projects for 2026",

    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.submit": "Send message",
    "form.validation": "Please fill in all fields.",
    "form.success": "Thanks! Opening your email client…",

    "footer.rights": "All rights reserved.",
    "footer.tag": "Mechanical design · 3D modelling · Manufacturing",

    "meta.title": "Carlos · Mechanical Engineer · 3D & CAD Design",
    "meta.description":
      "Carlos — Mechanical Engineer. 3D design, CAD modelling, simulation and product engineering.",
  },
};

const STORAGE_KEY = "carlos.lang";

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  const titleKey = dict["meta.title"];
  if (titleKey) document.title = titleKey;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict["meta.description"]) {
    metaDesc.setAttribute("content", dict["meta.description"]);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
}

function detectInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) return stored;
  } catch (_) {}
  const nav = (navigator.language || "es").toLowerCase();
  return nav.startsWith("en") ? "en" : "es";
}

/* ----- mobile menu ----- */
function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ----- contact form (mailto fallback, no backend) ----- */
function setupForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form || !note) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = document.documentElement.lang === "en" ? "en" : "es";
    const dict = translations[lang];

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    note.hidden = false;
    note.classList.remove("is-success", "is-error");

    if (!name || !email || !message) {
      note.textContent = dict["form.validation"];
      note.classList.add("is-error");
      return;
    }

    const subject = encodeURIComponent(
      lang === "en"
        ? `New project enquiry from ${name}`
        : `Nuevo proyecto de ${name}`
    );
    const body = encodeURIComponent(
      `${name} <${email}>\n\n${message}`
    );
    window.location.href = `mailto:hola@carlos-eng.com?subject=${subject}&body=${body}`;

    note.textContent = dict["form.success"];
    note.classList.add("is-success");
    form.reset();
  });
}

/* ----- language buttons ----- */
function setupLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
}

/* ----- footer year ----- */
function setupYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  setupLangButtons();
  setupMenu();
  setupForm();
  setupYear();
  applyLanguage(detectInitialLang());
});
