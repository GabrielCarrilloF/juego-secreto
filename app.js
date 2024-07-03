let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumerosecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles.');
    }else {
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumerosecreto();
        }else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorDeUsuario').value = '';
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Asertastes el numero, en ${intentos} ${ (intentos === 1) ? 'intento' : 'Intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (numeroDeUsuario>numeroSecreto) {
        asignarTextoElemento('p','El numero es manor');
        intentos++;
        limpiarCaja();
    }else {
        asignarTextoElemento('p','El numero es mayor');
        intentos++;
        limpiarCaja();
    }
}

function condicionesIniciales () {
    asignarTextoElemento('h1','Juego de numero secreto');
    asignarTextoElemento('p',`Indica un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumerosecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();