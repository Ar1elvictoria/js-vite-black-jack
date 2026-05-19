import _ from 'underscore'



// Esta función crea un nuevo deck
/**
 * 
 * @param {Array<String>} tiposDeCarta Ejemplo : ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales : ['A','J','Q','K']
 * @returns {Array<String>}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta && tiposDeCarta,length = 0  ) throw new Error('Tipos de carta es obligatorio y debe ser una arreglo de string')


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}