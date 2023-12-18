function sendEmail(){
    var nome = document.getElementById("contatoName").value;
    var email = document.getElementById("contatoMail").value;
    var mensagem = document.getElementById("contatoMensage").value;
    

    var form = document.getElementById("contatoForm");
    var data = new FormData(form);


    if(validarFormulario(nome,email,mensagem)){
        var promise = fetch('php/mail.php', {
            method: 'POST',
            body: data
        });
        document.getElementById("contatoButton").disabled = true;
    }

}

function validarFormulario(nome, email, mensagem) {
    limparFeedbacksErro();

    if (!nome || nome.trim().length < 3) {
        exibirErro('contatoName', 'Nome completo.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        exibirErro('contatoMail', 'Email inválido.');
        return false;
    }

    const palavrasMensagem = mensagem ? mensagem.trim().split(/\s+/) : [];
    if (!mensagem || palavrasMensagem.length < 5) {
        exibirErro('contatoMensage', 'A mensagem deve ser maior.');
        return false;
    }

    console.log("Formulário válido!");

    document.getElementById('contatoButton').classList.add('mailsuccess');
    document.getElementById('contatoButton').innerHTML = "ENVIADO";

    return true;
}

function exibirErro(elementoId, mensagem) {
    document.getElementById(elementoId).classList.add('mailError');
    var feedbackExistente = document.getElementById(`${elementoId}-errorFeedback`);
    
    if (!feedbackExistente) {

        var formulario = document.getElementById("contatoForm");
        var divsParaRemover = formulario.querySelectorAll('div');
        divsParaRemover.forEach(function(div) {
            formulario.removeChild(div);
        });




        var novoElemento = document.createElement('div');
        novoElemento.innerHTML = `<span id='${elementoId}-errorFeedback'>${mensagem}</span>`;
        var elementoAlvo = document.getElementById(elementoId);
        elementoAlvo.parentNode.insertBefore(novoElemento, elementoAlvo);
    }
}

function limparFeedbacksErro() {
    document.getElementById('contatoName').classList.remove('mailError');
    document.getElementById('contatoMail').classList.remove('mailError');
    document.getElementById('contatoMensage').classList.remove('mailError');

    var feedbacks = document.querySelectorAll('[id$="-errorFeedback"]');
    feedbacks.forEach(function (feedback) {
        feedback.parentNode.removeChild(feedback);
    });
}

function closeMenuMobile(){
    document.getElementById("navMobile").innerHTML = ""
    if (document.getElementById('navMobile').classList.contains('menuAnimation')) {
        document.getElementById('navMobile').classList.remove('menuAnimation');
    }
}
function openMenuMobile(local){
    var mobileMenu =`
    <nav id='NavMenuAnimation'>
        <img onclick="closeMenuMobile()" src="imagens/icons/close.svg" alt="Close button">
        <br>
        <div>
            <a href="pages/daniloRamos.html">Professor Danilo Ramos</a>
            <a href="pages/pesquisaIntro.html">Pesquisa</a>
            <a href="pages/artistico.html">Artístico </a>
            <a href="pages/ensinoDeMusicaIntro.html">Ensino de música </a>
            <a href="pages/infraestrutura.html">Infraestrutura </a>    
        </div>
    </nav>        
    `
    var mobileMenu_pages =`
    <nav id='NavMenuAnimation'>
        <img onclick="closeMenuMobile()" src="../imagens/icons/close.svg" alt="Close button">
        <br>
        <div>
            <a href="daniloRamos.html">Professor Danilo Ramos</a>
            <a href="pesquisaIntro.html">Pesquisa</a>
            <a href="artistico.html">Artístico </a>
            <a href="ensinoDeMusicaIntro.html">Ensino de música </a>
            <a href="infraestrutura.html">Infraestrutura </a>    
        </div>
    </nav>        
    `
    if(local === 0){
        document.getElementById("navMobile").innerHTML = mobileMenu
        document.getElementById('navMobile').classList.add('menuAnimation');
    }else{
        document.getElementById("navMobile").innerHTML = mobileMenu_pages
        document.getElementById('navMobile').classList.add('menuAnimation');
    }
}