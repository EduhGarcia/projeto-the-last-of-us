// Dar um jeito de pegar os botoes do HTML
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// Dar um jeito de indentificar o clique
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // Desmarcar o botao selecionado
        desmarcaBotaoSelecionado()

        // Marcar o botao selecionado
        botao.classList.add('selecionado')

        // Esconder a imagem ativa
        escondeImagem()

        // Aparecer imagem
        imagens[indice].classList.add('ativa')
    })
})

function desmarcaBotaoSelecionado() {
    botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function escondeImagem() {
    const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
}