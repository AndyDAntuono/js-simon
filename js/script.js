/******SEZIONE ESERCIZIO*******/

//imposto un  genereratore di numeri randomici tramite un array vuoto
let randomNunmbers = [];
//specifico che la lughezza dell'array non deve essere più lunga di 5 valori
while (randomNunmbers.length < 5) {
    //imposto una variabile in cui num può essere un numero randomico che vada da 1 a 100
    let num = Math.floor(Math.random() * 100 + 1);
    //specifico che SE un numero randomico è diverso dal precedente numero randomico, allora lo si può includere nell'array 
    if(!randomNunmbers.includes(num)){
        randomNunmbers.push(num);
        console.log(randomNunmbers)
    }
}
//faccio in modo che l'array composto da numeri randomici appaia sul div #random_numbers
document.getElementById("random_numbers").innerHTML = randomNunmbers.join(' ');

//imposto un timer di 30 secondi e lo associo ad una funzione che farà "scomparire" i numeri randomici apparsi sul file html
const timer_vanish = setTimeout(vanish, 30000);


function vanish() {
    document.getElementById("random_numbers").style.display = "none";
}

//imposto un altro timer che farà apparire un promt dopo 35 secondi
const timer_insertNumbers = setTimeout(function () {
    insertNumbers()
    confrontArray()
    score()
}, 35000);

//la funzione sottostante ha il compito di far apparire un prompt in cui l'utente deve iserire gli stessi numeri randomici apparsi precedentemente

let userNumbers = [];

function insertNumbers() {

    for ( i = 0; i < 5; i++) {
        let y = parseInt(prompt("Inserisci i numeri apparsi poco fa")); 
        userNumbers.push(y);
        console.log(userNumbers)
    }
    
}


function confrontArray() {
    let commonNumbers = [];

    for (i = 0; i < userNumbers.length; i++) {
        let check = userNumbers[i]
        if (randomNunmbers.includes(check)) {
            commonNumbers.push(check)
        }
        
    }
    return commonNumbers
}

function score() {
    console.log(confrontArray().length)
}


/***********************SEZIONE TEST**************/
// La sezione sottostante a che fare con dei test eseguguiti autonomamente per capire se riesco a replicare i live coding mostrati durante la lezione mattutina, ergo quello che è scritto qua sotto non è da considerarsi parte dell'esercizio.

/*TEST 4*/
/*
let randomNunmbers = [];

while (randomNunmbers.length < 5) {
    let num = Math.floor(Math.random() * 100 + 1);

    if(!randomNunmbers.includes(num)){
        randomNunmbers.push(num);
    }
}

console.log(randomNunmbers);
*/

/*TEST 3*/
/*
let clock;

let time = 0;

document.getElementById('seconds').innerText = time;
document.getElementById('start').addEventListener('click', function(){
    clock = setInterval(function () {
        time++;
        document.getElementById('seconds').innerText = time;
    }, 1000);
})

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(clock);
});

document.getElementById('reset').addEventListener('click', function(){
    clearInterval(clock);
    time = 0;
    document.getElementById('seconds').innerText = time;
});
*/

/*TEST 2*/
/*
//simulo un timer di 10 secondi
let seconds = 10;
//recuperio l'elemento del dom che dovrà contenere i secondi
let time = document.getElementById('seconds');
time.innerText = seconds;

let clock = setInterval(function () {
    time.innerText = seconds;
    seconds--;
}, 1000);

setTimeout(function () {
    clearInterval(clock);
}, seconds * 1000);
*/

/*TEST 1*/ 
/*
//simulo un timer di 10 secondi
let seconds = 10;
//recuperio l'elemento del dom che dovrà contenere i secondi
let time = document.getElementById('seconds');
time.innerText = seconds;

//faccio partire il countdown in cui viene riepetuta l'azione di interval ad ogni secondo
let clock = setInterval(function(){
    //recuperio l'elemento del dom che dovrà contenere i secondi
    let time = document.getElementById('seconds');
    time.innerText = seconds;
    //se i secondi sono pari a zero
    if (seconds === 0) {
        //cancello l'inervallo  e mostro un messaggio
        clearInterval(clock);
        alert('Buon anno!!!')
    }
    else {
        //altrimenti decremento i secondi
        seconds--;

    }

}, 1000);
*/