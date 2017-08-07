var mapa = [
    "******************",
    "*_________*______*",
    "*_*****_____******",
    "*______***__*__*_*",
    "***_*____*____**_*",
    "*___*____**__*___*",
    "*_********__**_*_*",
    "*____*______*__*_*",
    "*_**_*__*****_**_*",
    "*o*__*________**W*",
    "******************"];

var contador = 0;
var tabla = document.createElement("table");
tabla.border = "1";
var tablero = document.getElementById("tablero");

for (var i = 0; i < mapa.length; i++) {
    var filas = document.createElement("tr");
    for (var j = 0; j < mapa[i].length; j++) {
        var celda = document.createElement("td");
        if (mapa[i][j] == "*") {
            celda.setAttribute('class', 'negro');
        }
        else if (mapa[i][j] == "o") {
            celda.setAttribute("class", "start");
        }
        else if (mapa[i][j] == "W") {
            celda.setAttribute("class", "finish");
        }
        else {
            celda.setAttribute('class', 'white');
        }
        filas.appendChild(celda);
    }
    tabla.appendChild(filas);
}
tablero.appendChild(tabla);

var dibujo = document.getElementById("dibujo");
var img = document.createElement("img");

function moverRight() {
    dibujo.innerHTML = "";
    if (contador == 0) {
        img.src = "images/right.jpg";
       dibujo.appendChild(img);      
        contador++;
    }
    else if (contador == 1) {
        img.src = "images/down.jpg";
        dibujo.appendChild(img);
        contador++;
    }
    else if (contador == 2) {
        img.src = "images/left.jpg";
        dibujo.appendChild(img);
        contador++;
    }
    else {
        img.src = "images/up.jpg";
        dibujo.appendChild(img);
        contador = 0;
    }
}

function moverLeft() {
    dibujo.innerHTML = "";
    if (contador == 0) {
        img.src = "images/left.jpg";
        dibujo.appendChild(img);
        contador++;
    }
    else if (contador == 1) {
        img.src = "images/down.jpg";
        dibujo.appendChild(img);
        contador++;
    }
    else if (contador == 2) {
        img.src = "images/right.jpg";
        dibujo.appendChild(img);
        contador++;
    }
    else {
        img.src = "images/up.jpg";
        dibujo.appendChild(img);
        contador = 0;
    }
}

document.getElementById("btnRight").addEventListener("click", function () {
    moverRight();
});

document.getElementById("btnLeft").addEventListener("click", function () {
    moverLeft();
});

contadorClick = 0;
var btnForward = document.getElementById("btnForward");
btnForward.onclick = function () {

    var celdas = document.getElementsByTagName("td");
    console.log(celdas);
    var position = 0;

    for (var i = 0; i < celdas.length; i++) {
        if (celdas[i].className == "start") {
            imgn = document.createElement("img");
            imgn.src = "images/up.jpg";
            //celdas[i].innerHTML = imgn;
           celdas[i].appendChild(imgn);

        }
    }

}