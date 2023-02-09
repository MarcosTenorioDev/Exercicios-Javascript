let result = document.getElementById('result')
let date = new Date
let day = date.getDate()
let monthString = new Array('jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul','Ago', 'Set', 'Out', 'Nov', 'Dez' )           
let month = date.getMonth()
let year = date.getFullYear()
let weekdayString = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
let weekday = date.getDay()
let hour = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()



function info(){
    result.innerHTML = `<p>Dia: ${day}</p>`
    result.innerHTML += `<p>Mês: ${monthString[month]}</p>`
    result.innerHTML += `<p>Ano: ${year}</p>`
    result.innerHTML += `<p>Dia: ${weekdayString[weekday]}</p>`
    result.innerHTML += `<p>Hora: ${hour}</p>`
    result.innerHTML += `<p>Minutos: ${minutes}</p>`
    result.innerHTML += `<p>Segundos: ${seconds}</p>`
    
}