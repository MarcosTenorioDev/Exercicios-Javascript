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

/* --------------------------------------- REI GELADO VARIÁVEIS ----------------------------------------------- */


function getDamage1Finn(){
   let damageFinn1 =  Number(damageFinnInput1.value)
   resultFinn1.innerHTML = `<p>O primeiro ataque do Finn causou ${damageFinn1} de dano</p>`
}

function getDamage2Finn(){
    let damageFinn2 =  Number(damageFinnInput2.value)
    resultFinn2.innerHTML = `<p>O primeiro ataque do Finn causou ${damageFinn2} de dano</p>`
}

function getDamage3Finn(){
    let damageFinn3 =  Number(damageFinnInput3.value)
    resultFinn3.innerHTML = `<p>O primeiro ataque do Finn causou ${damageFinn3} de dano</p>`
}

function getDamage4Finn(){
    let damageFinn4 =  Number(damageFinnInput4.value)
    resultFinn4.innerHTML = `<p>O primeiro ataque do Finn causou ${damageFinn4} de dano</p>`
}
   
