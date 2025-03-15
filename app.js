// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

/* VARIABLES & ARREGLOS*/
let arregloAmigos = [];

/* FUNCIONES*/

/* funcion para editar mensajes al momento de una accion determinada*/
function asignarTextoElemento(elemento, texto){
    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
    return;  
}

/* captura de nombres desde el container y validacion de elementos*/
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    /* validacion de campo que recibe nombre no sea vacio*/
    if (nombreAmigo === ""){
        asignarTextoElemento('h2','Campo vacio debe de escribir un nombre');
    /* agrega al arreglo el nombre del amigo secreto y limpia el container*/    
    } else {
        arregloAmigos.push(nombreAmigo);
        nombreAmigo = document.getElementById('amigo').value ="";
        console.log(arregloAmigos);
        listaAmigosDisplay();
    }
    return;
}

/* elemento lista para amigos*/

function listaAmigosDisplay (){
    /* seleccionamos elemento lista*/
    let listaAmigosPantalla = document.querySelector('#listaAmigos');
    /* limpiar lista*/
    listaAmigosPantalla.innerHTML = "";
    /* definimos ciclo for para recorrer el arreglo e ir agregando los nombres a la lista*/
    for(let i=0; i < arregloAmigos.length; i++ ){
        /* crea el elemento <li>*/
        let ingresoAmigo = document.createElement("li");
        /* asigno el valor a el elemto <li>*/
        ingresoAmigo.textContent = arregloAmigos[i];
        /* insertamos el elemento <li> a la lista*/
        listaAmigosPantalla.appendChild(ingresoAmigo);

    }
    
    return;
}