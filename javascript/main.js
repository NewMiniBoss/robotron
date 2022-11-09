const braco = document.querySelector('[data-braco="valor"]');
const somar = document.querySelector('[data-braco="somar"]');
const subtrair = document.querySelector('[data-braco="subtrair"]');

somar.addEventListener('click', () => {
    manipulacao("somar");
});

subtrair.addEventListener('click', () => {
    manipulacao("subtrair");
});

function manipulacao(operacao) {
    if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}