window.onload = async function(){

    // para otimizar fazer um unico arquivos PHP para fazer o request das 3 tabelas, e alterar a logica para usar.

    var promiseEquipe  = await fetch("../php/pesquisa/equipe.php",{
        method:"GET"
    });
    equipe = await promiseEquipe.json();

    var promiseOrientacoes = await fetch("../php/pesquisa/orientacoes.php",{
        method:"GET"
    });
    orientacoes = await promiseOrientacoes.json();

    var promisePublicacoes = await fetch("../php/pesquisa/publicacoes.php",{
        method:"GET"
    });
    publicacoes = await promisePublicacoes.json();

    var promiseDocumentos  = await fetch("../php/pesquisa/documentos.php",{
        method:"GET"
    });
    documentos = await promiseDocumentos.json();

   

    activeButton(0)


    var cardContainer =`
        <div class="membros" id='membros'>
        </div>
    `
    document.getElementById("pesquisa__container").innerHTML += cardContainer;
    for (var i=0; i < equipe.length; i++){
        var card = `
            <div class="membro">
                <div>
                    <img class='membro__img' src="../imagens/equipe/${equipe[i].img}.png" alt="${equipe[i].nome}">
                    <br>
                    <span>${equipe[i].periodo}</span>
                </div>
                
                <div>
                    <div>
                        <h2>${equipe[i].nome}</h2>
                        <p>${equipe[i].projeto}</p>
                    </div>
                    <br>
                    <div class="membro__links">
                        <a target="_blank" href="mailto:${equipe[i].email}"><img src="../imagens/icons/cv.svg" alt="">Mail</a>
                        <a target="_blank" href="${equipe[i].curriculo}"><img src="../imagens/icons/mail.svg" alt="">Currículo </a>
                    </div>
                </div>
        `;               
        document.getElementById("membros").innerHTML += card;
    };
    
}


function changePesquisa(categoria){
    document.getElementById("pesquisa__container").innerHTML = "";
    if(categoria == 0){
        activeButton(0)
        var cardContainer =`
        <div class="membros" id='membros'>
        </div>
    `
    document.getElementById("pesquisa__container").innerHTML += cardContainer;
    for (var i=0; i < equipe.length; i++){
        var card = `
            <div class="membro">
                <div>
                    <img class='membro__img' src="../imagens/equipe/${equipe[i].img}.png" alt="${equipe[i].nome}">
                    <br>
                    <span>${equipe[i].periodo}</span>
                </div>
                
                <div>
                    <div>
                        <h2>${equipe[i].nome}</h2>
                        <p>${equipe[i].projeto}</p>
                    </div>
                    <br>
                    <div class="membro__links">
                        <a target="_blank" href="mailto:${equipe[i].email}"><img src="../imagens/icons/cv.svg" alt="">Mail</a>
                        <a target="_blank" href="${equipe[i].curriculo}"><img src="../imagens/icons/mail.svg" alt="">Currículo </a>
                    </div>
                </div>
        `;               
        document.getElementById("membros").innerHTML += card;
    };
    } else if (categoria == 1){
        activeButton(1)
        var cardContainer =`
        <div class="orientacoes" id='orientacoes'>
        </div>
        `
        document.getElementById("pesquisa__container").innerHTML += cardContainer;
        for (var i=0; i < orientacoes.length; i++){
            var card = `
                <div class="orientacao">
                    <h3 class="orientacao__categoria">${orientacoes[i].categoria}</h3>
                    <div class="orientacao__nomeEAno">
                        <h4>Silva, E. G.</h4>
                        <span>2021</span>
                    </div>
                    <p>Preferência e emoção em ambientes de escuta musical mediados pela tecnologia. Tese de doutorado. Universidade Federal do Paraná, PR, Brasil.</p>
                    <a class="orientacao__link" href="">Link</a>
                </div>
            `;               
            document.getElementById("orientacoes").innerHTML += card;
    };

    } else if (categoria == 2){
        activeButton(2)

        var cardContainer =`
        <div class="publicacoes" id='publicacoes'>
        </div>
        `
        document.getElementById("pesquisa__container").innerHTML += cardContainer;
        for (var i=0; i < publicacoes.length; i++){
            var card = `
                <div class="orientacao">
                    <h3 class="orientacao__categoria">${publicacoes[i].categoria}</h3>
                    <div class="orientacao__nomeEAno">
                        <h4>${publicacoes[i].autor}</h4>
                        <span>${publicacoes[i].ano}</span>
                    </div>
                    <p>${publicacoes[i].descricao}</p>
                    <a class="orientacao__link" href="${publicacoes[i].download}" target='_blank'>Link</a>
                </div>
            `;               
            document.getElementById("publicacoes").innerHTML += card;
    };



    } else if (categoria == 3){
        activeButton(3)

        var cardContainer =`
        <div class="documentos" id='documentos'>
        </div>
        `
        document.getElementById("pesquisa__container").innerHTML += cardContainer;
        for (var i=0; i < documentos.length; i++){
            var card = `
                <div class="documento">
                    <h3>${documentos[i].nome}</h3>
                    <a href="${documentos[i].download}">Link</a>
                </div>
            `;               
            document.getElementById("documentos").innerHTML += card;
    };



    }
    


}

function activeButton(botao){
    if(botao ==0){

        var botaoOff = document.getElementById("bnt__orientacoes");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__publicacoes");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__documentos");
        botaoOff.style.color = "var(--whitePiano)";

        var botaoAtivo = document.getElementById("bnt__equipe");
        botaoAtivo.style.color = "var(--accent)";

    } else if(botao == 1){

        var botaoOff = document.getElementById("bnt__equipe");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__publicacoes");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__documentos");
        botaoOff.style.color = "var(--whitePiano)";

        var botaoAtivo = document.getElementById("bnt__orientacoes");
        botaoAtivo.style.color = "var(--accent)";

    } else if(botao == 2){

        
        var botaoOff = document.getElementById("bnt__equipe");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__orientacoes");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__documentos");
        botaoOff.style.color = "var(--whitePiano)";
        
        var botaoAtivo = document.getElementById("bnt__publicacoes");
        botaoAtivo.style.color = "var(--accent)";
    } else if(botao == 3){

        
        var botaoOff = document.getElementById("bnt__equipe");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__orientacoes");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__publicacoes");
        botaoOff.style.color = "var(--whitePiano)";
        
        var botaoAtivo = document.getElementById("bnt__documentos");
        botaoAtivo.style.color = "var(--accent)";
    }
        
}