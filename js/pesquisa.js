window.onload = async function(){

    // para otimizar fazer um unico arquivos PHP para fazer o request das 3 tabelas, e alterar a logica para usar.
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

    var botaoAtivo = document.getElementById("bnt__orientacoes");
    botaoAtivo.style.color = "var(--accent)";

    for (var i=0; i < orientacoes.length; i++){
            var card = `
        <div class="documento">
        <span class="documento__span categoria">${orientacoes[i].categoria}</span>
        <span class="documento__span">${orientacoes[i].autor}<br>${orientacoes[i].ano}</span>
        <p>${orientacoes[i].descricao}</p>
        <a href="">Link</a>
        </div>
        <div class="hline-pesquisa"></div>
                `;               
        document.getElementById("pesquisa__cards").innerHTML += card;
    };
}


function changeOrientacoes(){
    var botaoOff = document.getElementById("bnt__publicacoes");
    botaoOff.style.color = "var(--whitePiano)";
    var botaoOff = document.getElementById("bnt__documentos");
    botaoOff.style.color = "var(--whitePiano)";
    
    
    var botaoAtivo = document.getElementById("bnt__orientacoes");
    botaoAtivo.style.color = "var(--accent)";
    document.getElementById("pesquisa__cards").innerHTML = "";
    document.getElementById("pesquisa__cards-card").innerHTML = "";
    
    for (var i=0; i < orientacoes.length; i++){
        var card = `
    <div class="documento">
    <span class="documento__span categoria">${orientacoes[i].categoria}</span>
    <span class="documento__span">${orientacoes[i].autor}<br>${orientacoes[i].ano}</span>
    <p>${orientacoes[i].descricao}</p>
    <a href="${orientacoes[i].download}">Link</a>
    </div>
    <div class="hline-pesquisa"></div>
            `;               
    document.getElementById("pesquisa__cards").innerHTML += card;
};

}

function changePublicacoes(){
    var botaoOff = document.getElementById("bnt__orientacoes");
    botaoOff.style.color = "var(--whitePiano)";
    var botaoOff = document.getElementById("bnt__documentos");
    botaoOff.style.color = "var(--whitePiano)";
    
    var botaoAtivo = document.getElementById("bnt__publicacoes");
    botaoAtivo.style.color = "var(--accent)";
    document.getElementById("pesquisa__cards").innerHTML = "";
    document.getElementById("pesquisa__cards-card").innerHTML = "";

    for (var i=0; i < publicacoes.length; i++){
        var card = `
    <div class="documento">
    <span class="documento__span categoria">${publicacoes[i].categoria}</span>
    <span class="documento__span">${publicacoes[i].autor}<br>${publicacoes[i].ano}</span>
    <p>${publicacoes[i].descricao}</p>
    <a href="${publicacoes[i].download}">Link</a>
    </div>
    <div class="hline-pesquisa"></div>
            `;               
    document.getElementById("pesquisa__cards").innerHTML += card;
};
}    

function changeDocumentos(){
    var botaoOff = document.getElementById("bnt__orientacoes");
    botaoOff.style.color = "var(--whitePiano)";
    var botaoOff = document.getElementById("bnt__publicacoes");
    botaoOff.style.color = "var(--whitePiano)";


    var botaoAtivo = document.getElementById("bnt__documentos");
    botaoAtivo.style.color = "var(--accent)";
    document.getElementById("pesquisa__cards").innerHTML = "";
    document.getElementById("pesquisa__cards-card").innerHTML = "";

    for (var i=0; i < documentos.length; i++){
        var card = `
    <div class="documento-card">
    <span class="documento__span-card">${documentos[i].nome}</span>  
    <a href="${documentos[i].download}">Link</a>
    </div>
            `;               
    document.getElementById("pesquisa__cards-card").innerHTML += card;
};
}