/* ========================================= */
/* BINAH - PROGRESSO (DASHBOARD) */
/* ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initRevealAnimations();
    initHeaderEffect();
    initProgressBar();
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
/* HEADER SHADOW */
/* ========================================= */

function initHeaderEffect() {

    const header = document.querySelector(".header");

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
/* PROGRESS BAR */
/* ========================================= */

function initProgressBar() {

    const fill = document.querySelector(".progress-fill");

    if (!fill) return;

    const finalWidth = "48%";

    fill.style.width = "0";

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    fill.style.transition = "width 1.8s ease-out";

                    fill.style.width = finalWidth;

                    observer.disconnect();

                }

            });

        },

        {
            threshold: 0.4
        }

    );

    observer.observe(fill);

}

/* ========================================= */
/* BOTÕES - MICROINTERAÇÃO */
/* ========================================= */

function initButtonHover() {

    const buttons = document.querySelectorAll(
        ".btn-primary, .btn-secondary"
    );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.animate(

                [
                    { transform: "translateY(0)" },
                    { transform: "translateY(-2px)" }
                ],

                {
                    duration: 200,
                    fill: "forwards"
                }

            );

        });

        button.addEventListener("mouseleave", () => {

            button.animate(

                [
                    { transform: "translateY(-2px)" },
                    { transform: "translateY(0)" }
                ],

                {
                    duration: 200,
                    fill: "forwards"
                }

            );

        });

    });

}
