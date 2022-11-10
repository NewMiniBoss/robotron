const controle = document.querySelectorAll('[data-controle]');
controle.forEach(elemento => {
    elemento.addEventListener('click', (evento) => {
        manipulacao(evento.target.dataset.controle, evento.target.parentNode);
        console.log(evento.target.parentNode)
    })
})

function manipulacao(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
