

function calcular(){
    var nome = prompt("Qual o nome do aluno")
    var p1 = document.querySelector("p#p1");
    var p2 = document.querySelector("p#p2");

    alert("Olá, " + nome + ". Vamos ver sua média");

    
    

    var n1 = parseInt(prompt("Qual a nota de n1 do aluno?"));
    var n2 = parseInt(prompt("Qual a nota de n2 do aluno?"));

    var media = (n1+n2)/2;

    
    p1.innerHTML = "Calculando a média final de " + nome;
    p2.innerHTML = "As notas obtidas foram: N1 = " + n1 + " // N2 = " + n2;
    p3.innerHTML = "A média de " + nome + " Foi: " + media;
    

}