// Função de scroll para o topo
window.onscroll = function () {
    toggleScrollButton();
};

// Mostra ou esconde o botão de scroll para o topo dependendo da posição do scroll
function toggleScrollButton() {
    const scrollButton = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Função para rolar suavemente até o topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Validação do Formulário de Contato
document.getElementById('contactForm').addEventListener('submit', function (event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value === "" || email.value === "" || message.value === "") {
        event.preventDefault();
        alert("Por favor, preencha todos os campos!");
    } else if (!validateEmail(email.value)) {
        event.preventDefault();
        alert("Por favor, insira um e-mail válido!");
    }
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Animação no scroll (para seções)
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.2 // O quanto da seção precisa estar visível para iniciar a animação
};

// Função de animação das seções
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, options);

// Observa todas as seções
sections.forEach(section => {
    observer.observe(section);
});
