/* ========================================= */
/* BINAH - TRILHA: TORÁ */
/* ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initRevealAnimations();
    initProgressBar();
    initHeaderEffect();
    initButtonHover();

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
/* PROGRESS BAR */
/* ========================================= */

function initProgressBar() {

    const fill = document.querySelector(".progress-fill");

    if (!fill) return;

    fill.style.width = "0%";

}

/* ========================================= */
/* HEADER EFFECT */
/* ========================================= */

function initHeaderEffect() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        header.style.boxShadow = window.scrollY > 20
            ? "0 8px 24px rgba(13,27,42,.06)"
            : "none";

    });

}

/* ========================================= */
/* BOTÕES - MICROINTERAÇÃO */
/* ========================================= */

function initButtonHover() {

    document.querySelectorAll(".btn-primary, .btn-secondary").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.animate(
                [{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }],
                { duration: 200, fill: "forwards" }
            );

        });

        button.addEventListener("mouseleave", () => {

            button.animate(
                [{ transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
                { duration: 200, fill: "forwards" }
            );

        });

    });

}
