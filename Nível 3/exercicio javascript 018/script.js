let result = document.getElementById('result')
let vel = window.document.querySelector('input#textvel')


function start(){
    let velocity = Number(vel.value)
    result.innerHTML = `<p>A sua velocidade foi de: ${velocity}<strong>Km/h</strong></p>`

    if (velocity > 60){
        result.innerHTML += `<p>Você foi multado por sua velocidade ser superior a <strong>60 Km/h</strong></p>`
    }   

    result.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}
