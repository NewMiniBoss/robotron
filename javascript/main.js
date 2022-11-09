const robotron = document.querySelector('[data-robo="tron"]');

robotron.addEventListener('click', (evento) => {
    console.log('click');
    console.log(evento);
});

function dizOi(nome) {
    console.log('Oi ' + nome);
    console.log('Bem vindo ao robotron');
}

dizOi("Gabriel");
