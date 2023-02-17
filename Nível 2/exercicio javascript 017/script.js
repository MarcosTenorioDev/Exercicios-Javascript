let result = document.getElementById('result')

function start(){
    let mes = prompt('Digite o mês em extenso (ex: Janeiro)')

    let estacao
    switch (mes.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estacao = 'INVERNO'
            break 

        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'PRIMAVERA'
            break

        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO'
            break

        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO'
            break

        default:
            estacao = 'INDEFINIDA'
            break
    }

    result.innerHTML = `<p>No mês de <strong>${mes}</strong>, estamos na estação <strong>${estacao}</strong>.</p>`
    console.log(result.innerHTML)
}
