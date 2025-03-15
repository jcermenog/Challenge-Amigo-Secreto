// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
/* Programador de Challenge: Julio Cermeño*/

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
        /* al momento que agregamos un amigo al arreglo llamamos la funcion que agrega los elementos <li>
           para que la insersion pueda ser visible al usuario*/
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

/* funcion para sortear amigo secreto */
function sortearAmigo(){
    /* validamos que el arreglo no este vacio*/
    if (arregloAmigos.length > 0) {
        let posicionAuxiliar = 0;
        posicionAuxiliar = arregloAmigos.length;
        /* generamos la posicion del arreglo para seleccionar a nuestro amigo secreto*/
        let amigoSorteadoSecreto = Math.floor(Math.random()*posicionAuxiliar); 
        console.log(amigoSorteadoSecreto);
        /* iniciamos a mostrar el resultado de la seleccion de amigo secreto*/
        let seleccionAmigoSecreto = document.querySelector('#resultado');
        /* seleccionamos el contenedor de la lista de amigos y lo ocultamos */
        let listaAmigosPantalla = document.querySelector('#listaAmigos');
        listaAmigosPantalla.style.display = "none"; 
         /* limpiar lista*/
         seleccionAmigoSecreto.innerHTML = "";
        /* crea el elemento <li>*/
        let seleccionAmigo = document.createElement("li");
        /* asigno el valor a el elemto <li>*/
        seleccionAmigo.textContent = arregloAmigos[amigoSorteadoSecreto];
        /* insertamos el elemento <li> a la lista*/
        seleccionAmigoSecreto.appendChild(seleccionAmigo);
        asignarTextoElemento('h2','tu amigo secreto es: ')
    } else {
        asignarTextoElemento('h2','aun no a ingresado amigos para poder sortear')
    }
}