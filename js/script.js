// Menu mobile
const navToggle = document.getElementById("navToggle");
const body = document.body;

if (navToggle) {
  navToggle.addEventListener("click", () => {
    body.classList.toggle("nav-open");
  });
}

// Fechar menu ao clicar em um link (mobile)
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
  });
});

// Ano atual no rodapé
const anoSpan = document.getElementById("anoAtual");
if (anoSpan) {
  anoSpan.textContent = new Date().getFullYear();
}

// Animação de entrada ao rolar a página
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  // Fallback simples
  reveals.forEach((el) => el.classList.add("visible"));
}
