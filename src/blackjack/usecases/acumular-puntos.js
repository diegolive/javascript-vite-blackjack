import { valorCarta } from ".";
import { puntosHTML, puntosJugadores } from "../entorno";

/**
 * Acumula los puntos de la carta actual al jugador actual
 * @param {String} carta  la última carta que ha pedido el jugador
 * @param {Number} turno el jugardor actual
 * @returns {Number} devuelve el número de puntos del jugador actual
*/
export const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
    puntosHTML[turno].innerText=puntosJugadores[turno]; 
    return  puntosJugadores[turno];
}
