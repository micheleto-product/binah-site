/* ========================================= */
/* BINAH - PERFIL */
/* ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initRevealAnimations();
    initHeaderEffect();
    initTabs();
    initInterestChips();
    initRemoveFavorites();
    initButtonHover();
    initFormSubmit();

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
/* TABS */
/* ========================================= */

function initTabs() {

    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".panel");

    if (!tabs.length) return;

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            tab.classList.add("active");

            const panel = document.getElementById(target);

            if (panel) panel.classList.add("active");

        });

    });

}

/* ========================================= */
/* TEMAS DE INTERESSE */
/* ========================================= */

function initInterestChips() {

    const group = document.getElementById("interestChips");

    if (!group) return;

    const chips = group.querySelectorAll(".chip");

    chips.forEach(chip => {

        chip.addEventListener("click", () => {

            chip.classList.toggle("active");

        });

    });

}

/* ========================================= */
/* REMOVER FAVORITOS / SALVOS */
/* ========================================= */

function initRemoveFavorites() {

    const buttons = document.querySelectorAll(".remove-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const item = button.closest(".favorite-item");

            if (!item) return;

            const animation = item.animate(

                [
                    { opacity: 1, transform: "translateX(0)" },
                    { opacity: 0, transform: "translateX(12px)" }
                ],

                {
                    duration: 220,
                    easing: "ease-out",
                    fill: "forwards"
                }

            );

            animation.onfinish = () => item.remove();

        });

    });

}

/* ========================================= */
/* SALVAR ALTERAÇÕES (DEMO) */
/* ========================================= */

function initFormSubmit() {

    const form = document.querySelector(".settings-form");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const button = form.querySelector('button[type="submit"]');

        if (!button) return;

        const originalText = button.textContent;

        button.textContent = "Salvo ✓";

        setTimeout(() => {

            button.textContent = originalText;

        }, 1800);

    });

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
