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

// ===============================
// FORMULÁRIO -> ENVIAR PARA WHATSAPP
// ===============================

const contatoForm = document.getElementById("contatoForm");

if (contatoForm) {
  contatoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Número do WhatsApp do cliente - APENAS DÍGITOS
    let numeroWhatsApp = "5515996659046";

    // Garante que não tem espaço, +, traço, etc
    numeroWhatsApp = numeroWhatsApp.replace(/\D/g, "");

    if (!nome || !telefone || !mensagem) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const texto = `
Olá, meu nome é ${nome}.

Telefone/WhatsApp: ${telefone}

Mensagem:
${mensagem}
    `.trim();

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    console.log("URL gerada:", url); // só pra conferir no console

    window.open(url, "_blank");
  });
}

