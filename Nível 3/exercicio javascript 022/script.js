/*  Retornar array em ordem crescente
let numeros = [40,12,90,100,1,36]


numeros.sort(function(a,b){
  if(a > b) return 1
  if(a < b) return -1
})

console.log(numeros)



let numeros = [1,2,3,4,5,6,7,8,9,10]  /* Retornar array apenas numeros pares ou impares */
function numerosPares(numero){
  let novoArray = [
    ...numero
  ] 
  
  let array = novoArray.filter((valor) => {
    return novoArray.indexOf(valor) % 2 === 1 
  })
  return array
}
console.log(numerosPares(numeros))