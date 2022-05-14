
/*= SHOW SIDEBAR =*/
const navMenu = document.getElementById("sidebar");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*= SIDEBAR SHOW =*/
/*= validar que existe la constante =*/
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('sidebar--show');
    });
}

/*= SIDEBAR HIDDE =*/
/*= validar que existe la constante =*/
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('sidebar--show');
    });
}

const btnShare = document.getElementById("btnShare");


/* Funciones */

//función para dar la funcionalidad del boton de compartir
const compartir = () => {
    navigator.share({
        title: 'Portfolio Jmarser',
        text: 'Mira que portafolio',
        url: '###Dirección del portafolio',
    });
}

/* ANIMAR ESCRITURA */

/* El primer parámetro es la clase que queremos modificar. */
let typed = new Typed(".typing", {
    strings: [ //texto que queremos que escriba
        "Desarrollador front-end",
        "Desarrollador back-end",
        "Desarrollador android",
    ],
    typeSpeed: 75, //velocidad en milisegundos para poner una letra
    startDelay: 300, //Tiempo de retraso en iniciar la animación
    backSpeed: 75, //velocidad en milisegundos en borrar una letra
    smartBackspace: true, //elimina solamente las palabras que sean nuevas en una cadena
    shuffle: false, //alterar el orden en el que se escriben las palabras
    backDelay: 1500, //tiempo de espera despues de que termina de escribir una palabra
    loop: true, // escribir en bucle
    loopount: false, // cantidad de veces en repetir el array, en este caso infinito
    showCursor: true, //mostrar el cursor 
    cursorChar: "|", //caracter para el cursor
    autoInsertCss: true, //permite estilos en el cursor con la clase .typed-cursor
});

/*= MIXITUP FILTER PORTFOLIO =*/
let mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__card'
    },
    animation: {
        duration: 300
    }
});

/*= link active work =*/
const linkPortfolio = document.querySelectorAll('.portfolio__item');

function activePortfolio(){
    linkPortfolio.forEach(l => l.classList.remove('active-portfolio'));
    this.classList.add('active-portfolio');
}

function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

function portfolioItemDetails(portfolioItem){
    //console.log(portfolioItem);
    document.querySelector(".portfolio__thumbnail img").src = portfolioItem.querySelector(".portfolio__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".portfolio__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/*= SERVICES MODAL =*/
const modalVista = document.querySelectorAll('.services__modal');
const modelsBtn =  document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalVista[modalClick].classList.add('active-modal');
}

modelsBtn.forEach((modelBtn, i) => {
    modelBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloses.forEach((close) => {
    close.addEventListener("click", () => {
        modalVista.forEach((vista) => {
            vista.classList.remove('active-modal');
        });
    });
});


/*= SWIPER TESTIMONIAL =*/
let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },

    },
});

/*= Input animacion =*/
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

/*= Scroll section active link =*/

//tomamos todas las secciones que tengan definido id
const sections = document.querySelectorAll("section[id]");

//agregamos un evento a la ventana
window.addEventListener("scroll", () => {

    //tomamos la posicion del scroll
    let scrollY = window.pageYOffset;

    //realizamos un bucle por las secciones y tomamos su altura, donde empieza y su id
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        /*comprobamos que si la posición del scroll esta dentro de alguna de las secciones, agregamos
        la clase .active al link correspondiente y removemos el de los otros */
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu__item a[href*=' + sectionId + ']').classList.add("menu__link--active");
        }else{
            document.querySelector('.menu__item a[href*=' + sectionId + ']').classList.remove("menu__link--active");
        }
    });

});


/*Eventos click */
btnShare.addEventListener("click", compartir);

linkPortfolio.forEach(l => l.addEventListener("click", activePortfolio));

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

/*= work popup =*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("portfolio__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});