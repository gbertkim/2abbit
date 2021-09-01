'use strict'
// const scrollContainer = document.querySelector("main");
// console.log(scrollContainer);

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });
const about = document.querySelector("#about");
const text = about.querySelector("h1");
const aboutText = document.querySelectorAll(".aboutText");
const aboutTitle = document.querySelectorAll(".aboutTitle");
const products = document.querySelector("#products");
const vid = document.querySelector('#video');
const contact = document.querySelector("#contact");



function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function(){
    parallax("#home", window.scrollY, .5);
});

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".icons", {y: "0%", duration: 1});
tl.to(".icons", {display: "none"});
tl.to(".startText span", {y: "0%", duration: 1, stagger: 0.5});
tl.to(".fullPageSlide", {y: "0%", duration: .5, delay: 1});
tl.to(".start", {y: "-100%", duration: .8});
tl.to(".fullPageSlide", {y: "-100%", duration: .5}, "-=.4");
tl.to(".start, .fullPageSlide", {display: "none"});
tl.fromTo ('.opac', {opacity: 0}, {opacity: 1, duration: 1.8});


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 4500,
    triggerElement: about,
    triggerHook: 0
})
    .setPin(about)
    .addTo(controller);

// title out
const titleOut = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});
const scene2 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: about,
    triggerHook: 0
})
    .setTween(titleOut)
    .addTo(controller);

// text in
const textIn = TweenMax.to([aboutText, aboutTitle], 5, {opacity: '1'});
const scene3 = new ScrollMagic.Scene({
    duration: 1500,
    triggerElement: about,
    offset: 1200,
    triggerHook: 0
})
    .setTween(textIn)
    .addTo(controller);

// text out
const textOut = TweenMax.to([aboutTitle, aboutText], {x: "-120%", duration: 2, stagger: 0.5});
const scene4 = new ScrollMagic.Scene({
    duration: 1500,
    triggerElement: about,
    offset: 2700,
    triggerHook: 0
})
    .setTween(textOut)
    .addTo(controller);

const blackBack = TweenMax.to(about, {background: "#F3F0E6"});
const scene5 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: about,
    offset: 3500,
    triggerHook: 0
})
    .setTween(blackBack)
    .addTo(controller);

const scene6 = new ScrollMagic.Scene({
    duration: 5000,
    triggerElement: products,
    triggerHook: 0
})
    .setPin(products)
    .addTo(controller);

// Video animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

console.log($('#video').scrollTop());
scene6.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    vid.currentTime = scrollpos;
}, 60);

const slideMap = TweenMax.to('#map', {left: "60%"});
const scene7 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: contact,
    triggerHook: 0
})
    .setPin(contact)
    .setTween(slideMap)
    .addTo(controller);