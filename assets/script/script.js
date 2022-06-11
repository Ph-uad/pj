
let tl = gsap.timeline();
tl.from('.heading-jumbo', {opacity: 0, scale: 0.1 , duration:1.7,ease:"power2"});
tl.from('.header-subtext', {opacity: 0 ,x: -20, duration:1,ease:"power2"});
tl.from('.button', {opacity: 0 ,y: 100, ease:"sine"});


const videos =  document.querySelectorAll('.media-container__video');
const buttonPrevious = document.querySelector('.media-icon__left');
const buttonNext = document.querySelector('.media-icon__right');
let currentSlide  = 0;


const slide = ( ) =>{
    videos.forEach((block, index) => {
        block.style.transform = `translateX(${100 * (index - currentSlide)}%)`; 
    });
}

slide()


buttonPrevious.addEventListener('click',()=>{
   currentSlide === 0 ? currentSlide  = videos.length -1 : currentSlide--;
   slide();
})

buttonNext.addEventListener('click',()=>{
    currentSlide === videos.length -1 ? currentSlide = 0 : currentSlide++;
    slide();
})