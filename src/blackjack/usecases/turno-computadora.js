import { puntosJugadores } from "../entorno";
import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from "./";
/**
 * Turno de la computadora
 */
export const turnoComputadora = () => {
    let puntosMinimos = puntosJugadores[0];
    let numJugadores = puntosJugadores.length - 1;
    let puntosComputadora = 0;
    if ( puntosMinimos > 21 ) puntosMinimos = 0;
    do {
        const carta = pedirCarta();
        puntosComputadora = acumularPuntos(carta, numJugadores);
        crearCarta(carta, numJugadores);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)) ;
    determinarGanador(puntosJugadores);
}