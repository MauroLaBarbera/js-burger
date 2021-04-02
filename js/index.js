/**
 * CREA IL TUO HAMBURGER
 */

//Referenze
var btn = document.getElementById('button');
var nomeBurger = document.getElementById('name');
 //prendiamo tutti le classi che hanno lo questo nome,
 // in modo tale da selezionare più elementi in un colpo
var ingredienti = document.getElementsByClassName('ingredient-checkbox');
//in questo modo creiamo una sorta di array in modo tale da looparci su

//creiamo una variabile che abbia lo scopo di mandare il prezzo completo sulla nostra app
var prezzoDisplay = document.getElementById('price');


/**
 * CALCOLO PREZZO
 */

//PRENDERE IL NOME DEL BURGER DOPO IL CLICK
btn.addEventListener('click', function() {
    var name = nomeBurger.value.trim();

    //NOME BURGER OBBLIGATORIO
    if(name.length === 0) {
        //SEGNALE ERRORE
        alert('Nome Hamburger mancante');

    } else {
        //1. AGG COSTO INGREDIENTI AL PREZZO BASE
        //aggiungiamo qui la var perché è un valore che viene modificato 
        //in base all'aggiunzione o rimozione di ingredienti
        var prezzo = 50;

        //otteniamo solamente le checkbox 'checkate' tramite la lunghezza (length) dell'array
        //var ingredienti che abbiamo creato in precedenza
        for (var i = 0; i < ingredienti.length; i++) {
        //siamo dentro l'array, in questo modo accediamo direttamente ai singoli ingredienti
        var ingredientCheck = ingredienti[i];
        console.log(ingredientCheck.checked);//capiamo quale ingredienti abbiamo checkato

        //creiamo un if per capire se abbiamo checkato o meno il box
        //tramite l'attributo 'checked=false" possiamo capire se il box è checkato o meno
            if (ingredientCheck.checked === true) {
            console.log(ingredientCheck.value); //otteniamo il valore dell'ingrediente aggiunto
            //aggiorniamo il prezzo
            prezzo += parseInt(ingredientCheck.value);
             }
        }
        //dopo aver calcolato tutti gli ingredienti, 
        //controlliamo il prezzo finale inserendo il log dopo il for
        //console.log(prezzo);


        //2. stampiamo il prezzo dentro la nostra "app" prendendo la var che abbiamo precedentemente creato
        prezzoDisplay.innerHTML = prezzo.toFixed(2); //usiamo il toFixed(2) per inserire i primi due numeri decimali dopo la virgola
    }
});




