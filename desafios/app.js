let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function botaoConsole(){
    console.log('O botão foi criado');
}

function botaoAlerta(){
    alert('Eu amo JS');
}

function botaoPrompt(){
    let cidade = prompt('De qual cidade você é?');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function botaoSoma(){
    let numero1 = parseInt(prompt('Digite um número'));
    let numero2 = parseInt(prompt('Digite outro número'));
    let soma = numero1 + numero2;
    alert(`A soma entre ${numero1} e ${numero2} é ${soma}.`);
}