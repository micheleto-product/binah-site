/* ========================================= */
/* BINAH - BIBLIOTECA */
/* ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initRevealAnimations();
    initHeaderEffect();
    initSearch();
    initFilters();
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
/* SEARCH */
/* ========================================= */

function initSearch() {

    const input = document.getElementById("librarySearch");
    const emptyState = document.getElementById("emptyState");

    if (!input) return;

    const cards = document.querySelectorAll(
        ".article-card, .term-card, .video-card"
    );

    input.addEventListener("input", () => {

        const query = input.value.trim().toLowerCase();

        let visibleCount = 0;

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            const matches = text.includes(query);

            card.style.display = matches ? "" : "none";

            if (matches) visibleCount++;

        });

        if (emptyState) {

            emptyState.style.display =
                (query !== "" && visibleCount === 0)
                    ? "block"
                    : "none";

        }

        // Buscar reseta os filtros de categoria
        if (query !== "") {

            const chips = document.querySelectorAll(".chip");

            chips.forEach(chip => chip.classList.remove("active"));

            const allChip = document.querySelector('.chip[data-category="todos"]');

            if (allChip) allChip.classList.add("active");

        }

    });

}

/* ========================================= */
/* FILTROS DE CATEGORIA */
/* ========================================= */

function initFilters() {

    const chips = document.querySelectorAll(".chip");

    const filterable = document.querySelectorAll(
        ".article-card, .video-card"
    );

    if (!chips.length) return;

    chips.forEach(chip => {

        chip.addEventListener("click", () => {

            chips.forEach(c => c.classList.remove("active"));

            chip.classList.add("active");

            const category = chip.dataset.category;

            filterable.forEach(card => {

                const show =
                    category === "todos" ||
                    card.dataset.category === category;

                card.style.display = show ? "" : "none";

            });

            const searchInput = document.getElementById("librarySearch");

            if (searchInput) searchInput.value = "";

            const emptyState = document.getElementById("emptyState");

            if (emptyState) emptyState.style.display = "none";

        });

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
