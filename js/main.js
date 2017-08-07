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

var arrayCelda = new Array(mapa.length);
for(var i=0; i< arrayCelda.length; i++){
    arrayCelda[i] = new Array(mapa[0].length);
}
console.log(arrayCelda);

for (var i = 0; i < mapa.length; i++) {
    var filas = document.createElement("tr");
    for (var j = 0; j < mapa[i].length; j++) {
        var celda = document.createElement("td");
        if (mapa[i][j] == "*") {
            celda.setAttribute('class', 'negro');
        }
        else if (mapa[i][j] == "o") {
            celda.setAttribute("class", "start");
            var img =document.createElement("img")
            img.src = "images/up.jpg";
            celda.appendChild(img);
            objtCelda = {
                td:celda,
                x:i,
                y:j
            }

        }
        else if (mapa[i][j] == "W") {
            celda.setAttribute("class", "finish");
        }
        else {
            celda.setAttribute('class', 'white');
        }
        filas.appendChild(celda);
        arrayCelda[i][j] = celda;
    }
    tabla.appendChild(filas);
}
tablero.appendChild(tabla);


var dibujo = document.getElementById("dibujo");
var img = document.createElement("img");

function moverRight() {
    dibujo.innerHTML = "";
    if (contador == 0) {
        objtCelda.td.removeChild(objtCelda.td.firstChild);
        img.src = "images/right.jpg";
        objtCelda.td.appendChild(img);      
        contador++;
    }
    else if (contador == 1) {
        objtCelda.td.removeChild(objtCelda.td.firstChild);
        img.src = "images/down.jpg";
        objtCelda.td.appendChild(img);
        contador++;
    }
    else if (contador == 2) {
        objtCelda.td.removeChild(objtCelda.td.firstChild);
        img.src = "images/left.jpg";
        objtCelda.td.appendChild(img);
        contador++;
    }
    else {
        objtCelda.td.removeChild(objtCelda.td.firstChild);
        img.src = "images/up.jpg";
        objtCelda.td.appendChild(img);
        contador = 0;
    }
}

function moverLeft() {
    dibujo.innerHTML = "";
    if (contador == 0) {
        objtCelda.td.removeChild(objtCelda.td.firstChild);
        img.src = "images/left.jpg";
        objtCelda.td.appendChild(img);
        contador++;
    }
    else if (contador == 1) {
        objtCelda.td.removeChild(objtCelda.td.firstChild);
        img.src = "images/down.jpg";
        objtCelda.td.appendChild(img);
        contador++;
    }
    else if (contador == 2) {
        objtCelda.td.removeChild(objtCelda.td.firstChild);
        img.src = "images/right.jpg";
        objtCelda.td.appendChild(img);
        contador++;
    }
    else {
        objtCelda.td.removeChild(objtCelda.td.firstChild);
        img.src = "images/up.jpg";
        objtCelda.td.appendChild(img);
        contador = 0;
    }
}

var btnRight =document.getElementById("btnRight");
btnRight.onclick = function(){
    moverRight();
}

document.getElementById("btnLeft").addEventListener("click", function () {
    moverLeft();
});



contadorClick = 0;
var btnForward = document.getElementById("btnForward");
btnForward.onclick = function () {
    if(contador ==0){
        if(mapa[objtCelda.x-1][objtCelda.y] == "_"){
            objtCelda.td.removeChild(objtCelda.td.firstChild);
            objtCelda.td = arrayCelda[objtCelda.x-1][objtCelda.y];
            objtCelda.x = objtCelda.x-1;
            img.src = "images/up.jpg";
            objtCelda.td.appendChild(img);
        }
    }
    if(contador == 1){
         if(mapa[objtCelda.x][objtCelda.y+1] == "_"){
            objtCelda.td.removeChild(objtCelda.td.firstChild);
            objtCelda.td = arrayCelda[objtCelda.x][objtCelda.y+1];
            objtCelda.y = objtCelda.y+1;
            img.src = "images/right.jpg";
            objtCelda.td.appendChild(img);
        }
    }
    if(contador == 2){
         if(mapa[objtCelda.x+1][objtCelda.y] == "_"){
            objtCelda.td.removeChild(objtCelda.td.firstChild);
            objtCelda.td = arrayCelda[objtCelda.x+1][objtCelda.y];
            objtCelda.x = objtCelda.x+1;
            img.src = "images/down.jpg";
            objtCelda.td.appendChild(img);
        }
    }
     if(contador == 3){
         if(mapa[objtCelda.x][objtCelda.y-1] == "_"){
            objtCelda.td.removeChild(objtCelda.td.firstChild);
            objtCelda.td = arrayCelda[objtCelda.x][objtCelda.y-1];
            objtCelda.y = objtCelda.y-1;
            img.src = "images/left.jpg";
            objtCelda.td.appendChild(img);
        }
    }

}