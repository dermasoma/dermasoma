"use strict";

/* =========================================================
   GENERAL SETTINGS
========================================================= */

// IMPORTANT: replace this value with the actual number, including
// the country code and without spaces, symbols, or hyphens.
// Example for Peru: 51987654321.
const WHATSAPP_NUMBER = "5113727273";

const GENERAL_WHATSAPP_MESSAGE =
  "Hello, I would like information and to book an appointment with Dr. Juan Quintero.";

/* =========================================================
   TREATMENT DATABASE
   Add, edit, or remove objects without changing the HTML.
========================================================= */
const treatments = [
  {
    id: "toxina-botulinica",
    name: "Botulinum Toxin",
    image: "images/tratamientos/toxina-botulinica.png",
    shortDescription:
      "A procedure designed to soften expression lines and create a refreshed, natural-looking appearance.",
    question: "What is botulinum toxin?",
    applicationTitle: "Where can it be applied?",
    additionalTitle: "What other areas can be treated?",
    content: [
      "Botulinum toxin is a medical treatment that works in a controlled way on specific muscles responsible for dynamic expression lines.",
      "The treatment is planned individually to preserve natural facial expression and achieve balanced results without exaggerated changes."
    ],
    applicationZones: [
      "Expression lines: frown lines, crow’s feet, and forehead lines.",
      "Hyperhidrosis or excessive sweating.",
      "Gummy smile.",
      "Facial rejuvenation."
    ],
    additionalZones: [
      "Gummy smile.",
      "Migraine.",
      "Bruxism.",
      "Facial paralysis.",
      "Hyperhidrosis in selected areas."
    ],
    whatsappMessage:
      "Hello, I would like information and to book an appointment for Botulinum Toxin treatment."
  },
  {
    id: "acido-hialuronico",
    name: "Hyaluronic Acid",
    image: "images/tratamientos/acido-hialuronico.png",
    shortDescription:
      "A facial harmonization treatment that helps restore support, hydration, and proportion in selected areas.",
    question: "What is hyaluronic acid?",
    applicationTitle: "Where can it be applied?",
    additionalTitle: "What other areas can be treated?",
    content: [
      "Hyaluronic acid is a biocompatible substance used in aesthetic medicine to improve contours, provide hydration, and restore volume in specific areas.",
      "The product, technique, and amount are selected according to each patient’s anatomy, goals, and individual characteristics."
    ],
    applicationZones: [
      "Lips.",
      "Cheekbones.",
      "Nasolabial folds.",
      "Chin."
    ],
    additionalZones: [
      "Jawline.",
      "Under-eye hollows in selected patients.",
      "Non-surgical nose reshaping, depending on the evaluation.",
      "Deep lip hydration."
    ],
    whatsappMessage:
      "Hello, I would like information and to book an appointment for a Hyaluronic Acid treatment."
  },
  {
    id: "bioestimulacion-colageno",
    name: "Collagen Biostimulation",
    image: "images/tratamientos/bioestimulacion-colageno.png",
    shortDescription:
      "A progressive protocol designed to improve firmness, skin quality, and facial support by stimulating collagen.",
    question: "What does collagen biostimulation involve?",
    applicationTitle: "Where can it be applied?",
    additionalTitle: "What other areas can be treated?",
    content: [
      "Biostimulation uses medical products and techniques designed to promote new collagen production in areas with reduced firmness or elasticity.",
      "Changes usually appear progressively, and the plan may require one or more sessions depending on the professional evaluation."
    ],
    applicationZones: [
      "Cheekbones and midface.",
      "Jawline.",
      "Cheeks.",
      "Neck."
    ],
    additionalZones: [
      "Décolletage.",
      "Arms.",
      "Abdomen.",
      "Knees, when indicated."
    ],
    whatsappMessage:
      "Hello, I would like information and to book an appointment for Collagen Biostimulation."
  },
  {
    id: "enzimas-recombinantes",
    name: "Recombinant Enzymes",
    image: "images/tratamientos/enzimas-recombinantes.png",
    shortDescription:
      "A combination of recombinant enzymes designed to target localized fat and improve skin quality while supporting collagen and hyaluronic acid renewal.",
    question: "What are recombinant enzymes?",
    applicationTitle: "Benefits of Recombinant Enzymes",
    additionalTitle: "Where can they be applied?",
    content: [
      "This treatment combines different recombinant enzymes that help target localized fat and improve skin quality while supporting fat breakdown and the renewal of collagen and hyaluronic acid."
    ],
    applicationZones: [
      "Help reduce enlarged fat deposits.",
      "Help mobilize localized fat.",
      "Improve the appearance of the skin.",
      "Support lymphatic drainage.",
      "Help address skin laxity.",
      "Promote collagen production."
    ],
    additionalZones: [
      "Double chin.",
      "Face.",
      "Abdomen."
    ],
    whatsappMessage:
      "Hello, I would like information and to book an appointment for Recombinant Enzyme treatment."
  },
  {
    id: "pink-glow",
    name: "Pink Glow",
    image: "images/tratamientos/pink-glow.png",
    shortDescription:
      "A nutrient cocktail designed to brighten and improve skin quality by providing essential elements for firmer, hydrated, and radiant skin.",
    question: "What is Pink Glow?",
    applicationTitle: "Pink Glow benefits:",
    additionalTitle: "Where can it be applied?",
    content: [
      "Pink Glow is a nutrient cocktail designed to brighten and improve skin quality by providing essential elements for firmer, hydrated, and radiant skin."
    ],
    applicationZones: [
      "Hydrates and rejuvenates the skin.",
      "Helps reduce pigmentation and brighten the skin.",
      "Helps improve the complexion.",
      "Minimizes the appearance of pores.",
      "Helps reduce acne.",
      "Restores elasticity.",
      "Normalizes moisture levels.",
      "Helps prevent the appearance of new wrinkles and folds."
    ],
    additionalZones: [
      "Face.",
      "Décolletage.",
      "Neck.",
      "Backs of the hands."
    ],
    whatsappMessage:
      "Hello, I would like information and to book an appointment for Pink Glow treatment."
  },
  {
    id: "hyaluronic-acid-hydration",
    name: "Hyaluronic Acid Hydration",
    image: "images/tratamientos/hidratacion-con-acido-hialuronico.png",
    shortDescription:
      "Hyaluronic Acid Hydration uses microinjections of hyaluronic acid gel in the deeper layers of the skin to provide hydration from within.",
    question: "What is Hyaluronic Acid Hydration?",
    applicationTitle: "Its benefits include:",
    additionalTitle: "Where can it be applied?",
    content: [
      "Hyaluronic Acid Hydration uses microinjections of hyaluronic acid gel in the deeper layers of the skin to provide hydration from within.",
      "Its effects are revitalizing, firming, hydrating, regenerating, brightening, and redensifying. These benefits are associated with supporting type I collagen formation and skin rehydration."
    ],
    applicationZones: [
      "Softens the appearance of wrinkles.",
      "Helps brighten dark spots.",
      "Rejuvenates the skin.",
      "Promotes a smoother-looking skin tone.",
      "Hydrates the skin.",
      "Supports cellular regeneration.",
      "Can add volume to the lips."
    ],
    additionalZones: [
      "Face.",
      "Lips.",
      "Neck."
    ],
    whatsappMessage:
      "Hello, I would like information and to book an appointment for Hyaluronic Acid Hydration."
  },
  {
    id: "hiperhidrosis-axilar",
    name: "Axillary Hyperhidrosis",
    image: "images/tratamientos/hiperhidrosis-axilar.png",
    shortDescription:
      "Axillary hyperhidrosis is characterized by excessive underarm sweating, even when it is not hot, during exercise, or when the body does not need to cool down.",
    question: "What is axillary hyperhidrosis?",
    applicationTitle: "What are the benefits of botulinum toxin treatment?",
    additionalTitle: "Where can it be applied?",
    content: [
      "Axillary hyperhidrosis is characterized by excessive underarm sweating, even when it is not hot, during exercise, or when the body does not need to cool down. This sweating may dampen clothing, cause discomfort, and affect daily and social activities.",
      "It may be primary, when caused by excessive activity of the nerves that stimulate sweat glands, or secondary, when related to a medical condition, medication, or hormonal change."
    ],
    applicationZones: [
      "Significantly reduces excessive sweating.",
      "Keeps the underarms drier for several months.",
      "Reduces moisture and sweat marks on clothing.",
      "Improves comfort and confidence.",
      "It is a minimally invasive, non-surgical procedure.",
      "Results often begin to appear within the first few days after treatment."
    ],
    additionalZones: [
      "Palms of the hands.",
      "Soles of the feet."
    ],
    whatsappMessage:
      "Hello, I would like information and to book an appointment for Axillary Hyperhidrosis treatment."
  },
  {
    // =====================================================
    // TREATMENT 09
    // =====================================================
    id: "bruxismo",
    name: "Bruxism",
    image: "images/tratamientos/bruxismo.png",
    shortDescription:
      "Bruxism is a condition in which a person involuntarily clenches or grinds their teeth. It may occur during the day or while sleeping.",
    question: "What is bruxism?",
    applicationTitle: "What are the benefits of botulinum toxin treatment?",
    additionalTitle: "Where can it be applied?",
    content: [
      "Bruxism is a condition in which a person involuntarily clenches or grinds their teeth. It may occur during the day or while sleeping.",
      "When frequent, it can cause muscle tension, jaw pain, headaches, tooth sensitivity, and tooth wear or damage."
    ],
    applicationZones: [
      "Reduces the force used to clench the teeth.",
      "Reduces tension in the jaw muscles.",
      "Helps relieve facial and jaw discomfort.",
      "May reduce headaches related to muscle tension.",
      "Reduces excessive activity of the masseter muscles.",
      "May help prevent further tooth wear.",
      "It is a minimally invasive procedure.",
      "It does not require surgery and allows a quick return to daily activities."
    ],
    additionalZones: [
      "Masseter muscles: located on both sides of the jaw and responsible for much of the force used when clenching the teeth.",
      "Temporalis muscles: located on the sides of the head, depending on the level of tension and the specialist’s evaluation."
    ],
    whatsappMessage:
      "Hello, I would like information and to book an appointment for Bruxism treatment."
  },
  {
    // =====================================================
    // TREATMENT 10
    // =====================================================
    id: "nefertitis",
    name: "Nefertiti Lift with Botulinum Toxin",
    image: "images/tratamientos/nefertitis.png",
    shortDescription:
      "The Nefertiti Lift is a non-surgical aesthetic treatment that uses botulinum toxin to partially relax the platysma muscle in the lower face and neck.",
    question: "What is the Nefertiti Lift?",
    applicationTitle: "What are its benefits?",
    additionalTitle: "Where can it be applied?",
    content: [
      "The Nefertiti Lift is a non-surgical aesthetic treatment that uses botulinum toxin to partially relax the platysma muscle in the lower face and neck.",
      "This muscle can exert a downward pull on the jawline. Temporarily reducing its activity may soften vertical neck bands and create a more defined, refined jawline appearance."
    ],
    applicationZones: [
      "Helps define the jawline.",
      "Softens vertical neck bands.",
      "Reduces the muscular pull on the lower third of the face.",
      "May slightly improve the appearance of early laxity.",
      "Provides a subtle, natural-looking lifting effect.",
      "Helps create a more harmonious transition between the face and neck.",
      "It is a minimally invasive treatment.",
      "It does not require surgery or extended recovery time."
    ],
    additionalZones: [
      "Lower jawline border: to visually improve definition.",
      "Platysmal bands: vertical muscle lines that become visible on the neck.",
      "Lateral neck: depending on the strength and distribution of the platysma muscle.",
      "Lower face: only when the medical evaluation determines that certain muscles are creating downward traction."
    ],
    whatsappMessage:
      "Hello, I would like information and to book an appointment for a Nefertiti Lift with botulinum toxin."
  } ,
  {
    // =====================================================
    // TREATMENT 11
    // =====================================================
    id: "salmon",
    name: "Salmon DNA Biostimulator",
    image: "images/tratamientos/salmon.png",
    shortDescription:
      "It is a regenerative treatment performed with polynucleotides (PN) or polydeoxyribonucleotides (PDRN), which are DNA fragments obtained from salmon or trout through controlled purification and sterilization processes.",
    question: "¿What is a salmon DNA collagen biostimulator?",
    applicationTitle: "What are its benefits?",
    additionalTitle: "Where can it be applied?",
    content: [
      "It is a regenerative treatment performed with polynucleotides (PN) or polydeoxyribonucleotides (PDRN), which are DNA fragments obtained from salmon or trout through controlled purification and sterilization processes.",
      "These compounds are injected into the skin to support its natural repair processes and progressively improve its overall quality. They do not work like traditional dermal fillers: their main purpose is not to add volume, but to improve hydration, elasticity, texture, and the general appearance of the skin."
    ],
    applicationZones: [
      "Improve skin hydration.",
      "Promote a brighter and healthier-looking complexion.",
      "Gradually improve skin elasticity and firmness.",
      "Soften fine lines.",
      "Improve skin texture and evenness.",
      "Support the skin’s natural repair processes.",
      "Improve the appearance of dull, thin, or damaged skin.",
      "Support skin recovery after certain dermatological procedures."
    ],
    additionalZones: [
      "Face: to improve hydration, texture, radiance, and fine lines.",
      "Eye contour area: to address thin, dehydrated skin and superficial lines.",
      "Cheeks: to improve skin quality and elasticity.",
      "Neck: to treat fine lines and early loss of firmness.",
      "Décolletage: to improve the texture and appearance of sun-damaged skin.",
      "Back of the hands: to promote a more hydrated and rejuvenated appearance.",
      "Scars or specific areas: only when the physician determines that the product and technique are appropriate."
    ],
    whatsappMessage:
      "Hello, I would like information and to book an appointment for Salmon DNA Biostimulator."
  }   
];

/* =========================================================
   UTILITIES
========================================================= */
const createWhatsAppUrl = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const getFocusableElements = (container) => {
  return [...container.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  )].filter((element) => !element.hasAttribute("hidden"));
};

/* =========================================================
   DOM ELEMENTS
========================================================= */
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-nav");
const treatmentsGrid = document.querySelector("#treatments-grid");
const modal = document.querySelector("#treatment-modal");
const modalDialog = modal.querySelector(".modal-dialog");
const modalContentPanel = modal.querySelector(".modal-content");
const modalTitle = document.querySelector("#modal-title");
const modalQuestion = document.querySelector("#modal-question");
const modalImage = document.querySelector("#modal-image");
const modalDescription = document.querySelector("#modal-description");
const modalApplicationTitle = document.querySelector("#application-title");
const modalAdditionalTitle = document.querySelector("#additional-title");
const modalApplicationZones = document.querySelector("#modal-application-zones");
const modalAdditionalZones = document.querySelector("#modal-additional-zones");
const modalWhatsApp = document.querySelector("#modal-whatsapp");

let lastFocusedElement = null;

/* =========================================================
   GENERAL WHATSAPP LINKS
========================================================= */
document.querySelectorAll(".js-general-whatsapp").forEach((link) => {
  link.href = createWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE);
});

/* =========================================================
   AUTOMATIC CARD RENDERING
========================================================= */
const renderTreatments = () => {
  const fragment = document.createDocumentFragment();

  treatments.forEach((treatment, index) => {
    const article = document.createElement("article");
    article.className = "treatment-card reveal";

    article.innerHTML = `
      <div class="treatment-card-media">
        <img
          src="${treatment.image}"
          alt="${treatment.name}"
          width="640"
          height="480"
          loading="lazy"
        >
      </div>
      <div class="treatment-card-body">
        <span class="treatment-number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${treatment.name}</h3>
        <p>${treatment.shortDescription}</p>
        <button class="button" type="button" data-treatment-id="${treatment.id}">
          View treatment
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    `;

    fragment.appendChild(article);
  });

  treatmentsGrid.appendChild(fragment);
};

/* =========================================================
   MODAL
========================================================= */
const fillList = (element, items) => {
  element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
};

const openTreatmentModal = (treatment) => {
  lastFocusedElement = document.activeElement;

  modalTitle.textContent = treatment.name;
  modalQuestion.textContent = treatment.question;
  modalImage.src = treatment.image;
  modalImage.alt = treatment.name;
  modalDescription.innerHTML = treatment.content
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  // These headings belong to each treatment and can be edited inside its object.
  modalApplicationTitle.textContent =
    treatment.applicationTitle || "Where can it be applied?";
  modalAdditionalTitle.textContent =
    treatment.additionalTitle || "What other areas can be treated?";

  fillList(modalApplicationZones, treatment.applicationZones);
  fillList(modalAdditionalZones, treatment.additionalZones);

  modalWhatsApp.href = createWhatsAppUrl(treatment.whatsappMessage);
  modalWhatsApp.setAttribute(
    "aria-label",
    `Book a WhatsApp appointment for ${treatment.name}`
  );

  // Each treatment opens at the beginning of its information.
  modalContentPanel.scrollTop = 0;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    modal.querySelector(".modal-close").focus();
  });
};

const closeTreatmentModal = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
};

treatmentsGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-treatment-id]");
  if (!button) return;

  const treatment = treatments.find((item) => item.id === button.dataset.treatmentId);
  if (treatment) openTreatmentModal(treatment);
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeTreatmentModal();
  }
});

modal.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTreatmentModal();
    return;
  }

  if (event.key !== "Tab") return;

  const focusableElements = getFocusableElements(modalDialog);
  if (!focusableElements.length) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});

/* =========================================================
   MOBILE MENU
========================================================= */
const closeMobileMenu = () => {
  menuToggle.classList.remove("is-active");
  mainNavigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  document.body.classList.remove("menu-open");
};

const toggleMobileMenu = () => {
  const isOpen = mainNavigation.classList.toggle("is-open");
  menuToggle.classList.toggle("is-active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
  document.body.classList.toggle("menu-open", isOpen);
};

menuToggle.addEventListener("click", toggleMobileMenu);

mainNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && window.innerWidth <= 860) {
    closeMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    closeMobileMenu();
  }
});

/* =========================================================
   HEADER ON SCROLL
========================================================= */
const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */
let revealObserver;

const initializeRevealAnimations = () => {
  const revealElements = document.querySelectorAll(".reveal");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(element);
  });
};

/* =========================================================
   INITIALIZATION
========================================================= */
renderTreatments();
initializeRevealAnimations();

