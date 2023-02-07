let result = document.querySelector("p#result")

function calc(){
    let n1 = Number(prompt("Digite o primeiro número"))
    let n2 = Number(prompt("Digite o segundo número"))

    if(n1 > n2){
        result.innerHTML= `<p>O número ${n1} é maior que o número ${n2}</p>`
    }else if (n1 < n2){
        result.innerHTML= `<p>O número ${n2} é maior que o número ${n1}</p>`
    }else if (n1 === n2){
        result.innerHTML= `<p>Os números são de valor igual</p>`
    }else{
        result.innerHTML= `<p>Valor inválido</p>`
    }
}