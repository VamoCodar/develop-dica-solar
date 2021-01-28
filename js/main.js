// menu mobile =========================
const mediaQuery = window.matchMedia('(min-width: 992px)')
const menuItem = document.querySelector(".menu__icon-click")
const itemMenu = document.querySelectorAll(".atalhos a")
const linksMenu = document.querySelector(".atalhos")
const body = document.querySelector("body")




function menuMobile() {
    if (!mediaQuery.matches && !body.classList.contains("menu__open")) {
        body.classList.add("menu__open");
        body.classList.remove("menu__close");
    } else if (body.classList.contains("menu__open")) {
        linksMenu.setAttribute(
            "style",
            "animation: voltaMenu 300ms both ease-out;"
        );
        setTimeout(() => {
            linksMenu.removeAttribute("style", "animation");
            body.classList.remove("menu__open");
            body.classList.add("menu__closed");

        }, 300);
    }
}


//fecha o menu
function fechaMenu(event) {  
    if (
        body.classList.contains("menu__open") &&
        event.target != menuItem &&
        event.target != linksMenu
    ) {
        linksMenu.setAttribute("style",
        "animation: voltaMenu 300ms both ease-out;");
        setTimeout(() => {
           
            body.classList.remove("menu__open");
            linksMenu.removeAttribute("style", "animation");
        }, 300);
    }
}

// menu preenchido ========================
function menuPreenchido() {
    const menuFixo = document.querySelectorAll(".fixed-top");
    menuFixo.forEach((i) => {
        if (window.pageYOffset >= 20) {
            body.classList.add("ativo__scrool");

        } else if (window.pageYOffset < 50) {
            body.classList.remove("ativo__scrool");
        }
    });
}
menuPreenchido();
//class Carregou
document.addEventListener("DOMContentLoaded", function () {
    body.classList.add("carregou")
});


const pageHome = document.getElementById("page__home")
const pageBusca = document.getElementById("page__busca")
const pagePerfil = document.getElementById("page__perfil")

//SCRIPTS HOME ==========================
function checagemHome() {
    if (pageHome) {
        //conf dos sliders da home
        const sliders = document.querySelectorAll('.glide')
        const conf1 = {
            type: 'carousel',
            startAt: 3,
            gap: 80,
            perView: 3,
            focusAt: "center",
            rewind: false,
            breakpoints: {
                1200: {
                    type: 'slider',
                    rewind: false,
                    perView: 2,
                    focusAt: "center",
                    gap: 20,

                },

                800: {
                    type: 'carousel',
                    startAt: 1,
                    gap: 40,
                    perView: 1,
                    focusAt: "center",
                    rewind: false,
                    perTouch: 1,
                    peek: {
                        before: 10,
                        after: 30
                    }

                },

                710: {
                    type: 'carousel',
                    gap: 20,
                    startAt: 1,
                    perView: 1,
                    perTouch: 1,
                    focusAt: "center",
                    rewind: false,
                    peek: {
                        before: 20,
                        after: 20
                    }

                },
                520: {
                    type: 'slider',
                    gap: 20,
                    startAt: false,
                    perView: 1,
                    focusAt: "center",
                    rewind: true,
                    perTouch: 1,

                    peek: {
                        before: 40,
                        after: 40,
                    }

                }


            }

        }


        //cria 2 sliders com a mesma conf
        sliders.forEach(item => {
            new Glide(item, conf1).mount()
        })

        // gsap animations ========================
        const timeline = new TimelineMax();
        const bolinhasIntro = document.querySelectorAll("#bolinhas__intro path")

        const bolinhas =

            timeline.staggerTo(bolinhasIntro, 2, {
                fill: "#ffb600",

            }, .05);




        //timeline 2 =================================================
        const timeline2 = new TimelineMax();
        const nuvem1 = document.querySelector("#nuvem__1")
        const nuvem2 = document.querySelector("#nuvem__2")
        const planta = document.querySelector("#planta")
        const painel = document.querySelector("#painel")



        let credenciado =
            timeline2
            .to(nuvem1, 12, {
                x: 80,
                ease: "power1.out",
                yoyo: true,
                repeat: -1,
            })

            .to(nuvem2, 10, {
                x: 100,
                ease: "power1.out",
                yoyo: true,
                repeat: -1,

            }, '-=12')

            .to(planta, 3, {
                rotation: 5,
                //ease: "power3.out",
                yoyo: true,
                repeat: -1,
                transformOrigin: " bottom"

            }, '-=12');







        //Scroll SCENE ===================================
        let controller = new ScrollMagic.Controller();


        //bolinhas scene
        var sceneBolinhas = new ScrollMagic.Scene({
                triggerElement: "#intro",
                duration: 300,
                offset: 20,
                triggerHook: 0,
            })
            .setTween(bolinhas)
            .addIndicators({
                name: "bolinhas"
            })
            .on("end", function classe() {
                body.classList.toggle("orna__3")
            });


        //plantas nuvens scene
        var sceneCredenciado = new ScrollMagic.Scene({
                triggerElement: "#credenciados",
                duration: 0,
                offset: -300,
                triggerHook: 0,


            })
            .setTween(credenciado)
            .addIndicators({
                name: "credenciados"
            })
        /* .on("end", function classe() {

                        body.classList.toggle("orna__3")
                    });
 */


        controller.addScene([
            sceneBolinhas,
            sceneCredenciado,

        ]);
    } else if (pageBusca) {

        //focus ==============
        let botao = document.querySelector(".busca__btn")
        let buscaInput = document.querySelector(".busca__input")

        function buscaOpacity() {
            botao.classList.add("ativo")
        }

        function buscaOpacityRemove() {
            botao.classList.remove("ativo")
        }



        buscaInput.addEventListener("focusin", buscaOpacity);
        buscaInput.addEventListener("focusout", buscaOpacityRemove);
        //add classe carregou body ===========================        

    } else if (pagePerfil) {

        //slider da intro =======================================
        const slider = document.querySelector(".glide__slider-1")

        function verficaSlide() {
            if (slider.attributes[1].value === "true") {
                new Glide('.glide__slider-1[data-slider="true"] ', {
                    type: 'carousel',
                    startAt: 3,
                    gap: 5,
                    perView: 3,
                    focusAt: "center",
                    rewind: false,
                    breakpoints: {
                        1200: {
                            type: 'slider',
                            rewind: false,
                            perView: 2,
                            focusAt: "center",
                            gap: 10,

                        },

                        800: {
                            type: 'carousel',
                            startAt: 1,
                            gap: 10,
                            perView: 1,
                            focusAt: "center",
                            rewind: false,
                            perTouch: 1,
                            peek: {
                                before: 10,
                                after: 30
                            }

                        },

                        710: {
                            type: 'carousel',
                            gap: 10,
                            startAt: 1,
                            perView: 1,
                            perTouch: 1,
                            focusAt: "center",
                            rewind: false,
                            peek: {
                                before: 20,
                                after: 20
                            }

                        },
                        520: {
                            type: 'slider',
                            gap: 5,
                            startAt: false,
                            perView: 1,
                            focusAt: "center",
                            rewind: true,
                            perTouch: 1,

                            peek: {
                                before: 40,
                                after: 40,
                            }

                        }


                    }
                }).mount()
            } else {
                body.classList.add("no__slide")
            }
        }
        verficaSlide()

        //slider credenciados ===================
        new Glide("#credenciados", {

            type: 'carousel',
            // startAt: 3,
            gap: 80,
            perView: 3,
            focusAt: "center",
            rewind: false,
            breakpoints: {
                1200: {
                    type: 'slider',
                    rewind: false,
                    perView: 2,
                    focusAt: "center",
                    gap: 20,

                },

                800: {
                    type: 'carousel',
                    startAt: 1,
                    gap: 40,
                    perView: 1,
                    focusAt: "center",
                    rewind: false,
                    perTouch: 1,
                    peek: {
                        before: 10,
                        after: 30
                    }

                },

                710: {
                    type: 'carousel',
                    gap: 20,
                    startAt: 1,
                    perView: 1,
                    perTouch: 1,
                    focusAt: "center",
                    rewind: false,
                    peek: {
                        before: 20,
                        after: 20
                    }

                },
                520: {
                    type: 'slider',
                    gap: 20,
                    startAt: false,
                    perView: 1,
                    focusAt: "center",
                    rewind: true,
                    perTouch: 1,

                    peek: {
                        before: 40,
                        after: 40,
                    }

                }


            }

        }).mount()
    }
}


checagemHome()

//eventim pilimpimpim
menuItem.addEventListener("click", menuMobile); //click menu mobile
itemMenu.forEach((i) => i.addEventListener("click", menuMobile)); //fecha on click
window.addEventListener("scroll", menuPreenchido);
body.addEventListener("click", fechaMenu);