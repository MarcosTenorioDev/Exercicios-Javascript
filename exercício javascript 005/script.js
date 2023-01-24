    
    



function calcular(){
    var number = Number(prompt("digite seu número:"));
    var result = document.querySelector("p#result");

    result.innerHTML = "O seu número é: " + number + "</br>";
    result.innerHTML += "O seu valor absoluto é: " + Math.abs(number) + "</br>";
    result.innerHTML += "A sua parte inteira é: " + Math.trunc(number) + "</br>";
    result.innerHTML += "O valor inteiro mais próximo é: " + Math.round(number) + "</br>";
    result.innerHTML += "A sua raiz quadrada é: " + Math.sqrt(number) + "</br>";
    result.innerHTML += "A sua raiz cúbica é: " + Math.cbrt(number) + "</br>";
    result.innerHTML += "O valor de " + number + "<sup>2</sup> é : " + Math.pow(number, 2) + "</br>";
    result.innerHTML += "O valor de " + number + "<sup>3</sup> é : " + Math.pow(number, 3);
 
}


   
