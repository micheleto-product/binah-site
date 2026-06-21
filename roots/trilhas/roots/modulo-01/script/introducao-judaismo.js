/* ========================================= */
/* BINAH - INTRODUÇÃO AO JUDAÍSMO */
/* ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initRevealAnimations();
    initProgressBar();
    initLessonCards();
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

    const links = menu.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });

}

/* ========================================= */
/* REVEAL ANIMATIONS */
/* ========================================= */

function initRevealAnimations() {

    const reveals = document.querySelectorAll(".reveal");

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

    reveals.forEach(item => {

        observer.observe(item);

    });

}

/* ========================================= */
/* PROGRESS BAR */
/* ========================================= */

function initProgressBar() {

    const progressFill =
        document.querySelector(".progress-fill");

    if (!progressFill) return;

    progressFill.style.width = "0";

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    progressFill.style.transition =
                        "width 1.8s ease-out";

                    progressFill.style.width = "48%";

                    observer.disconnect();

                }

            });

        },

        {
            threshold: 0.4
        }

    );

    observer.observe(progressFill);

}

/* ========================================= */
/* LESSON CARDS */
/* ========================================= */

function initLessonCards() {

    const cards =
        document.querySelectorAll(".lesson-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.animate(

                [
                    {
                        transform: "translateY(0)"
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
                        transform: "translateY(0)"
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
/* HEADER EFFECT */
/* ========================================= */

function initHeaderEffect() {

    const header =
        document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 10px 24px rgba(13,27,42,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}

/* ========================================= */
/* HERO ANIMATION */
/* ========================================= */

function initHeroAnimation() {

    const heroTitle =
        document.querySelector(".hero h1");

    const heroText =
        document.querySelector(".hero p");

    const heroMeta =
        document.querySelector(".hero-meta");

    const heroButton =
        document.querySelector(".btn-primary");

    if (heroTitle) {

        heroTitle.animate(

            [
                {
                    opacity: 0,
                    transform: "translateY(24px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],

            {
                duration: 800,
                easing: "ease-out",
                fill: "forwards"
            }

        );

    }

    if (heroText) {

        heroText.animate(

            [
                {
                    opacity: 0,
                    transform: "translateY(24px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],

            {
                duration: 1000,
                delay: 150,
                easing: "ease-out",
                fill: "forwards"
            }

        );

    }

    if (heroMeta) {

        heroMeta.animate(

            [
                {
                    opacity: 0,
                    transform: "translateY(24px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],

            {
                duration: 1200,
                delay: 250,
                easing: "ease-out",
                fill: "forwards"
            }

        );

    }

    if (heroButton) {

        heroButton.animate(

            [
                {
                    opacity: 0,
                    transform: "translateY(24px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],

            {
                duration: 1400,
                delay: 350,
                easing: "ease-out",
                fill: "forwards"
            }

        );

    }

}

/* ========================================= */
/* CTA BUTTON MICROINTERACTION */
/* ========================================= */

const buttons =
    document.querySelectorAll(
        ".btn-primary, .btn-secondary"
    );

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.animate(

            [
                {
                    transform: "translateY(0)"
                },
                {
                    transform: "translateY(-2px)"
                }
            ],

            {
                duration: 180,
                fill: "forwards"
            }

        );

    });

    button.addEventListener("mouseleave", () => {

        button.animate(

            [
                {
                    transform: "translateY(-2px)"
                },
                {
                    transform: "translateY(0)"
                }
            ],

            {
                duration: 180,
                fill: "forwards"
            }

        );

    });

});

/* ========================================= */
/* LOGO SCROLL TOP */
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

/* ========================================= */
/* CLICK NAS AULAS */
/* ========================================= */

const lessons =
    document.querySelectorAll(".lesson-card");

lessons.forEach(lesson => {

    lesson.addEventListener("click", () => {

        if (
            lesson.classList.contains("locked")
        ) {

            return;

        }

        lesson.animate(

            [
                {
                    transform: "scale(1)"
                },
                {
                    transform: "scale(.97)"
                },
                {
                    transform: "scale(1)"
                }
            ],

            {
                duration: 250
            }

        );

    });

});

/* ========================================= */
/* BINAH MOTION SYSTEM */
/* O CONHECIMENTO SE REVELA */
/* ========================================= */

window.addEventListener("load", () => {

    document.body.animate(

        [
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ],

        {
            duration: 600,
            easing: "ease-out"
        }

    );

});