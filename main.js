// ── Navbar: adiciona sombra ao rolar ──
window.addEventListener(‘scroll’, () => {
document.getElementById(‘navbar’).classList.toggle(‘scrolled’, window.scrollY > 20);
});

// ── Reveal ao entrar na viewport ──
const reveals = document.querySelectorAll(’.reveal’);
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add(‘visible’);
observer.unobserve(entry.target);
}
});
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ── Formulário: feedback visual ao enviar ──
function handleSubmit(btn) {
btn.textContent = ‘✓ Recebido! Entraremos em contato em breve’;
btn.style.background = ‘var(–green)’;
btn.disabled = true;
}
