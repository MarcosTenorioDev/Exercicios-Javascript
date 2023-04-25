const cep = document.getElementById('cep');
const logradouro = document.getElementById('logradouro');
const bairro = document.getElementById('bairro');
const localidade = document.getElementById('localidade');
const uf = document.getElementById('uf');


cep.addEventListener("blur", (e) =>{
    let searchCep = cep.value.replace("-", "")
   const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
     }
    fetch(`https://viacep.com.br/ws/${searchCep}/json/`, options)
    .then((data) => {data.json()
        .then(data => showData(data))
    })
    .catch()
})


const showData = (result) => {
    for (const campo in result){
        if(document.getElementById(campo)){
            document.getElementById(campo).value = result[campo];
        }   
    }

}

