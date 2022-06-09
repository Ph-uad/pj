gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();


tl.from('.heading-jumbo', {opacity: 0,y: -20, duration:1.3,ease:"power2"});
tl.from('.header-subtext', {opacity: 0 ,x: -20, duration:1,ease:"power2"});
tl.from('.button', {opacity: 0 ,y: 20, ease:"power2"});


// ScrollTrigger.create({
//     trigger: ".header-container",
//     start: "top top",
//     pin: true,
//     scrub: 1,
//     endTrigger: '.button',
//     end: "110 top",
// });

// //sun motion 
// gsap.to(".header-container", {opacity: 1})




// const cards = document.querySelectorAll('.card')

// cards.forEach( card => {
    
//     card.addEventListener('click', ()=>{
//         card.classList.toggle('flip')
//     })
// });


