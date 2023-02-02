function soma(){
    n1 = prompt('digite seu primeiro número');
    n2 = prompt ('digite seu segundo número');

    var result = document.querySelector('p#resultado');

     var resultado = parseInt(n1) + parseInt(n2);

    result.innerHTML = 'O valor da soma dos dois números é: ' + resultado;

}