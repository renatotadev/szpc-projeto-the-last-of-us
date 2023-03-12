
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () =>{
        desativarBotaoSelecionado();

        selecionarBotaoCarricel(botao);

        esconderImagemAtiva();

        mostrarImagemFundo(indice);
    })
})

function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarricel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
