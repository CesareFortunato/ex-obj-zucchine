/* 
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.
 */

// VARIABLES

// creo obj zucchine

const listaZucchine = [
    { varietà: "varietà1", peso: 0.5, lunghezza: 5 },
    { varietà: "varietà2", peso: 1,   lunghezza: 5 },
    { varietà: "varietà3", peso: 0.8, lunghezza: 5 },
    { varietà: "varietà4", peso: 0.6, lunghezza: 5 },
    { varietà: "varietà5", peso: 0.5, lunghezza: 5 },
    { varietà: "varietà6", peso: 0.9, lunghezza: 5 },
    { varietà: "varietà7", peso: 0.4, lunghezza: 5 },
    { varietà: "varietà8", peso: 0.3, lunghezza: 5 },
    { varietà: "varietà9", peso: 0.6, lunghezza: 5 },
    { varietà: "varietà10", peso: 1.2, lunghezza: 5 }

];


//SYSTEM

let pesoTotale = 0;

for (let i = 0; i < listaZucchine.length; i++) {

    pesoTotale += listaZucchine[i].peso;

    console.log(listaZucchine[i].peso);

        
}

console.log("Questa è la somma totale: " + pesoTotale +" kg");