// Adiciona comportamento de rolagem suave para os links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Adiciona validação simples ao formulário
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && email && mensagem) {
    // simula o envio do formulário
    alert('Mensagem enviada com sucesso!');
    this.reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});
