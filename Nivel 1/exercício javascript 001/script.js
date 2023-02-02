/* O desafio proposto consiste em digitar um valor no pop-up, guardar esse valor
e fazer duas operações simples. Mostrar o resultado no código HTML*/

alert('Seja bem vindo ao meu primeio exercício javascript resolvido');



function calculator(){
    
    let result = document.querySelector('p.result');
    var number = prompt('digite o seu número');

    result.innerHTML  = `<p>O dobro de ${number} é ${number*2} e sua metade é ${number/2}  </p>`
}


