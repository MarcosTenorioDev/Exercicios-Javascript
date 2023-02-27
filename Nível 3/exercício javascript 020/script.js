let resultFinal = document.querySelector('p#finalResult')

/* -------------------------------------- FINN VARIÁVEIS ----------------------------------------------- */
let resultFinn1 = document.querySelector('p#atack1ResultFinn');
let resultFinn2 = document.querySelector('p#atack2ResultFinn');
let resultFinn3 = document.querySelector('p#atack3ResultFinn');
let resultFinn4 = document.querySelector('p#atack4ResultFinn');

let damageFinnInput1 = document.querySelector('input#finnAtack1');
let damageFinnInput2 = document.querySelector('input#finnAtack2');
let damageFinnInput3 = document.querySelector('input#finnAtack3');
let damageFinnInput4 = document.querySelector('input#finnAtack4');

let damageFinn1 = 0;
let damageFinn2 = 0;
let damageFinn3 = 0;
let damageFinn4 = 0;

let damageFinnTotal = 0;
let vidaFinn = 100;

/* --------------------------------------- REI GELADO VARIÁVEIS ----------------------------------------------- */

let resultReiGelado1 = document.querySelector('p#atack1ResultReiGelado');
let resultReiGelado2 = document.querySelector('p#atack2ResultReiGelado');
let resultReiGelado3 = document.querySelector('p#atack3ResultReiGelado');
let resultReiGelado4 = document.querySelector('p#atack4ResultReiGelado');

let damageReiGeladoInput1 = document.querySelector('input#reiGeladoAtack1')
let damageReiGeladoInput2 = document.querySelector('input#reiGeladoAtack2')
let damageReiGeladoInput3 = document.querySelector('input#reiGeladoAtack3')
let damageReiGeladoInput4 = document.querySelector('input#reiGeladoAtack4')


let damageReiGelado1 = 0;
let damageReiGelado2 = 0;
let damageReiGelado3 = 0;
let damageReiGelado4 = 0;

let damageReiGeladoTotal = 0;
let vidaReiGelado = 100;




/* --------------------------------------- Funções FINN ----------------------------------------------- */
function getDamage1Finn(){
   damageFinn1 =  Number(damageFinnInput1.value)
   resultFinn1.innerHTML = `<p>O primeiro ataque do Finn causou ${damageFinn1} de dano</p>`
   return
}

function getDamage2Finn(){
    damageFinn2 =  Number(damageFinnInput2.value)
    resultFinn2.innerHTML = `<p>O segundo ataque do Finn causou ${damageFinn2} de dano</p>`
    return
}

function getDamage3Finn(){
    damageFinn3 =  Number(damageFinnInput3.value)
    resultFinn3.innerHTML = `<p>O terceiro ataque do Finn causou ${damageFinn3} de dano</p>`

}

function getDamage4Finn(){
    damageFinn4 =  Number(damageFinnInput4.value)
    resultFinn4.innerHTML = `<p>O primeiro ataque do Finn causou ${damageFinn4} de dano</p>`
    return
}   

/* --------------------------------------- Funções Rei Gelado----------------------------------------------- */

function getDamage1ReiGelado(){
    damageReiGelado1 = Number(damageReiGeladoInput1.value)
    resultReiGelado1.innerHTML = `<p>O primeiro ataque do rei gelado causou ${damageReiGelado1} de dano</p>`
}

function getDamage2ReiGelado(){
    damageReiGelado2 = Number(damageReiGeladoInput2.value)
    resultReiGelado2.innerHTML = `<p>O segundo ataque do rei gelado causou ${damageReiGelado2} de dano</p>`
}

function getDamage3ReiGelado(){
    damageReiGelado3 = Number(damageReiGeladoInput3.value)
    resultReiGelado3.innerHTML = `<p>O terceiro ataque do rei gelado causou ${damageReiGelado3} de dano</p>`
}

function getDamage4ReiGelado(){
    damageReiGelado4 = Number(damageReiGeladoInput4.value)
    resultReiGelado4.innerHTML = `<p>O quarto ataque do rei gelado causou ${damageReiGelado4} de dano</p>`
}


function battle(){
    damageFinnTotal = parseInt(damageFinn1 + damageFinn2 + damageFinn3 + damageFinn4);
    damageReiGeladoTotal = parseInt(damageReiGelado1 + damageReiGelado2 + damageReiGelado3 + damageReiGelado4);

    vidaRestanteFinn = vidaFinn - damageReiGeladoTotal;
    vidaRestanteReiGelado = vidaReiGelado - damageFinnTotal;

    console.log(damageFinnTotal)
    console.log(damageReiGeladoTotal)

    if(damageReiGeladoTotal > damageFinnTotal){
        resultFinal.innerHTML = `<p>As magias foram implacáveis, Finn lutou com todas suas forças, mas <b>o rei gelado foi vitorioso.</b> O mago conseguiu dar ${damageReiGeladoTotal} de dano, Deixando Finn com ${vidaRestanteFinn} de vida restante.</p>`
    }else if(damageReiGeladoTotal < damageFinnTotal){
        resultFinal.innerHTML = `<p>Após se esquivar de todas as magias do mago, <b>Finn venceu a luta</b> e deu ${damageFinnTotal} de dano, deixando o Rei Gelado com ${vidaRestanteReiGelado} de vida restante</p>`
    }else if (damageReiGeladoTotal = damageFinnTotal){
        resultFinal.innerHTML = `<p>Apesar de todos os esforços, ninguém foi capaz de ser vitorioso, ficando com exatamente ${(vidaRestanteFinn + vidaRestanteReiGelado)/2} de vida restante cada, portanto terão que resolver suas intrigas em outra oportunidade</p>`
    }else{
        resultFinal.innerHTML = `<p>Dados Inválidos</p>`
    }
}
