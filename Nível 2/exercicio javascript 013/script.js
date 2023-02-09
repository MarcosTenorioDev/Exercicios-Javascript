let result = document.getElementById('result')
let date = new Date
let yearCalc = date.getFullYear()


function start(){
    let bornYear = Number(prompt('Digite o ano que você nasceu'))
    let resultYear = yearCalc - bornYear
    
    result.innerHTML = `<p>Quem nasceu em ${bornYear}, vai completar em ${yearCalc}, <mark>${resultYear}</mark> anos</p>`
    
}