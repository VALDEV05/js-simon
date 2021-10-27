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


/* Un alert() espone 5 numeri generati casualmente. */

placeToPrintNumber = document.querySelector('.num')
let number;


generaNumber()
console.log(number);
setTimeout(clearPage, 4000)



function generaNumber() {
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





//scorrere tra gli indici dell'array e