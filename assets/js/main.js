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
alert('Memorizza questi numeri' + ' ' + generateRandomNumbers());

function generateRandomNumbers() {
    //creo un array vuoto in cui inserire i numeri
    numberRandomArray = []
        //creo un ciclo in modo da creare 5 numeri
    for (let index = 0; index < 5; index++) {
        //creo un numero randomico da 0 a 99
        numRandom = Math.floor(Math.random() * 100)
        numberRandomArray.push(numRandom)
    }
    return numberRandomArray
}

// STEP 2
/* faccio partire un timer di 30 secondi */

// STEP 3 
/* passati questi secondi chiedo all'utente i numeri da inserire */



/* placeToPrintNumber = document.querySelector('.num')
let number;
let numberUser;

generaNumber()
console.log(number);

setTimeout(clearPage, 4000)
sec = setInterval(countDown, 1000);
seconds = 30

setTimeout(function() {
    numberUser = []
    for (let index = 0; index < 5; index++) {
        numUser = parseInt(prompt('write a number'))
        placeToPrintNumber.innerHTML += numUser + ' '
        numberUser.push(numUser)
    }
}, 300000)


function generaNumber() {
    //faccio partire il cronometro
    number = []
    for (let index = 0; index < 5; index++) {
        num = Math.floor(Math.random() * 100)
        placeToPrintNumber.innerHTML += num + ' '
        number.push(num)
    }
    return number
}

function clearPage() {
    placeToPrintNumber.innerHTML = ''
}

function asknumberUser() {

}





function countDown() {
    seconds--;
    document.querySelector('.timer').innerHTML = seconds + 's'
    if (seconds == 0) {
        console.log('tempo scaduto fermati');
        clearInterval(sec)
    }
} */