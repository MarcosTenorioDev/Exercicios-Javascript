const listNumber = [20, 50, 10 ,99, 90,]; //array de números
let biggerNum = 0; //declaração do maior número = 0 para ser usado na função





function searchBiggerNum(){
    for (let i = 0; i < listNumber.length; i++) { //contador para percorrer todo o array
        numberToCheck = listNumber[i]; // número da vez

        if (numberToCheck >= biggerNum){ // if para checar o número de vez a atribuir ao maior número caso seja maior que ele 
            biggerNum = numberToCheck // maior número recebendo o numero da vez
        }
    } 

    console.log (biggerNum)
}

searchBiggerNum()