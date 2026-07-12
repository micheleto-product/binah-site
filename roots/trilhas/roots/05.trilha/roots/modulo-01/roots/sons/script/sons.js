/* BINAH - LIÇÃO: SONS (ALEF-BET) */
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu(); initRevealAnimations(); initQuiz();
    initLessonProgress(); initHeaderEffect(); initHeroAnimation(); initButtonHover();
});
const LESSON_KEY = "binah_hebraico_lesson_02_sons";
function initMobileMenu() {
    const toggle = document.getElementById("mobileToggle");
    const menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", () => menu.classList.toggle("active"));
    menu.querySelectorAll("a").forEach(l => l.addEventListener("click", () => menu.classList.remove("active")));
}
function initRevealAnimations() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("active"); obs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}
function initQuiz() {
    const form = document.getElementById("quizForm");
    const result = document.getElementById("quizResult");
    if (!form || !result) return;
    form.addEventListener("submit", e => {
        e.preventDefault();
        const sel = document.querySelector('input[name="quiz"]:checked');
        if (!sel) { result.innerHTML = "Selecione uma alternativa."; result.style.color = "#C9A44C"; return; }
        if (sel.value === "2") {
            result.innerHTML = "✓ Correto! Nikud é o sistema de vogais do hebraico.";
            result.style.color = "#4D7B57";
            localStorage.setItem(LESSON_KEY, "completed"); updateStartButton();
        } else { result.innerHTML = "✕ Resposta incorreta. Revise a lição e tente novamente."; result.style.color = "#B3463F"; }
    });
}
function initLessonProgress() { if (localStorage.getItem(LESSON_KEY) === "completed") updateStartButton(); }
function updateStartButton() { const b = document.querySelector(".lesson-header .btn-primary"); if (b) b.textContent = "Lição Concluída ✓"; }
function initHeaderEffect() {
    const h = document.querySelector(".header"); if (!h) return;
    window.addEventListener("scroll", () => { h.style.boxShadow = window.scrollY > 20 ? "0 10px 24px rgba(13,27,42,.08)" : "none"; });
}
function initHeroAnimation() {
    const h = document.querySelector(".lesson-header"); if (!h) return;
    h.animate([{ opacity: 0, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 800, easing: "ease-out", fill: "forwards" });
}
function initButtonHover() {
    document.querySelectorAll(".btn-primary, .btn-secondary").forEach(b => {
        b.addEventListener("mouseenter", () => b.animate([{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }], { duration: 180, fill: "forwards" }));
        b.addEventListener("mouseleave", () => b.animate([{ transform: "translateY(-2px)" }, { transform: "translateY(0)" }], { duration: 180, fill: "forwards" }));
    });
}
