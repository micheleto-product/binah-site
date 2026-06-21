/* ========================================= */
/* BINAH - TRILHAS */
/* ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initRevealAnimations();
    initProgressBar();
    initAccordion();
    initHoverEffects();
    initHeaderEffect();

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

    const links = menu.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });

}

/* ========================================= */
/* REVEAL ANIMATION */
/* ========================================= */

function initRevealAnimations() {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    elements.forEach(element => {

        observer.observe(element);

    });

}

/* ========================================= */
/* PROGRESS BAR */
/* ========================================= */

function initProgressBar() {

    const progress = document.querySelector(".progress-fill");

    if (!progress) return;

    const finalWidth = "48%";

    progress.style.width = "0";

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    progress.style.transition =
                        "width 1.8s ease-out";

                    progress.style.width = finalWidth;

                    observer.disconnect();

                }

            });

        },

        {
            threshold: 0.4
        }

    );

    observer.observe(progress);

}

/* ========================================= */
/* ACCORDION DOS MÓDULOS */
/* ========================================= */

function initAccordion() {

    const modules = document.querySelectorAll(".module");

    modules.forEach(module => {

        const header =
            module.querySelector(".module-header");

        const lessons =
            module.querySelectorAll(".lesson");

        lessons.forEach(lesson => {

            lesson.style.display = "block";

        });

        header.style.cursor = "pointer";

        header.addEventListener("click", () => {

            const collapsed =
                module.classList.contains("collapsed");

            if (collapsed) {

                lessons.forEach(lesson => {

                    lesson.style.display = "block";

                });

                module.classList.remove("collapsed");

            } else {

                lessons.forEach(lesson => {

                    lesson.style.display = "none";

                });

                module.classList.add("collapsed");

            }

        });

    });

}

/* ========================================= */
/* HOVER CARDS */
/* ========================================= */

function initHoverEffects() {

    const cards =
        document.querySelectorAll(".trail-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.animate(

                [
                    {
                        transform: "translateY(0px)"
                    },
                    {
                        transform: "translateY(-6px)"
                    }
                ],

                {
                    duration: 250,
                    fill: "forwards"
                }

            );

        });

        card.addEventListener("mouseleave", () => {

            card.animate(

                [
                    {
                        transform: "translateY(-6px)"
                    },
                    {
                        transform: "translateY(0px)"
                    }
                ],

                {
                    duration: 250,
                    fill: "forwards"
                }

            );

        });

    });

}

/* ========================================= */
/* HEADER SHADOW */
/* ========================================= */

function initHeaderEffect() {

    const header =
        document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 8px 24px rgba(13,27,42,.06)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}

/* ========================================= */
/* CTA BUTTON */
/* ========================================= */

const ctaButton =
    document.querySelector(".btn-primary");

if (ctaButton) {

    ctaButton.addEventListener("mouseenter", () => {

        ctaButton.animate(

            [
                {
                    transform: "translateY(0)"
                },
                {
                    transform: "translateY(-2px)"
                }
            ],

            {
                duration: 200,
                fill: "forwards"
            }

        );

    });

    ctaButton.addEventListener("mouseleave", () => {

        ctaButton.animate(

            [
                {
                    transform: "translateY(-2px)"
                },
                {
                    transform: "translateY(0)"
                }
            ],

            {
                duration: 200,
                fill: "forwards"
            }

        );

    });

}

/* ========================================= */
/* BINAH MOTION */
/* CONHECIMENTO SE REVELA */
/* ========================================= */

window.addEventListener("load", () => {

    const title =
        document.querySelector(".hero h1");

    if (!title) return;

    title.animate(

        [
            {
                opacity: 0,
                transform: "translateY(20px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],

        {
            duration: 900,
            easing: "ease-out",
            fill: "forwards"
        }

    );

});

/* ========================================= */
/* SCROLL TO TOP */
/* ========================================= */

const logo =
    document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}