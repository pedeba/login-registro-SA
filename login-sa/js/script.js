const usuarioInput = window.document.getElementById("usuario")
const senhaInput = window.document.getElementById("senha")
const mensagem = window.document.getElementById("msgerro")
let usuarios = (JSON.parse(localStorage.users))
mensagem.style.color = 'red'

function logar() {
    if (usuarioInput.value == ''|| senhaInput.value ==''){
        mensagem.innerHTML = 'Insira todas as Informações.'
    } else {
        mensagem.innerHTML ='Usuário ou senha inválidos.'
    }
    usuarios.forEach((item)=>{
        if(usuarioInput.value == item.usuario && senhaInput.value == item.senha){
            alert('LOGIN FEITO COM SUCESSO')
            mensagem.innerHTML=''
        }     
    })
}