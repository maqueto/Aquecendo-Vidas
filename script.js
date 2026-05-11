// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Validação e feedback do formulário
const form = document.querySelector('.form-doacao');
const submitBtn = document.querySelector('.btn-submit');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validação simples
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const tipo = document.getElementById('tipo').value;
  
  if (!nome || !email || !tipo) {
