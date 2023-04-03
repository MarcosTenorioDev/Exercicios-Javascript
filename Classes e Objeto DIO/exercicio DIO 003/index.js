class pessoa{
    nome;
    altura;
    peso;

    constructor(nome, altura, peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc(){
        return this.peso/(this.altura * this.altura);

    }

    classificarImc(){
        const imc = this.calcularImc()
        console.log(`O IMC de ${this.nome} é ${imc}`);


        if(imc < 18.5){
            console.log ('está abaixo do peso')
        }else if (imc >= 18.5 && imc <25){
            console.log ('peso normal')
        }else if (imc >= 25 && imc < 30){
            console.log ('acima do peso')
        }else if (imc >= 30 && imc < 40){
            console.log ('obeso')
        }else{
            console.log ('obesidade grave')
        }
    }
}

const jose = new pessoa('José', 1.70, 75);

jose.classificarImc();