import { crearDeck } from "./usecases";

// Para guardar la baraja y la puntuación de los jugadores
export let deck = [];
export let puntosJugadores = [];

// Referencias del HTML
export const 
      btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo'),
      divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHTML = document.querySelectorAll('small'),
      resultadoHTML = document.querySelector('footer');

// Inicialización del juego como creo los arrays no lo hago en usecases
export const inicializarJuego = ( numJugadores = 1 ) => {
    deck = crearDeck();
    puntosJugadores=[];
    for (let i=0; i<=numJugadores; i++) {
        puntosJugadores.push(0);
    }
    puntosHTML.forEach( ele => ele.innerText=0 );
    divCartasJugadores.forEach( ele => ele.innerHTML='' );
    resultadoHTML.innerHTML='&nbsp;';
}