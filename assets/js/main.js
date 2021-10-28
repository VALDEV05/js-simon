/* Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
Info:
L'alert non si chiude in automatico. Dovete chiuderla voi a mano cliccando su ok.
 */


/* 
    Un alert() espone 5 numeri generati casualmente 
    da li devo far partire un timer di 30 secondi di 'attesa'
    passati i 30 secondi devo chiedere all'utente di inserire 5 numeri.
*/



// STEP 1
/* crea un alert che mi mostra i 5 numeri */
generateRandomNumbers();
console.log('Il timer di 30 secondi è partito!!');

// STEP 2
/* passati questi secondi chiedo all'utente i numeri da inserire */
//il timer lo setto da qui
setTimeout(askNumberToUser, 30 * 1000);
rightNumber = []


/*-------------------------------------------------------------------------- ---------------------*  funzioni create  *----------------------------------
----------------------------------------------------------------------------*/


//funzione step 1
//funzione che genera un array con 5 numeri randomici al suo interno.
function generateRandomNumbers() {
    //creo un array vuoto in cui inserire i numeri
    numberRandomArray = []
        //creo un ciclo in modo da creare 5 numeri
    for (let index = 0; index < 5; index++) {
        //creo un numero randomico da 0 a 99
        numRandom = Math.floor(Math.random() * 100)
        numberRandomArray.push(numRandom)
    }
    alert('Memorizza questi numeri' + ' ' + numberRandomArray);
    return numberRandomArray
}

//funzione step 2
//chiedi tramite il prompt 5 numeri all'utente
//verififca se il numero inserito dall'utente è presente 
//all'interno dell'array numberRandomArray è incluso quel numero

function askNumberToUser() {
    //array numeri utente
    numberUser = []
    while (numberUser.length < numberRandomArray.length) {
        let userNum = parseInt(prompt('Vediamo se ti ricordi tutti i nunmeri!!!'));

        // se i numeri inseriti dall'utente NON sono inclusi all'interno 
        //dell'array allora pusho
        if (!numberUser.includes(userNum)) {
            numberUser.push(userNum);
            //se il numero inserito dall'user è presente all'interno dell'array
            //dei numeri randomici allora in quelcaso pusho
            if (numberRandomArray.includes(userNum)) {
                rightNumber.push(userNum)
            }
        }
    }
    //stampo il risultato a schermo
    document.querySelector('.answer').innerHTML = `<h1>Hai indovinato questi numeri: ${[rightNumber]}, hai totalizzato un punteggio di: ${rightNumber.length}</h1>`
}