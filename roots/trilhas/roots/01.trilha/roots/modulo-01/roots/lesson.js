/* ========================================= */
/* BINAH - LIÇÃO (TEMPLATE COMPARTILHADO) */
/* ========================================= */

const COLOR_GOLD = "#C9A44C";
const COLOR_SUCCESS = "#4D7B57";
const COLOR_ERROR = "#B3463F";

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initRevealAnimations();
    initQuiz();
    initLessonProgress();
    initHeaderEffect();
    initHeroAnimation();
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

        {
            threshold: 0.15
        }

    );

    reveals.forEach(item => {

        observer.observe(item);

    });

}

/* ========================================= */
/* IDENTIFICAÇÃO DA LIÇÃO */
/* ========================================= */

function getLessonId() {

    return document.body.dataset.lesson || null;

}

/* ========================================= */
/* QUIZ */
/* ========================================= */

function initQuiz() {

    const form = document.getElementById("quizForm");
    const result = document.getElementById("quizResult");

    if (!form || !result) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const selected = document.querySelector(
            'input[name="quiz"]:checked'
        );

        if (!selected) {

            result.innerHTML = "Selecione uma alternativa.";
            result.style.color = COLOR_GOLD;

            return;

        }

        if (selected.value === form.dataset.correct) {

            result.innerHTML =
                form.dataset.success || "✓ Correto!";

            result.style.color = COLOR_SUCCESS;

            saveLessonCompleted();
            updateStartButton();

        } else {

            result.innerHTML =
                "✕ Resposta incorreta. Revise a lição e tente novamente.";

            result.style.color = COLOR_ERROR;

        }

    });

}

/* ========================================= */
/* PROGRESSO DA LIÇÃO (DEMO - localStorage) */
/* ========================================= */

function saveLessonCompleted() {

    const id = getLessonId();

    if (!id) return;

    localStorage.setItem(`binah_lesson_${id}`, "completed");

}

function initLessonProgress() {

    const id = getLessonId();

    if (!id) return;

    const status = localStorage.getItem(`binah_lesson_${id}`);

    if (status === "completed") {

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

        if (window.scrollY > 20) {

            header.style.boxShadow = "0 10px 24px rgba(13,27,42,.08)";

        } else {

            header.style.boxShadow = "none";

        }

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

        {
            duration: 800,
            easing: "ease-out",
            fill: "forwards"
        }

    );

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
                    duration: 180,
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
                    duration: 180,
                    fill: "forwards"
                }

            );

        });

    });

}

/* ========================================= */
/* LEITURA - FADE IN */
/* ========================================= */

window.addEventListener("load", () => {

    document.body.animate(

        [
            { opacity: 0 },
            { opacity: 1 }
        ],

        {
            duration: 500
        }

    );

});
