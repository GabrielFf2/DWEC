

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Mira que sigui pedra paper o tisores
function PPT() {
    let ppt = prompt("Tria el que vols jugar", "Pedra,Paper,Tisores");
    ppt = ppt.toUpperCase().trim();
    if (ppt !== "PEDRA" || ppt !== "PAPER" || ppt !== "TISORES") {
        document.getElementById("text").innerHTML =
             ppt ;
    }
}

function pintarIMG(text){
    if (text==="PEDRA"){
        return "./hands/hand0.png"
    }
    if (text==="PAPER"){
        return "./hands/hand5.png"
    }
    if (text==="TISORES"){
        return "./hands/hand2.png"
    }
}

function guanyador(textJugador , textMaquina){
    let winer = "";
    if (textJugador.toUpperCase() === "PEDRA" && textMaquina.toUpperCase() === "PAPER" ){
        winer="EL jugador Ha PERDUT!!!";
        return winer;
    }
    if (textJugador.toUpperCase() === "PEDRA" && textMaquina.toUpperCase() === "TISORES" ){
        winer="EL jugador Ha GUANYAT!!!";
        return winer;
    }
    if (textJugador.toUpperCase() === "PEDRA" && textMaquina.toUpperCase() === "PEDRA" ){
        winer="----EMPAT----";
        return winer;
    }

    if (textJugador.toUpperCase() === "PAPER" && textMaquina.toUpperCase() === "TISORES" ){
        winer="EL jugador Ha PERDUT!!!";
        return winer;
    }
    if (textJugador.toUpperCase() === "PAPER" && textMaquina.toUpperCase() === "PEDRA" ){
        winer="EL jugador Ha GUANYAT!!!";
        return winer;
    }
    if (textJugador.toUpperCase() === "PAPER" && textMaquina.toUpperCase() === "PAPER" ){
        winer="----EMPAT----";
        return winer;
    }

    if (textJugador.toUpperCase() === "TISORES" && textMaquina.toUpperCase() === "PEDRA" ){
        winer="EL jugador Ha PERDUT!!!";
        return winer;
    }
    if (textJugador.toUpperCase() === "TISORES" && textMaquina.toUpperCase() === "PAPER" ){
        winer="EL jugador Ha GUANYAT!!!";
        return winer;
    }
    if (textJugador.toUpperCase() === "TISORES" && textMaquina.toUpperCase() === "return;" ){
        winer="----EMPAT----";
        return winer;
    }
}

function play (){



    let wins = 0;
    let lose = 0;

    let jugar = document.createElement("button");
    jugar.id ="jugar";
    jugar.textContent="Play";
    jugar.addEventListener('click',PPT);
    document.querySelector("#app").appendChild(jugar);


    let text = document.createElement("h1");
    text.id="text";
    document.querySelector("#app").appendChild(text );


    let textPlay = document.createElement("input");
    textPlay.id ="textPlay";
    textPlay.textContent="";
    document.querySelector("#app").appendChild(textPlay);
    textPlay.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            text.textContent = textPlay.textContent;
        }
    });

    let opcions = randomInt(0,2);
    const maquinaOptions = ["PEDRA","PAPER","TISORES"];

    let textMaquina = document.createElement("h1");
    textMaquina.id="textMaquina";
    textMaquina.textContent = maquinaOptions[opcions];
    document.querySelector("#app").appendChild(textMaquina);

    let textWinner = guanyador(text.textContent , textMaquina.textContent);
    let winner = document.createElement("h1");
    winner.id = "textWinner";
    winner.textContent = textWinner;
    document.querySelector("#app").appendChild(winner);

    if (textWinner==="EL jugador Ha GUANYAT!!!"){
        wins++;
    }
    if (textWinner==="EL jugador Ha PERDUT!!!"){
        lose++;
    }


    let imgPlayer = document.createElement("img");
    imgPlayer.id="hand1";
    imgPlayer.style = "width:300px";
    imgPlayer.style = "height:300px";
    imgPlayer.src = "./hands/hand0.png";
    imgPlayer.addEventListener("mouseover",function(){
        imgPlayer.src = "./hands/hand5.png";
    })
    imgPlayer.addEventListener("mouseout",function(){
        imgPlayer.src = pintarIMG(text.textContent);
    })
    document.querySelector("#app").appendChild(imgPlayer);


    let imgPC = document.createElement("img");
    imgPC.id="hand2";
    imgPC.style = "width:300px";
    imgPC.style = "height:300px";
    imgPC.src = "./hands/hand0.png";
    imgPC.addEventListener("mouseover",function(){
        imgPC.src = "./hands/hand5.png";
    })
    imgPC.addEventListener("mouseout",function(){
        imgPC.src = pintarIMG(textMaquina.textContent);
    })
    document.querySelector("#app").appendChild(imgPC);



    let myWindow;

    const ajuda = document.createElement('button');
    ajuda.textContent ="Ajuda";
    ajuda.addEventListener('click',function (){
        myWindow = window.open("./ajuda.html")
    });
    const tancaAjuda = document.createElement('BUTTON');
    tancaAjuda.textContent = 'Close Window';
    tancaAjuda.addEventListener('click',function(){
        myWindow.close();
    });
    document.querySelector("#app").appendChild(tancaAjuda);

    document.querySelector("#app").appendChild(ajuda);

    const Politecnic = document.createElement('BUTTON');
    Politecnic.textContent = 'Politecnic Llevant';
    Politecnic.addEventListener('click',function(){
        window.location.href = "https://politecnicllevant.cat";
    });
    document.querySelector("#app").appendChild(Politecnic);


    const reiniciar = document.createElement('BUTTON');
    reiniciar.textContent = 'Reiniciar';
    reiniciar.addEventListener('click',function(){
        let opcio = randomInt(0,2);
        textMaquina.id="text";
        textMaquina.textContent = maquinaOptions[opcio];

    });
    document.querySelector("#app").appendChild(reiniciar);
    let marcadorWins = document.createElement("p");
    marcadorWins.textContent= wins ;
    document.querySelector("#app").appendChild(marcadorWins);
    let marcadorLose = document.createElement("p");
    marcadorLose.textContent= lose ;
    document.querySelector("#app").appendChild(marcadorLose);


}


function init(){
    play();
}