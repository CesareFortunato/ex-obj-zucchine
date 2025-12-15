/* 
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.
 */

// VARIABLES

// creo obj zucchine

const listaZucchine = [
    { 'varieta': "varietà1", peso: 0.5, lunghezza: 15 },
    { 'varieta': "varietà2", peso: 1, lunghezza: 17 },
    { 'varieta': "varietà3", peso: 0.8, lunghezza: 4 },
    { 'varieta': "varietà4", peso: 0.6, lunghezza: 6 },
    { 'varieta': "varietà5", peso: 0.5, lunghezza: 9 },
    { 'varieta': "varietà6", peso: 0.9, lunghezza: 15 },
    { 'varieta': "varietà7", peso: 0.4, lunghezza: 24 },
    { 'varieta': "varietà8", peso: 0.3, lunghezza: 8 },
    { 'varieta': "varietà9", peso: 0.6, lunghezza: 11 },
    { 'varieta': "varietà10", peso: 1.2, lunghezza: 6 }

];


//SYSTEM

// variabile per accumulare il totale dei pesi

let pesoTotale = 0;  

// ciclo for per aggiungere il peso di ogni oggetto nell'array alla variabile settata prima

for (let i = 0; i < listaZucchine.length; i++) {

    // si può anche scrivere per esteso:  pesoTotale = pesoTotale + listaZucchine[i].peso;

    pesoTotale += listaZucchine[i].peso;

    console.log(listaZucchine[i].peso);


}

console.log("Questa è la somma totale: " + pesoTotale + " kg");