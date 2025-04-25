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
