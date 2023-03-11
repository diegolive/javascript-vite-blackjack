import { acumularPuntos, crearCarta, pedirCarta } from './';

/**
 * Ejecuta un turno de jugagaodr n
 * @param {Number} turno el número de jugador, por defecto 0
 * @returns devuelve los puntos actuales del jugador
 */  
export const turnoJugador = (turno = 0) => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);
    crearCarta(carta, 0);
    return puntosJugador;
} 
