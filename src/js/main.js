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
    // markers: true,
  },
});

// Premieres cartes A CORRIGER
const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".firstcard",
    start: "top top",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

timeline1.from("#card1", {
  opacity: 0,
  x: "-100%",
});

timeline1.from("#card2", {
  opacity: 0,
  x: "480%",
});

// Image montagnes enneigées

const timeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".imagesnow",
    start: "top top",
    end: "25%",
    scrub: 2,
    // markers: true,
  },
});

timeline4.from("#sky", {
  x: "2%",
});

timeline4.from("#mountainssnow", {
  x: "-2%",
});

timeline4.from("#hillssnow", {
  x: "2%",
});

// Deuxiemes cartes

const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".secondcard",
    start: "top top",
    // end: "700px",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

timeline2.from("#card4", {
  opacity: 0,
  x: "200%",
});

timeline2.from("#card3", {
  opacity: 0,
  x: "180%",
});

// Parallaxe montagnes vertes et tigres 1

const timeline8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".skytigers",
    scrub: 2,
    // markers: true,
  },
});

timeline8.from("#mountainsgreen", {
  y: "5%",
});

// Parallaxe montagnes vertes et tigres 2

const timeline9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".skytigers2",
    scrub: 2,
    // markers: true,
  },
});

timeline9.from("#tigerslandscape2", {
  y: "5%",
});

// Troisiemes cartes

gsap.to(".thirdcard", {
  scrollTrigger: {
    trigger: ".thirdcard",
    start: "top top",
    end: "700px",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

gsap.from("#card5", {
  opacity: 0,
  x: "-100%",
  scrollTrigger: {
    trigger: ".thirdcard",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    // markers: true,
    id: "mountain",
  },
});

// Image meute de tigres devant grotte

const timeline5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".tigerpack",
    scrub: 2,
    // markers: true,
  },
});

timeline5.from("#tigerpack", {
  y: "10%",
});

// Quatriemes cartes

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourthcard",
    start: "top top",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

timeline3.from("#card6", {
  opacity: 0,
  x: "200%",
});

timeline3.from("#card7", {
  opacity: 0,
  x: "180%",
});

// Image calin tigre et sabre

gsap.to(".imagehug", {
  scrollTrigger: {
    trigger: ".imagehug",
    start: "top top",
    end: "700px",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

gsap.to("#hug", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".imagehug",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    // markers: true,
  },
});

// Cinquieme carte

const timeline7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifthcard",
    start: "top top",
    end: "700px",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

timeline7.from("#card8", {
  opacity: 0,
  x: "-100%",
});

timeline7.to("#card8", {
  opacity: 0,
  x: "120%",
  delay: 0.3,
});

// Scène final grotte

const timeline6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".imagecave",
    start: "top top",
    pin: true,
    scrub: 2,
    // markers: true,
    duration: 5,
  },
});

timeline6.to("#hillsfinal", {
  x: "-100px",
});

timeline6.to(
  "#cavefinal",
  {
    width: "500vw",
    delay: 0.3,
  },
  0
);

timeline6.to(
  "#hillsfinal",
  {
    filter: "brightness(0.5) saturate(1) hue-rotate(-150deg)",
    ease: "power2.out",
    delay: 0.3,
  },
  0
);

// Cursor

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});
