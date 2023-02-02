let res = document.querySelector("p#res")

function acao1(){
     res.innerHTML += `<p>Clicou no primeiro botão</p>`;

}

function acao2(){
    res.innerHTML += `<p>Clicou no segundo botão</p>`;
}

function acao3(){
    res.innerHTML += `<p>Clicou no terceiro botão</p>`;
}

function acao4(){
    res.innerHTML += `<p>Clicou no quarto botão`;
}

function zerar(){
    res.innerHTML = null;
    res.innerHTML = `<p>Vou registrar suas ações com os botões acima</p>`
}