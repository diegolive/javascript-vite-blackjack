import _ from 'underscore';

/**
 * Crea una nueva baraja aleatoria
 * @returns {Array<String>} Devuelve un nuevo deck de cartas barajado 
 */
export  const crearDeck = () => {

    const palos = ['C','D','H','S'],
          figuras = ['J','Q','K','A'];

    // if (!palos || palos.length===0) throw new Error('El argumento palos es obigatorio como un array de strings');
    // if (!figuras || figuras.length===0) throw new Error('El argumento figuras es obigatorio como un array de strings');

    const deck = [];
    for (let i=2; i<=10; i++) {
        for (let palo of palos) {
            deck.push( i + palo );
        }
    }
    for (let figura of figuras) {
        for (let palo of palos) {
            deck.push( figura + palo );
        }
    }
    return _.shuffle(deck);
}

export default crearDeck;
