let studentName = document.querySelector("p#studentName")
let grade = document.querySelector("p#grade")
let mediaResult = document.querySelector("p#media")
let finalMensage = document.querySelector("p#finalMensage")




function calcularMedia() {
    let name = prompt("Qual o nome do estudante a ser avaliado?")
    let n1 = Number(prompt("Digite sua nota de n1"));
    let n2 = Number(prompt("Agora digite sua nota de n2"));
    let media = (n1 + n2)/2;

    studentName.innerHTML = `<p>Calculando a média de <mark>${name}</mark></p>`;
    grade.innerHTML = `<p>Sua nota foi:<br> n1 = ${n1}<br> n2 + ${n2}</p>`;
    mediaResult.innerHTML = `<p>Sua média foi: ${media} </p>`;  

    if (media < 6 && media >= 0){
        finalMensage.innerHTML = `<p>A mensagem final é: <span style = "background-color: red; color: white;">Você foi para recuperação</span></p>`
    } 

    else if(media >= 6 && media <= 10 ) {
        finalMensage.innerHTML = `<p>A mensagem final é: <span style = "background-color: green; color: white;">Parabéns, você passou no semestre</span> </p>`
    }  
     
    else if (media > 10){
        finalMensage.innerHTML = `<p>Houve uma média maior que 10, por favor cheque novamente se essa informaçao está correta. Caso esteja, <span style = "background-color: green; color: white;">Parabéns! Você passou com média 10</span></p>`
    }else{
        finalMensage.innerHTML = `<p>dados inválidos, por favor tente novamente</p>`
    }
}


