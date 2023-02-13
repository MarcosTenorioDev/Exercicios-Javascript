let numberRandom = Number(Math.floor(101*(Math.random())))

let result = document.getElementById('result')

function start(){
    let palpite = Number(prompt('Digite seu palpite'))

    
    if(palpite < numberRandom){
        result.innerHTML += `<p> O número ${palpite} é <strong> MENOR</strong> que o número secreto</p>`
    }else if (palpite > numberRandom){
        result.innerHTML += `<p> O número ${palpite} é <strong> MAIOR </strong> que o número secreto</p>`
    }else if (palpite == numberRandom){
        result.innerHTML += `<p> O número ${palpite} é o número secreto, <strong> parabéns!!! </strong></p>`;
        document.getElementById('button') .style.visibility = 'hidden'
    }else {
        result.innerHTML += `<p>Valor inválido</strong></p>`
    }
}

