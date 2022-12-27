const media = document.querySelectorAll('.media');
const video = document.querySelectorAll('.media__video');

gsap.registerPlugin(ScrollTrigger)

gsap.from(".paragraph--animated", {
    scrollTrigger: {
        trigger: ".ad__block",
        start: "top 70%",
        scrub: 2,
        end: "bottom center",
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
            scrub: .1,
            end: "bottom 20%",
            toggleActions: "play pause resume reset",
            onEnter: () => { e.play();},
            onLeave: () => { e.pause(); },
        },
        transform: "scale(1)",
    })
});

sections.forEach(e => {
    gsap.from(e, {
        scrollTrigger: {
            trigger: e,
            start: "top 80%",
            scrub: 3,
            end: "bottom center",
        },
        y: -10,
        opacity: .1
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
