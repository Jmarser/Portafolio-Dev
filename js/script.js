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

/* SELECTOR PARA PROYECTOS */

const mixer = mixitup(".project__grid")


/* SWIPER TESTIMONIOS */

const swiper = new Swiper(".swiper", {
    slidesPerview: "auto",
    spaceBetween: 30,
    loop: true,
});







/* FILTRO PROYECTOS */





