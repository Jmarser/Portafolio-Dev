/* Controlador del desplegable del menú */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

/* descarga de pdf */
const downloadCv = document.getElementById("download-cv");

downloadCv.addEventListener("click", (e) => {
    const aElement = document.createElement("a");
    aElement.setAttribute("download", "CV.pdf");
    aElement.setAttribute("href", "../download/CV Developer 2022.pdf");
    aElement.click();
});

/* Efecto para activar la opción del menú seleccionada */
const links = document.querySelectorAll(".link a");

links.forEach(link =>{
    link.addEventListener("click", () =>{
        links.forEach(l => l.parentElement.classList.remove("link--active"));
        link.parentElement.classList.add("link--active");
    })
});

/* Efecto para activar la opción del menú que se está viendo */

const $sections = document.querySelectorAll("section[data-scroll-spy]");
const callback = (entries) => {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
            document.querySelector(`.link a[href="#${id}"]`).parentElement.classList.add("link--active");
        } else {
            document.querySelector(`.link a[href="#${id}"]`).parentElement.classList.remove("link--active");
        }
    });
};

const observer = new IntersectionObserver(callback, {
    threshold: [0.4, 0.6],
});

$sections.forEach((section) => observer.observe(section));

/* Animar escritura */
let typed = new Typed(".typing", {
    strings: [ // Textos que queremos que se muestren.
        "Desarrollador android / iOS",
        "Desarrollador web",
    ],
    typeSpeed: 75, // Velocidad de escritura.
    startDelay: 1000, // Tiempo de espera antes de empezar a escribir.
    backSpeed: 75, // Velocidad de borrado de letra.
    smartBackspace: false, // Borrado inteligente. Elimina sólo las palabras que no coinciden con la siguiente.
    shuffle: false, // Desordenar las palabras.
    backDelay: 1500, // Tiempo de espera antes de borrar las palabras.
    loop: true, // Escribir en bucle.
    loopount: false, // Cantidad de veces que se repite el bucle. En este caso infinito
    showCursor: true, // Mostrar cursor.
    cursorChar: "|", // Carácter del cursor.
    autoInsertCss: true, // Insertar CSS para el cursor.
});

/* Efecto de aumentar los números */
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 10000; // Esto hace que el número aumente suavemente

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 100); // Llamamos a la función de nuevo para incrementar
            } else {
                counter.innerText = target + "+"; // Asegura que el número llegue al valor exacto
            }
        };

        updateCounter(); // Llamamos a la función para iniciar la animación
    });
});

/* Efectos scrollreveal */
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

const scrollRevealOptionWeb = {
    distance: "50px",
    origin: "left",
    duration: 1000,
}

const scrollRevealOptionMovil = {
    distance: "50px",
    origin: "right",
    duration: 1000,
}

ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container .section__description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__container .header__btns", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header__container .social__btns", {
    ...scrollRevealOption,
    delay: 2000,
})

ScrollReveal().reveal(".header__container .banner", {
    ...scrollRevealOption,
    delay:2500,
});

ScrollReveal().reveal(".about__image__web", {
    ...scrollRevealOptionWeb,
});

ScrollReveal().reveal(".about__image__movil", {
    ...scrollRevealOptionMovil,
});

ScrollReveal().reveal(".about__content h4", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .parrafo1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .parrafo2", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .parrafo3", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".skill__container", {
    ...scrollRevealOption,
    delay: 2000
});

ScrollReveal().reveal(".service__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".blog__card", {
    ...scrollRevealOption,
    interval: 500,
})


/* SELECTOR PARA ESTUDIOS O EXPERIENCIA */

const tabList = document.querySelector(".resume__tablist"); 

tabList.addEventListener("click", (e) =>{
    const tabIndex = e.target.dataset.tab;
    if(!tabIndex) return

    const tabs = document.querySelectorAll("[data-tab]");
    Array.from(tabs).forEach(tab => {
        if(tab.dataset.tab === tabIndex){
            tab.classList.add("active");
        }else {
            tab.classList.remove("active");
        }
    });

    const activePanel = document.querySelector(".panel__grid.active");
    const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);
    if(activePanel.dataset.panel === tabIndex) return;
    activePanel.classList.add("close");
    activePanel.addEventListener(
        "animationend",
        (e) => {
            activePanel.classList.remove("active");
            activePanel.classList.remove("close");
            toActivePanel.classList.add("active");
        },
        {once : true}
    )

});

/* MOSTRAR / OCULTAR LAS HABILIDADES DE LAS TARJETAS */
document.querySelectorAll(".habilitis").forEach(item => {
    item.addEventListener("click", function() {
      // Seleccionamos el "hability-list" correspondiente a la tarjeta
        var habilidadList = this.closest('.resume__card').querySelector('.resume__hability');

      // Verificamos si habilidadList existe antes de intentar modificarlo
        if (habilidadList) {
        habilidadList.classList.toggle("show");
    }
    });
});

document.querySelectorAll(".close__btn").forEach(btn => {
    btn.addEventListener("click", function() {
      // Seleccionamos el "hability-list" correspondiente a la tarjeta y lo ocultamos
        var habilidadList = this.closest('.resume__card').querySelector('.resume__hability');

      // Verificamos si habilidadList existe antes de intentar modificarlo
        if (habilidadList) {
        habilidadList.classList.remove("show");
    }
    });
});

/* SELECTOR PARA PROYECTOS */

const mixer = mixitup(".project__grid")


/* SWIPER TESTIMONIOS */

const swiper = new Swiper(".swiper", {
    slidesPerview: "auto",
    spaceBetween: 30,
    loop: true,
});







/* FILTRO PROYECTOS */





