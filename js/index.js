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

//creiamo una variabile per il coupon
var coupon = document.getElementById('coupon');


//creiamo un array con all'interno i nostri codici sconto
var coupons = ['12345QWERT', '56789ASDF', '123ZXC456']


//creiamo una var di referenza associata agli 'add' tramite la loro classe e non l'id 
var addBtn = document.getElementsByClassName('ingredient-add'); 
console.log(addBtn);



/**
 * 4. ADD CLICCABILI
 */
for (var i = 0; i < addBtn.length; i++) {
     var add = addBtn[i]; //prendiamo l'add attuale contenuto dentro l'addBtn tramite [i]

     add.addEventListener('click', function(){
        console.log('Click!');
        console.log(this);  //elemento che ho cliccato
        console.log(this.previousElementSibling);  //elemento che ho cliccato

        var thisCheckbox = this.previousElementSibling;
        thisCheckbox.checked = ! thisCheckbox.checked;
     });

}





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


        //3. Coupon
        
        var codiceCoupon = coupon.value;
        //console.log(codiceCoupon);

        //tramite un if e la proprietà '.includes' controlliamo se il nostro codice è, appunto, inserito all'interno del nostro array di coupon
        if (coupons.includes(codiceCoupon) ) {
            console.log('Coupon valido, sconto applicato');

            //20% di sconto
            prezzo -= prezzo * 0.2;
        } else {
            console.log('Codice non valido');
        }

        //2. stampiamo il prezzo dentro la nostra "app" prendendo la var che abbiamo precedentemente creato
        prezzoDisplay.innerHTML = prezzo.toFixed(2); //usiamo il toFixed(2) per inserire i primi due numeri decimali dopo la virgola
    }
});




