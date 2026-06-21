/* ===================================== */
/* BINAH - SCRIPT */
/* ===================================== */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initRevealAnimations();
    initProgressBars();
    initSmoothScroll();
    initHeaderEffects();

});

/* ===================================== */
/* MOBILE MENU */
/* ===================================== */

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

/* ===================================== */
/* REVEAL ANIMATION */
/* ===================================== */

function initRevealAnimations() {

    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return;

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

/* ===================================== */
/* PROGRESS BARS */
/* ===================================== */

function initProgressBars() {

    const bars = document.querySelectorAll(
        ".progress-fill, .dashboard-fill"
    );

    if (!bars.length) return;

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const bar = entry.target;

                const finalWidth =
                    window.getComputedStyle(bar).width;

                bar.style.width = "0px";

                requestAnimationFrame(() => {

                    bar.style.transition =
                        "width 1.8s ease-out";

                    bar.style.width = finalWidth;

                });

                observer.unobserve(bar);

            });

        },

        {
            threshold: 0.4
        }

    );

    bars.forEach(bar => {

        observer.observe(bar);

    });

}

/* ===================================== */
/* SMOOTH SCROLL */
/* ===================================== */

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", (e) => {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#") return;

            const target =
                document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

}

/* ===================================== */
/* HEADER EFFECT */
/* ===================================== */

function initHeaderEffects() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow =
                "0 10px 30px rgba(13,27,42,.05)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}

/* ===================================== */
/* HOVER INTERACTIONS */
/* ===================================== */

const cards = document.querySelectorAll(
    ".problem-card, .trail-card, .library-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-6px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";

    });

});

/* ===================================== */
/* HERO CARD FLOAT */
/* ===================================== */

const journeyCard =
    document.querySelector(".journey-card");

if (journeyCard) {

    let direction = 1;

    setInterval(() => {

        journeyCard.animate(

            [
                {
                    transform:
                        `translateY(${direction * 4}px)`
                },
                {
                    transform:
                        `translateY(${direction * -4}px)`
                }

            ],

            {
                duration: 3000,
                fill: "forwards"
            }

        );

        direction *= -1;

    }, 3000);

}

/* ===================================== */
/* CTA BUTTON EFFECT */
/* ===================================== */

const ctaButtons =
    document.querySelectorAll(".btn-primary");

ctaButtons.forEach(button => {

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
                duration: 200,
                fill: "forwards"
            }

        );

    });

});

/* ===================================== */
/* BINAH MOTION */
/* O conhecimento se revela */
/* ===================================== */

const goldLines =
    document.querySelectorAll(".hero-line");

goldLines.forEach(line => {

    line.animate(

        [
            {
                width: "0px",
                opacity: 0
            },
            {
                width: "80px",
                opacity: 1
            }
        ],

        {
            duration: 1200,
            easing: "ease-out",
            fill: "forwards"
        }

    );

});