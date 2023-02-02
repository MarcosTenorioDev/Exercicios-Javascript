let res = document.querySelector("p#result")

function calc(){
    let n1 = Number(prompt("Digite o seu número"))

    if(n1% 2 == 0){
        res.innerHTML = `<p>O seu número é par</p>`
    }else{
        res.innerHTML = `<p>O seu número é impar</p>`
    }
}