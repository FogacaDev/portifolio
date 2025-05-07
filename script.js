document.addEventListener("DOMContentLoaded", function () {
    // Inicializando o carrossel
    const carousel = new bootstrap.Carousel('#meuCarrossel'); // Certifique-se de que o ID é '#myCarousel'
    console.log('Carrossel carregado:', carousel);

    // Função de cálculo de idade
    function calcularIdade(dataNascimento) {
        let hoje = new Date();
        let nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();

        // Ajusta caso ainda não tenha feito aniversário este ano
        let mesAtual = hoje.getMonth();
        let diaAtual = hoje.getDate();
        let mesNascimento = nascimento.getMonth();
        let diaNascimento = nascimento.getDate();

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade;
    }

    // Verifica se o elemento existe antes de modificar o conteúdo
    let idadeSpan = document.getElementById("idade");
    if (idadeSpan) {
        idadeSpan.textContent = calcularIdade("1986-01-24"); // Exemplo de data de nascimento
    }
});

//função da roda de progresso em idiomas
function animateWheel(wheel) {
    const percentageText = wheel.querySelector('.percentage');
    const target = parseInt(wheel.getAttribute('data-progress'));
    let current = 0;
    const speed = 15;

    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        const gradient = `conic-gradient(#60a5fa ${current}%, #e5e7eb ${current}%)`;
        wheel.style.background = gradient;
        percentageText.textContent = current + "%";
      }
    }, speed);
  }

  const wheel = document.querySelector('.english-wheel');

  const observer = new IntersectionObserver(entries => { //animação só roda quando aparece na tela
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateWheel(entry.target);
        observer.unobserve(entry.target); // roda apenas uma vez
      }
    });
  }, {
    threshold: 0.6 // anima quando 60% da roda estiver visível
  });

  observer.observe(wheel);

  // função tema claro
  if (savedTheme.includes('light')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  }
  const newTheme = currentTheme.includes('dark') ? 'style-light.css' : 'style-dark.css';