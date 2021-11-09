function play(obj){
    var humanop = document.getElementById("human");
    var computerop = document.getElementById("computer");
    var result = document.getElementById("result");
    var res;
    ob = ["piedra","papel","tijera"];
    rand = Math.floor(Math.random()*ob.length);

    var human = ob[obj];
    var computer = ob[rand];

    humanop.innerHTML = human;
    computerop.innerHTML = computer;

    if(human == computer){
        res = "   Empate"
        result.innerHTML = res;
    }else if(human == "piedra" && computer == "tijera"){
        res = "   Ganaste";
        result.innerHTML = res;
    }else if(human == "piedra" && computer == "papel"){
        res = "   Perdiste";
        result.innerHTML = res;
    }else if(human == "papel" && computer == "piedra"){
        res = "   Ganaste";
        result.innerHTML = res;
    }else if(human == "papel" && computer == "tijera"){
        res = "   Perdiste";
        result.innerHTML = res;
    }else if(human == "tijera" && computer == "papel"){
        res = "   Ganaste";
        result.innerHTML = res;
    }else if(human == "tijera" && computer == "piedra"){
        res = "   Ganaste";
        result.innerHTML = res;
    }
}