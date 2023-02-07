let result = document.querySelector("p#result")
let agora = new Date

function action(){
    result.innerHTML = `<p>O dados retirados do sistema foram: <mark>${agora}</ </p>`
}