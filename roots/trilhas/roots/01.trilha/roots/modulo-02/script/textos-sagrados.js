/* ========================================= */
/* BINAH - MÓDULO 2: TEXTOS SAGRADOS */
/* ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initRevealAnimations();
    initHeaderEffect();
    initHeroAnimation();

});

/* ========================================= */
/* MOBILE MENU */
/* ========================================= */

function initMobileMenu() {

    const toggle = document.getElementById("mobileToggle");
    const menu = document.getElementById("mobileMenu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });

}

/* ========================================= */
/* REVEAL ANIMATION */
/* ========================================= */

function initRevealAnimations() {

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        { threshold: 0.15 }

    );

    reveals.forEach(item => observer.observe(item));

}

/* ========================================= */
/* HEADER EFFECT */
/* ========================================= */

function initHeaderEffect() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        header.style.boxShadow = window.scrollY > 20
            ? "0 10px 24px rgba(13,27,42,.08)"
            : "none";

    });

}

/* ========================================= */
/* HERO MOTION */
/* ========================================= */

function initHeroAnimation() {

    const hero = document.querySelector(".module-header");

    if (!hero) return;

    hero.animate(

        [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],

        { duration: 800, easing: "ease-out", fill: "forwards" }

    );

}