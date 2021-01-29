let dott = document.querySelectorAll(".dot")
let dot1 = document.querySelector(".dot1")
let dot2 = document.querySelector(".dot2")
let dot3 = document.querySelector(".dot3")
let dot4 = document.querySelector(".dot4")
let dot5 = document.querySelector(".dot5")

let img1 = document.querySelector(".slide1")
let img2 = document.querySelector(".slide2")
let img3 = document.querySelector(".slide3")
let img4 = document.querySelector(".slide4")
let img5 = document.querySelector(".slide5")

let controller = new ScrollMagic.Controller();
const timeline = new TimelineMax();


// 1 =========================
//h5 
let dotAnima =
    gsap
    .to(".dot1 h5", .3, {
        background: "#28d267"
    })
//barra 
let dot1Bar =
    gsap
    .to(".dot1 .progress-bar", 2, {
        height: "100%",
    });


//2 ==================================

//h5 
let dotAnima2 =
    gsap
    .to(".dot2 h5", .3, {
        background: "#28d267"
    })
//barra 
let dot2Bar =
    gsap
    .to(".dot2 .progress-bar", 2, {
        height: "100%",
    });

//3 ==================================

//h5 
let dotAnima3 =
    gsap
    .to(".dot3 h5", .3, {
        background: "#28d267"
    })
//barra 
let dot3Bar =
    gsap
    .to(".dot3 .progress-bar", 2, {
        height: "100%",
    });


//4 ==================================
//h5 
let dotAnima4 =
    gsap
    .to(".dot4 h5", .3, {
        background: "#28d267"
    })
//barra 
let dot4Bar =
    gsap
    .to(".dot4 .progress-bar", 2, {
        height: "100%",
    });

//5 ==================================
//h5 
let dotAnima5 =
    gsap
    .to(".dot5 h5", .3, {
        background: "#28d267"
    })
//barra 
let dot5Bar =
    gsap
    .to(".dot5 .progress-bar", 2, {
        height: "100%",
    });







//scene dot 1 titulo
var sceneDot1H5 = new ScrollMagic.Scene({
        triggerElement: ".dot1",
        duration: 0,
        offset: -230,
       triggerHook: .3,


    })
    .setTween(dotAnima)
    .addIndicators({
        name: "dot"
    });

//scene dot 1 barra
var sceneDot1Bar = new ScrollMagic.Scene({
        triggerElement: ".dot1",
        duration: 200,
        offset: -230,
        triggerHook: .3,


    })
    .setTween(dot1Bar)
    .addIndicators({
        name: "dot-bar"
    })
    .on("end", function classe() {
        img1.classList.toggle("d__none")
        img2.classList.toggle("d__block")

    })

//
var sceneDot2H5 = new ScrollMagic.Scene({
        triggerElement: ".dot2",
        duration: 0,
        offset: -230,
        triggerHook: .3,


    })
    .setTween(dotAnima2)
    .addIndicators({
        name: "dot"
    });

//scene dot 1 barra
var sceneDot2Bar = new ScrollMagic.Scene({
        triggerElement: ".dot2",
        duration: 200,
        offset: -230,
        triggerHook: .3,


    })
    .setTween(dot2Bar)
    .addIndicators({
        name: "dot-bar"
    })
    .on("end", function classe() {
        img2.classList.toggle("d__none")
        img3.classList.toggle("d__block")

    })

//

var sceneDot3H5 = new ScrollMagic.Scene({
        triggerElement: ".dot3",
        duration: 0,
        offset: -230,
        triggerHook: .3,


    })
    .setTween(dotAnima3)
    .addIndicators({
        name: "dot"
    });

//scene dot 1 barra
var sceneDot3Bar = new ScrollMagic.Scene({
        triggerElement: ".dot3",
        duration: 200,
        offset: -230,
        triggerHook: .3,


    })
    .setTween(dot3Bar)
    .addIndicators({
        name: "dot-bar"
    })
    .on("end", function classe() {
        img3.classList.toggle("d__none")
        img4.classList.toggle("d__block")

    })

//
var sceneDot4H5 = new ScrollMagic.Scene({
        triggerElement: ".dot4",
        duration: 0,
        offset: -230,
        triggerHook: .3,


    })
    .setTween(dotAnima4)
    .addIndicators({
        name: "dot"
    });

//scene dot 1 barra
var sceneDot4Bar = new ScrollMagic.Scene({
        triggerElement: ".dot4",
        duration: 200,
        offset: -230,
        triggerHook: .3,


    })
    .setTween(dot4Bar)
    .addIndicators({
        name: "dot-bar"
    })
    .on("end", function classe() {
        img4.classList.toggle("d__none")
        img5.classList.toggle("d__block")

    })
//
var sceneDot5H5 = new ScrollMagic.Scene({
        triggerElement: ".dot5",
        duration: 0,
        offset: -230,
        triggerHook: .3,


    })
    .setTween(dotAnima5)
    .addIndicators({
        name: "dot"
    });

//scene dot 1 barra
var sceneDot5Bar = new ScrollMagic.Scene({
        triggerElement: ".dot5",
        duration: 200,
        offset: -230,
        triggerHook: .3,


    })
    .setTween(dot5Bar)
    .addIndicators({
        name: "dot-bar"
    })
   /*  .on("end", function classe() {
        img1.classList.toggle("d__none")
        img2.classList.toggle("d__block")

    }) */





controller.addScene([

    sceneDot1H5,
    sceneDot1Bar,

    sceneDot2H5,
    sceneDot2Bar,

    sceneDot3H5,
    sceneDot3Bar,

    sceneDot4H5,
    sceneDot4Bar,

    sceneDot5H5,
    sceneDot5Bar,

]);