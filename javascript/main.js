const controle = document.querySelectorAll('[data-controle]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatisticas = document.querySelectorAll('[data-estatistica]');

controle.forEach(elemento => {
    elemento.addEventListener('click', (evento) => {
        manipulacao(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.pecas);
    })
})

function manipulacao(operacao, controle) {
    const pecaContador = controle.querySelector('[data-contador]');
    if (operacao === "-") {
        pecaContador.value = parseInt(pecaContador.value) - 1;
    } else {
        pecaContador.value = parseInt(pecaContador.value) + 1;
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

const abrirCores = document.querySelector('[data-trocaCor]');
const listaDeCores = document.querySelector('[data-listaCores]');
const cores = document.querySelectorAll('[data-cores]');
const robotron = document.querySelector('[data-robo]');

abrirCores.addEventListener('click', () => {
    listaDeCores.hidden = "";
    abrirCores.hidden = "true";
})

cores.forEach((elemento) => {
    elemento.addEventListener('click', (corDoRobo) => {
       robotron.src=`img/robo-${corDoRobo.target.dataset.cores}.png`;
       abrirCores.hidden = "";
       listaDeCores.hidden = "true";
    })
})

