//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}

function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
     
    if(usuario == 'carlos' && senha== '123456'){
        window.location = "index.html"; 
        logado = 1;
    }
      
    if( logado == 0 ) {
        alert(" Acesso Negado , Dados Incorretos!!");
    }
}


//Ativar alert no botão cadastrar
 function cadastro (){
    alert("Cadastrado com Sucesso!");
    window.location.href="index.html "

 }