function calc() {
    let n1 = Number(prompt('Digite um número: '))
    let n2 = Number(prompt('Digite outro número: '))
    let result = document.getElementById('result')
    let soma = n1 + n2
    let subtracao = n1 - n2
    let multiplicacao = n1 * n2
    let divisao = n1/n2

    let option = Number(prompt(`Valores informados: ${n1} e ${n2}
    O que vamos fazer?
    [1] Somar
    [2] Subtrair
    [3] Multiplicar
    [4] Dividir`))

    if(option === 1){
        result.innerHTML = `<p> ${n1} + ${n2} = <b>${soma}<b></p>`
    }else if (option === 2){
        result.innerHTML = `<p> ${n1} - ${n2} = <b>${subtracao}<b></p>`
    }else if (option === 3){
        result.innerHTML = `<p> ${n1} x ${n2} = <b>${multiplicacao}<b></p>`
    }else if (option === 4){
        result.innerHTML = `<p> ${n1}/${n2} = <b>${divisao}<b></p>`
    }else{
        result.innerHTML = `<p>Valor de seleção para operação errado, digite novamente</p>`
    }


}