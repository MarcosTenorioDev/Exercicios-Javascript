class carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    
    calcularGastoDePercurso(distanciaPercurso, precoCombustivel) {
        return distanciaPercurso * this.gastoMedioPorKm * precoCombustivel
    }
}

const fiat = new carro('fiat', 'vermelho', 1/12)
const astra = new carro('astra', 'preto', 1/9)

console.log(astra.calcularGastoDePercurso(70, 5)) 