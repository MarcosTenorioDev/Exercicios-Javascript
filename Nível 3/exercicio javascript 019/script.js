let inputMusic = document.querySelector('input#textMusic')
let result = document.querySelector('p#result')

function start(){
    const keyWord = String(inputMusic.value)

    switch (keyWord){
        case 'amor':
            music = 'SE FOR AMOR - joão gomes e vitor'
        break;

        case 'ficha':
            music = 'FICHA LIMPA - gustavo lima'
        break;
        
        case 'chega':
            music = 'CHEGA E SENTA - jhon'
        break;

        case 'arranhao':
            music = 'ARRANHAO - henrique e juliano'
        break;

        case 'volta':
            music = 'VOLTA COMIGO BB - Zé vaqueiro'
        break;

        default: 
            result.innerHTML = `<p>Nome inválido, digite alguma música presente no nosso banco de dados</p>`
        break;
    }

    result.innerHTML = `<p>Você selecionou a musica: ${music}</p>`
    
}