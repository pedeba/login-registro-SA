const usuarioInput = window.document.getElementById("usuario")
const senhaInput = window.document.getElementById("senha")
const senhaInput2 = window.document.getElementById("senha2")
const mensagem = window.document.getElementById("msgerro")
mensagem.style.color = 'red'
function registro() {
    if (usuarioInput.value == ''|| senhaInput.value =='' || senhaInput2.value ==''){
        mensagem.innerHTML = 'Insira todas as Informações.'
    } else if (senhaInput.value !== senhaInput2.value) {
        mensagem.innerHTML = 'Os campos de senha estão diferentes.'
    } else {
        cadastrar(usuarioInput.value, senhaInput.value)
    }
}

function cadastrar(usuario, senha){
    let novoUser = {usuario: usuario, senha: senha}
    let users = localStorage.getItem("users");
    if (users == null) {
        users = [];
    }else {
        users = JSON.parse(users);
    }
    const repeteUser = users.some((item)=>{
        return usuario == item.usuario
    })
    if(repeteUser){
        mensagem.innerHTML = 'Este nome de usuário já foi registrado.'
    } else {
        users.push(novoUser); 
        localStorage.users = JSON.stringify(users)
        window.location.href = 'loginfeito.html' 
    }    
}