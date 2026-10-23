// Boton hamburguesa //

const menuToggle = document.getElementById('menu-toggle');
const menuCerrar = document.getElementById('menu-cerrar');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('activo');
    })
}

if (menuCerrar && navMenu) {
    menuCerrar.addEventListener('click', () => {
        navMenu.classList.remove('activo');
});
}

// script del carrusel //

const btnPrev=document.querySelector('.btn-prev');
const btnNext=document.querySelector('.btn-next');

if (btnPrev && btnNext ) {
   const slides=document.querySelectorAll('.carrusel-texto, .carrusel-item');
   let currentIndex=0;
   const totalSlides=slides.length;

   function updateCarrusel(){
     slides.forEach((slide)=> {
        slide.style.transform=`translateX(-${currentIndex * 100}%)`;
        slide.style.transition='transform 0.5s ease-in-out';
     });
    }

    btnNext.addEventListener('click',()=>{
       if(currentIndex<totalSlides-1){
          currentIndex++;
       } else {
          currentIndex=0;
       }
       updateCarrusel();
    });

    btnPrev.addEventListener('click',()=>{
      if(currentIndex>0){
          currentIndex--;
       } else {
          currentIndex=totalSlides-1;
       }
       updateCarrusel();
    });

// Redireccionar al hacer clic en el carrusel //

    const carruselContainer=document.querySelector('.carrusel');
    if(carruselContainer){
        carruselContainer.addEventListener('click', (e) => {
           if (e.target.closest('.carrusel-btn')) return; 
           window.location.href='vehiculos.html';
       });
    }

// Auto play del carrusel //

    let intervalTime=5000;
    let carruselInterval=setInterval(nextSlide, intervalTime);

    function nextSlide(){
       currentIndex=(currentIndex+1)%totalSlides;
       updateCarrusel();
    }

// Pausar el auto play al pasar el mouse por encima //

    const carruselElement=document.querySelector('.carrusel');
    if(carruselElement){
        carruselElement.addEventListener('mouseenter', () => {
           clearInterval(carruselInterval);
        });
        carruselElement.addEventListener('mouseleave', () => {
           carruselInterval=setInterval(nextSlide, intervalTime);
        });
    }
}

// boton de seccion 1 y 2 //

const PrimerBoton = document.getElementById("tu-boton-id");

if (PrimerBoton) {
   PrimerBoton.addEventListener("click", () => {
    window.location.href = "vehiculos.html";
   })
}
const SegundoBoton = document.getElementById("btn-conoce-mas");

if (SegundoBoton) {
   SegundoBoton.addEventListener("click", () => {
    window.location.href = "vehiculos.html";
   })
}

const TercerBoton = document.getElementById("btn-contacto");

if (TercerBoton) {
   TercerBoton.addEventListener("click", () => {
    window.location.href = "formulario-contacto.html";
   })
}
