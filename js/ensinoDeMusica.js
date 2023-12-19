window.onload = async function(){


    activeButton(0)
    changeEnsino(0)

    
}


function changeEnsino(categoria){

    if (categoria == 0){
        activeButton(0) 
        document.getElementById("ensino__container").innerHTML = ""
        var container = `
            <h2> Arquivos da Disciplina </h2>
        `
        document.getElementById("ensino__container").innerHTML += container;

    } else if (categoria == 1){
        activeButton(1)
        document.getElementById("ensino__container").innerHTML = ""

        var container = `
            <h2> Videos educacionais </h2>
        `
        document.getElementById("ensino__container").innerHTML += container;
    } else if(categoria ==2){
        activeButton(2)
        document.getElementById("ensino__container").innerHTML = ""

        var container = `
            <h2> Videos de Curiosidades </h2>
        `
        document.getElementById("ensino__container").innerHTML += container;
    }

}

function activeButton(botao){
    if(botao ==0){

        var botaoOff = document.getElementById("bnt__videos");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__curiosidades");
        botaoOff.style.color = "var(--whitePiano)";


        var botaoAtivo = document.getElementById("bnt__disciplina");
        botaoAtivo.style.color = "var(--accent)";

    } else if(botao == 1){

        var botaoOff = document.getElementById("bnt__disciplina");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__curiosidades");
        botaoOff.style.color = "var(--whitePiano)";


        var botaoAtivo = document.getElementById("bnt__videos");
        botaoAtivo.style.color = "var(--accent)";

    } else if(botao == 2){

        
        var botaoOff = document.getElementById("bnt__disciplina");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__videos");
        botaoOff.style.color = "var(--whitePiano)";

        
        var botaoAtivo = document.getElementById("bnt__curiosidades");
        botaoAtivo.style.color = "var(--accent)";
    }
        
}