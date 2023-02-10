let result = document.getElementById('result')

function start(){
    let randomNum = Number(Math.floor (101*(Math.random())))

    result.innerHTML += `<p>Acabei de pensar no número <mark>${randomNum}</mark></p>`

}

function eraser(){
    result.innerHTML = ''
}