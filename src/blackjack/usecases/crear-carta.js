import { divCartasJugadores } from "../entorno";

/**
 * Crea una nueva carta visualmente
 * @param {String} carta la carta a visualizar
 * @param {Number} turno  el jugador actual
 */
export const crearCarta = ( carta, turno ) => {
    if (!carta) throw new Error('El parámetro carta es obligatorio');
    const imgCarta = document.createElement('img');
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}