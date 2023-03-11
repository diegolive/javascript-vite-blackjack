import { resultadoHTML } from "../entorno";

/**
 * Determina el ganador del juego y lo muestra por pantalla
 * @param {Array<Number>} puntosJugadores array con los puntos de cada jugador, el último es el ordenador
 */
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    if (puntosMinimos === puntosComputadora) {
        resultadoHTML.innerText='Nadie gana';
    } else if (puntosMinimos<=21 && (puntosMinimos>puntosComputadora || puntosComputadora>21)) {
        resultadoHTML.innerText='El jugador gana :)';
    } else  {
        resultadoHTML.innerText='El ordenador gana :(';
    }
}
