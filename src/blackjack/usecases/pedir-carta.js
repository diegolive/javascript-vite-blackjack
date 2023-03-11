import { deck } from "../entorno";

/**
 * Devuelve la siguiente carta de la baraja
 * @returns {String} Devuelve un string
 */
export const pedirCarta = () => {
    if (!deck || deck.length===0) {
        throw 'No quedan cartas en la baraja';
    }
    return deck.pop();
}
