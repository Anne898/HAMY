let sound = true;

let Rosa = document.getElementById("AudioRosa");
let Amarillo = document.getElementById("AudioAmarillo");
let Morado = document.getElementById("AudioMorado");
let Rojo = document.getElementById("AudioRojo");

let Azul = document.getElementById("AudioAzul");
let Naranja = document.getElementById("AudioNaranja");
let Verde = document.getElementById("AudioVerde");
let Cafe = document.getElementById("AudioCafe");

let correcto = document.getElementById("AudioCorrecto");
let incorrecto = document.getElementById("AudioIncorrecto");

let opRosa = document.getElementById("AudioOpRosa");



function SonidoOpRosa() {
    if (sound) {
        opRosa.src = "imagenes/opRosa.mp3";
        opRosa.volume = 0.7;
        opRosa.play();
    }

}

function SonidoRosa() {
    if (sound) {
        Rosa.src = "imagenes/Rosa.mp3";
        Rosa.volume = 0.7;
        Rosa.play();
    }

}

function SonidoAmarillo() {
    if (sound) {
        Amarillo.src = "imagenes/Amarillo.mp3";
        Amarillo.volume = 0.7;
        Amarillo.play();
    }

}

function SonidoMorado() {
    if (sound) {
        Morado.src = "imagenes/Morado.mp3";
        Morado.volume = 0.7;
        Morado.play();
    }

}

function SonidoRojo() {
    if (sound) {
        Rojo.src = "imagenes/Rojo.mp3";
        Rojo.volume = 0.7;
        Rojo.play();
    }

}

function SonidoCafe() {
    if (sound) {
        Cafe.src = "imagenes/Cafe.mp3";
        Cafe.volume = 0.7;
        Cafe.play();
    }

}

function SonidoAzul() {
    if (sound) {
        Azul.src = "imagenes/Azul.mp3";
        Azul.volume = 0.7;
        Azul.play();
    }

}

function SonidoNaranja() {
    if (sound) {
        Naranja.src = "imagenes/Naranja.mp3";
        Naranja.volume = 0.7;
        Naranja.play();
    }

}

function SonidoVerde() {
    if (sound) {
        Verde.src = "imagenes/Verde.mp3";
        Verde.volume = 0.7;
        Verde.play();
    }

}

function SonidoCorrecto() {
    if (sound) {
        correcto.src = "imagenes/correcto.mp3";
        correcto.volume = 0.7;
        correcto.play();
    }

}


function SonidoIncorrecto() {
    if (sound) {
        incorrecto.src = "imagenes/incorrecto.mp3";
        incorrecto.volume = 0.7;
        incorrecto.play();
    }

}
