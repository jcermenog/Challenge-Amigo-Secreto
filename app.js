// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

/* VARIABLES & ARREGLOS*/
let listaAmigos = [];

/* FUNCIONES*/

function asignarTextoElemento(elemento, texto){
    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
    return;  
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === " "){
        asignarTextoElemento('h2','Campo vacio debe de escribir un nombre');
    } else {
        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos);
    }
    return;
}