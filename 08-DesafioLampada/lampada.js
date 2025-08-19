var lamp = window.document.getElementById("lampada")

function estaQuebrada(){
    return lamp.src.indexOf("quebrada") > -1
}

function Ligar(){
    if(!estaQuebrada()){ //!não está quebrada
    lamp.src = "ligada.svg"}
}

function Desligar(){
    if(!estaQuebrada()){ //!não está quebrada
    lamp.src = "desligada.svg"}
}

lamp.addEventListener("click", Quebrar)
function Quebrar(){
    lamp.src = "quebrada.svg"
}