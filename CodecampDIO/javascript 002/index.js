/* Chegando no Vale, ao lado do rio Jacará-Mirim, a natureza se mostra exuberante. Porém, 
é necessário verificar as árvores da região estão saudáveis ou necessitando de cuidados. 
Para isso, durante nossa jornada até o vale, utilizamos um dispositivo de ultrassom desenvolvido 
por uma das CleanTechs parceiras, a Cleanduino (especializada em projetos com Arduino e JavaScript, 
usando o Framework Johnny-Five). Através desse dispositivo coletamos uma lista de amostras, 
onde cada registro tem o percentual de saúde da árvore avaliada.

Crie um código que, para cada item dessa lista, verifique se a amostra está com um nível: 
Bom, Aceitável ou Inaceitável. Para cada nível, imprima a ação que deve ser realizada 
considerando as seguintes regras:

Bom (mais de 75% de saúde na amostra)
Imprima "Descartar da lista"
Aceitável (mais de 50% e menos de 75%)
Imprima "Manter sob observação"
Inaceitável (menos de 50%)
Imprima "Isolar e iniciar protocolo de cuidados"
Lembrando que todas as amostras são de exatamente 100g e as listas terão tamanhos variados. */


let amostra = "10, 45, 98, 70, 50".split(',')

//TODO: Print no console, para cada índice da lista, os parâmetros
//se a amostra está bom, aceitável ou inaceitável


function returnResult(){
    for (i = 0; i < amostra.length; i++){
        checkHealth(amostra[i])
    }
  }
    
    function checkHealth(amostra){
    if(amostra >= 75) {
    console.log(`Descartar da lista`);
    }else if (amostra >= 50 && amostra < 75){
    console.log(`Manter sob observação`);
    }else{
    console.log(`Isolar e iniciar protocolo de cuidados`);
    }
 }
 
 returnResult();
