var numero = document.querySelector('#numero');
var botao = document.querySelector('#botao');

function NumeroAleatorio (click,botao){
    var numeroSecreto = parseInt(Math.random()*10000);

    console.log(numeroSecreto);
    
    numero.textContent = numeroSecreto;
}

botao.addEventListener("click", NumeroAleatorio);
