const media = document.querySelectorAll('.media');
const video = document.querySelectorAll('.media__video');

gsap.registerPlugin(ScrollTrigger)

gsap.to(".nav", {
    scrollTrigger: {
        trigger: ".header",
        start: "top top",
        scrub: 2,
        end: "+=1000"
    },
    backgroundColor: "#1d1d1d40",
    color: "#fff",
    opacity: 1,
})

gsap.to(".paragraph", {
    scrollTrigger: {
        trigger: ".ad__block",
        start: "top center",
        scrub: 4,
        end: "bottom -=200",
    },
    y: 70,
})

const videos = document.querySelectorAll('.media__video')
const intros = document.querySelectorAll('.heading--section')
const sections = document.querySelectorAll('.section')

videos.forEach(e => {
    gsap.to(e, {
        scrollTrigger: {
            trigger: e,
            start: "center center",
            scrub: 4,
            end: "bottom 20%",
            onEnter: () => { e.play(); },
            onLeave: () => { e.pause(); },
        },
        transform: "scale(1)",
    })
});

sections.forEach(e => {
    gsap.from(e, {
        scrollTrigger: {
            trigger: e,
            start: "top center",
            toggleActions: "play pause resume reset",
            end: "bottom center",
        },
        y: -100,
        opacity: 0
    })
});

intros.forEach(e => {
    gsap.from(e, {
        scrollTrigger: {
            trigger: e,
            start: "top center",
            scrub: 3,
            toggleActions: "play pause resume reset",
            end: "bottom +=400",
        },
        opacity: 0,
        y: 10,
        transform: "scale(.7)"
    })
});

// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.ml3');
textWrapper.forEach(text => {text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");});
anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 200,
    delay: (el, i) => 50 * (i+1)
  })

// const slide = ( ) =>{
//     videos.forEach((block, index) => {
//         block.style.transform = `translateX(${100 * (index - currentSlide)}%)`; 
//     });
// }
// slide()
// buttonPrevious.addEventListener('click',()=>{
//    currentSlide === 0 ? currentSlide  = videos.length -1 : currentSlide--;
//    slide();
// })

// buttonNext.addEventListener('click',()=>{
//     currentSlide === videos.length -1 ? currentSlide = 0 : currentSlide++;
//     slide();
// })
// let container = gsap.utils.toArray(".container"),scrollTween;

// function goToSection(i) {
//     scrollTween = gsap.to(window, {
//         scrollTo: { y: i * innerHeight, autoKill: false },
//         duration: 1,
//         onComplete: () => scrollTween = null,
//         overwrite: true
//     });
// }

// container.forEach((container, i) => {
//     ScrollTrigger.create({
//         trigger: container,
//         start: "top bottom",
//         markers: true,
//         end: "bottom bottom",
//         onToggle: self => self.isActive && !scrollTween && goToSection(i)
//     });
// });

// 
// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
// ScrollTrigger.create({
//     start: 0,
//     end: "max",
//     snap: .8 / (container.length - 1)
// })