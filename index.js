const form = document.querySelector('.form');

// interroper o submit do botão
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // pegar o input 
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // pegar o valor do imput
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // checar o valor do input é um número
    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura invalido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getImcNivel(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true)

});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getImcNivel (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5]
    }
    
    if (imc >= 34.9) {
        return nivel[4]
    }
    
    if (imc >= 29.9) {
        return nivel[3]
    }
    
    if (imc >= 24.9) {
        return nivel[2]
    }
    
    if (imc >= 18.5) {
        return nivel[1]
    }

    else {
        return nivel[0]
    }
}


//função para criar a tag p 
function criaP() {
    // cria uma tag "p" no html da página
    const p = document.createElement('p');

    // adiciona uma classe na tag p
    p.classList.add('resultado_paragrafo')
    return p

}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    // mantem o campo de resultado limpo
    resultado.innerHTML = "";
    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }


    p.innerHTML = msg;
    resultado.appendChild(p)
}