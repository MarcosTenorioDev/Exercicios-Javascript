const precos = [
    "Crédito",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados" 
];

/* 
const precosFiltro = precos.filter(function(preco){
    console.log(preco)
    if (preco === "R$ 400"){
        return true
    }else{
        return false
    }
});
 */

//Código limpo da função acima que filtra todos os itens que contém "R$";
const precosFiltro = precos.filter(preco => preco.includes("R$"));

//Código que transforma os itens que contém R$ em números e retira a string R$
const precoNumeros = precosFiltro.map(function(preco){
    return Number(preco.replace("R$ ", ""));

    //output = [400, 300, 400]
});

//Código para acumular todos os números do array preçoNúmeros
const total = precoNumeros.reduce( function(acc, atual){
    console.log(acc, atual)
    return acc + atual
});

console.log(total)
