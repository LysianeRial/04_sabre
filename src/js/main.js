import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Page d'accueil

gsap.to("#title", {
  opacity: 1,
  y: "-50%",
  scrollTrigger: {
    trigger: ".homepage",
    scrub: 1,
    pin: true,
    markers: true,
  },
});

// Premieres cartes A CORRIGER

gsap.to(".firstcard", {
  scrollTrigger: {
    trigger: ".firstcard",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
    markers: true,
    // name: "first card",
  },
});

gsap.from("#card1", {
  opacity: 0,
  x: "-100%",
  scrollTrigger: {
    trigger: ".firstcard",
    start: "top top",
    // end: "bottom center",
    scrub: 1,
    markers: true,
    id: "mountain",
  },
});

gsap.from("#card2", {
  opacity: 0,
  x: "480%",
  scrollTrigger: {
    trigger: ".firstcard",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    markers: true,
  },
});

// Deuxiemes cartes

gsap.to(".secondcard", {
  scrollTrigger: {
    trigger: ".secondcard",
    start: "top top",
    end: "700px",
    pin: true,
    scrub: 1,
    markers: true,
    // name: "first card",
  },
});

gsap.from("#card4", {
  opacity: 0,
  x: "200%",
  scrollTrigger: {
    trigger: ".secondcard",
    start: "top+=0% top",
    end: "bottom 75%",
    scrub: 1,
    markers: true,
  },
});

gsap.from("#card3", {
  opacity: 0,
  x: "180%",
  scrollTrigger: {
    trigger: ".secondcard",
    start: "top+=3%  top",
    end: "bottom 100%",
    scrub: 1,
    markers: true,
  },
});
