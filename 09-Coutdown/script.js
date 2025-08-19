const dia = document.querySelector('#dia');
const hora = document.querySelector('#hora');
const minuto = document.querySelector('#minuto');
const segundo = document.querySelector('#segundo');

const lancamento = "31 December 2025";

function countDown(){
    const datalanc = new Date(lancamento);
    const hoje = new Date();

    const segTotal = (datalanc - hoje)/1000;
    
    const finalDia = Math.floor(segTotal / 60 / 60 / 24);
    const finalHora = Math.floor((segTotal / 60 / 60) % 24);
    const finalMinuto = Math.floor((segTotal / 60) % 60);
    const finalSegundo = Math.floor(segTotal % 60);

    dia.innerHTML = finalDia;
    hora.innerHTML = formatoTempo(finalHora);
    minuto.innerHTML = formatoTempo(finalMinuto);
    segundo.innerHTML = formatoTempo(finalSegundo);
}

function formatoTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);