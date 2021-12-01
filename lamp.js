const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function verifyLamp() {
    //indexOf -> metodo em que faz uma farredura em uma string procurando outro trecho de string
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if ( !verifyLamp() ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if ( !verifyLamp() ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
turnOff.addEventListener('dblclick', lampBroken);