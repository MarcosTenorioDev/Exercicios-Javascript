class pessoa{
    nome;
    idade;
    sexo;

    constructor(nome, idade, sexo){  //usado para criar uma estrutura base para a criação da pessoa - toda pessoa criada que não receber parametros, receberá do constructor.
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }


    descreverPessoa() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} anos e meu sexo é ${this.sexo}`)
    }
}

function compararPessoas(p1, p2){  //usando variáveis para a utilização da função
    if(p1.idade > p2.idade){  //usando os parametros do objeto para fazer a comparação
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const vitor = new pessoa('Vitor tenorio', 22, 'Masculino');
const marcos = new pessoa('Marcos tenorio', 25, 'Masculino');

compararPessoas(vitor, marcos);
