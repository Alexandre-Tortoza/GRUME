<?php
// Verifique se o usuário está autenticado
session_start();
if (!isset($_SESSION["autenticado"]) || $_SESSION["autenticado"] !== true) {
    // Se não estiver autenticado, redirecione para a página de login
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Protegida</title>
    <link rel="stylesheet" href="../../css/_priv/priv.css">
</head>
<body >
    <div class="adminMenu">
            <button onclick="changeOption(0)">Equipe</button>
            <button onclick="changeOption(1)">Orientações concluidas</button>
            <button onclick="changeOption(2)">Publicações</button>
            <button onclick="changeOption(3)">Documentos Uteis</button>
            <button onclick="changeOption(4)">Disciplina</button>
            <a href="logout.php">Sair</a>
    </div>
    <div class="adminContainer" id="container"></div>
</body>
</html>

<script>
window.onload = async function(){
    changeOption(0)
}
function changeOption(opcao){    

    if(opcao==0){
        var container = document.getElementById("container")
        container.innerHTML=""
        var conteudo = `
        <h1>Equipe</h1>
        <form id="formEquipe">
            <input type="text" placeholder="Nome">
            <textarea name="" id="" cols="30" rows="5" placeholder="Projeto"></textarea>
            <input type="text" placeholder="Periodo">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Currículo">
            <input type="file" name="imagem" id="imagemInput" accept="image/*">
            <button onclick="sendEquipe()">Salvar</button>
        </form>
        `
        container.innerHTML=conteudo
    }else if(opcao == 1){
        var container = document.getElementById("container")
        container.innerHTML=""
        var conteudo = `
        <h1>Orientações concluidas</h1>

        <form id="formOrientacoes">
            <input type="text" placeholder="Categoria">
            <input type="text" placeholder="Autor">
            <input type="text" placeholder="Ano">
            <textarea name="" id="" cols="30" rows="5" placeholder="Descrição"></textarea>
            <input type="text" placeholder="Link">
            <button onclick="sendOrientacao()">Salvar</button>
        </form>
        `
        container.innerHTML=conteudo
    }else if(opcao == 2){
        var container = document.getElementById("container")
        container.innerHTML=""
        var conteudo = `
        <h1>publicações</h1>
        <form id="formPublicacao">
            <input type="text" placeholder="Categoria">
            <input type="text" placeholder="Autor">
            <input type="text" placeholder="Ano">
            <textarea name="" id="" cols="30" rows="5" placeholder="Descrição"></textarea>
            <input type="text" placeholder="Link">
            <button onclick="sendPublicacao()">Salvar</button>
        </form>
        `
        container.innerHTML=conteudo
    }else if(opcao == 3){
        var container = document.getElementById("container")
        container.innerHTML=""
        var conteudo = `
        <h1>Documentos Úteis</h1>
        <form id="formDocumentos">
            <input type="text" placeholder="Nome">
            <input type="file" name="doc" id="docInput">
            <button onclick="sendDocumentos()">Salvar</button>
        </form>
        `
        container.innerHTML=conteudo
    }else if(opcao == 4){
        var container = document.getElementById("container")
        container.innerHTML=""
        var conteudo = `
        <h1>Disciplina</h1>
        <form id="formDisciplina">
            <input type="text" placeholder="Nome">
            <input type="file" name="doc" id="docInput">
            <button onclick="sendDisciplina()">Salvar</button>
        </form>
        `
        container.innerHTML=conteudo
    }

}


function sendData(categoria){

}
if(opcao==0){








    
    }else if(opcao == 1){
    }else if(opcao == 2){
    }else if(opcao == 3){
    }else if(opcao == 4){
    }


</script>
