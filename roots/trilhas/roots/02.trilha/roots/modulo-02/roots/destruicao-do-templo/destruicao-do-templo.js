/* ========================================= */
/* BINAH - LIÇÃO: DESTRUIÇÃO DO TEMPLO */
/* ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initRevealAnimations();
    initQuiz();
    initLessonProgress();
    initHeaderEffect();
    initHeroAnimation();
    initButtonHover();

});

const LESSON_KEY = "binah_historia_lesson_07_destruicao_do_templo";

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
/* QUIZ - Ano da destruição do Segundo Templo */
/* Resposta correta: "70 E.C." */
/* ========================================= */

function initQuiz() {

    const form = document.getElementById("quizForm");
    const result = document.getElementById("quizResult");

    if (!form || !result) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const selected = document.querySelector('input[name="quiz"]:checked');

        if (!selected) {

            result.innerHTML = "Selecione uma alternativa.";
            result.style.color = "#C9A44C";

            return;

        }

        if (selected.value === "2") {

            result.innerHTML =
                "✓ Correto! O Segundo Templo foi destruído por Roma em 70 E.C.";

            result.style.color = "#4D7B57";

            localStorage.setItem(LESSON_KEY, "completed");
            updateStartButton();

        } else {

            result.innerHTML =
                "✕ Resposta incorreta. Revise a lição e tente novamente.";

            result.style.color = "#B3463F";

        }

    });

}

/* ========================================= */
/* PROGRESSO DA LIÇÃO (DEMO - localStorage) */
/* ========================================= */

function initLessonProgress() {

    if (localStorage.getItem(LESSON_KEY) === "completed") {

        updateStartButton();

    }

}

function updateStartButton() {

    const button = document.querySelector(".lesson-header .btn-primary");

    if (button) button.textContent = "Lição Concluída ✓";

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

    const hero = document.querySelector(".lesson-header");

    if (!hero) return;

    hero.animate(

        [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],

        { duration: 800, easing: "ease-out", fill: "forwards" }

    );

}

/* ========================================= */
/* BOTÕES - MICROINTERAÇÃO */
/* ========================================= */

function initButtonHover() {

    document.querySelectorAll(".btn-primary, .btn-secondary").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.animate(
                [{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }],
                { duration: 180, fill: "forwards" }
            );

        });

        button.addEventListener("mouseleave", () => {

            button.animate(
                [{ transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
                { duration: 180, fill: "forwards" }
            );

        });

    });

}
