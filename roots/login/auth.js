/* ========================================= */
/* BINAH - AUTH (LOGIN / CADASTRO) */
/* ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initRevealAnimations();
    initPasswordToggle();
    initPasswordStrength();
    initTermsGate();
    initButtonHover();
    initLoginSubmit();
    initSignupSubmit();

});

/* ========================================= */
/* REVEAL ANIMATIONS */
/* ========================================= */

function initRevealAnimations() {

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((el, index) => {

        setTimeout(() => {

            el.classList.add("active");

        }, index * 120);

    });

}

/* ========================================= */
/* MOSTRAR / OCULTAR SENHA */
/* ========================================= */

function initPasswordToggle() {

    const buttons = document.querySelectorAll(".toggle-password");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const targetId = button.dataset.target;

            const input = document.getElementById(targetId);

            if (!input) return;

            const isHidden = input.type === "password";

            input.type = isHidden ? "text" : "password";

            button.setAttribute(
                "aria-label",
                isHidden ? "Ocultar senha" : "Mostrar senha"
            );

            button.classList.toggle("active", isHidden);

        });

    });

}

/* ========================================= */
/* FORÇA DA SENHA (CADASTRO) */
/* ========================================= */

function initPasswordStrength() {

    const senha = document.getElementById("senha");
    const meter = document.getElementById("strengthMeter");

    if (!senha || !meter) return;

    senha.addEventListener("input", () => {

        const value = senha.value;

        let score = 0;

        if (value.length >= 8) score++;
        if (/[A-Z]/.test(value) && /[0-9]/.test(value)) score++;
        if (value.length >= 12 && /[^A-Za-z0-9]/.test(value)) score++;

        meter.classList.remove("level-1", "level-2", "level-3");

        if (value.length === 0) return;

        if (score <= 1) meter.classList.add("level-1");
        else if (score === 2) meter.classList.add("level-2");
        else meter.classList.add("level-3");

    });

}

/* ========================================= */
/* LIBERAR BOTÃO COM ACEITE DOS TERMOS */
/* ========================================= */

function initTermsGate() {

    const terms = document.getElementById("terms");
    const submit = document.getElementById("signupSubmit");

    if (!terms || !submit) return;

    terms.addEventListener("change", () => {

        submit.disabled = !terms.checked;

    });

}

/* ========================================= */
/* SUBMIT - LOGIN (DEMO) */
/* ========================================= */

function initLoginSubmit() {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const button = form.querySelector('button[type="submit"]');

        if (!button) return;

        const originalText = button.textContent;

        button.disabled = true;
        button.textContent = "Entrando...";

        setTimeout(() => {

            button.textContent = "Entrar";
            button.disabled = false;

            window.location.href = "dashboard.html";

        }, 900);

    });

}

/* ========================================= */
/* SUBMIT - CADASTRO (DEMO) */
/* ========================================= */

function initSignupSubmit() {

    const form = document.getElementById("signupForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const button = document.getElementById("signupSubmit");

        if (!button) return;

        const originalText = button.textContent;

        button.disabled = true;
        button.textContent = "Criando conta...";

        setTimeout(() => {

            button.textContent = "Conta criada ✓";

            setTimeout(() => {

                window.location.href = "dashboard.html";

            }, 600);

        }, 900);

    });

}

/* ========================================= */
/* BOTÕES - MICROINTERAÇÃO */
/* ========================================= */

function initButtonHover() {

    const buttons = document.querySelectorAll(
        ".btn-primary, .btn-google"
    );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            if (button.disabled) return;

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
