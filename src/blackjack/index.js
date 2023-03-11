import _ from 'underscore';
// import crearDeck from './usecases/crear-deck';
// import { crearDeck } from './usecases/crear-deck'
import { turnoComputadora, turnoJugador } from './usecases';
import { btnPedir, btnDetener, btnNuevo, inicializarJuego } from './entorno';

// Eventos
btnPedir.addEventListener('click', () => {     
    const puntosJugador = turnoJugador();
    if (puntosJugador>21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora();
    } else if (puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora();
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora();
});

btnNuevo.addEventListener('click', () => {
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    inicializarJuego();
});
