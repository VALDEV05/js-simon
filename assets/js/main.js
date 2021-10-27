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


// STEP 2
/* faccio partire un timer di 30 secondi */
sec = setInterval(countDown, 1000);
//imposto i secondi del timer
seconds = 31


// STEP 3 
/* passati questi secondi chiedo all'utente i numeri da inserire */



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
function countDown() {
    seconds--;
    document.querySelector('.timer').innerHTML = seconds + 's'
    if (seconds == 0) {
        console.log('tempo scaduto fermati');
        clearInterval(sec)
    }
}














/* funzioni disponibili vecchia versione*/
/* //funzione che genera randomicamente 5 numeri e li stampa a schermo
function generaNumber() {
    number = []
    for (let index = 0; index < 5; index++) {
        num = Math.floor(Math.random() * 100)
        placeToPrintNumber.innerHTML += num + ' '
        number.push(num)
    }
    return number
}
 */



/* //funzione che chiede all'utente di digitare 5 numeri mediante un prompt
setTimeout(function() {
    numberUser = []
    for (let index = 0; index < 5; index++) {
        numUser = parseInt(prompt('write a number'))
        placeToPrintNumber.innerHTML += numUser + ' '
        numberUser.push(numUser)
    }
}, 300000) */



/* //funzione che pulisce la pagina
function clearPage() {
    placeToPrintNumber.innerHTML = ''
} */



/* //funzione che in base a come dichiariamo i secondi conta all'indietro fino a zero
function countDown() {
    seconds--;
    document.querySelector('.timer').innerHTML = seconds + 's'
    if (seconds == 0) {
        console.log('tempo scaduto fermati');
        clearInterval(sec)
    }
}

 */