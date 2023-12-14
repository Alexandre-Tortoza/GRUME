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
    // Verificar se o campo Nome é definido e tem mais que 3 letras
    if (!nome || nome.trim().length < 3) {
        console.log("Nome deve ser fornecido e ter mais que 3 letras.");
        return false;
    }

    // Verificar se o campo Email é definido e é um email válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        console.log("Email inválido.");
        return false;
    }

    // Verificar se o campo Mensagem é definido e tem mais que 10 palavras
    const palavrasMensagem = mensagem ? mensagem.trim().split(/\s+/) : [];
    if (!mensagem || palavrasMensagem.length < 5) {
        console.log("A mensagem deve ser fornecida deve ser maior.");
        return false;
    }

    // Se todas as verificações passarem, o formulário é válido
    console.log("Formulário válido!");
    return true;
}


