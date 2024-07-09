/******SEZIONE ESERCIZIO*******/

setTimeout (timer, 30000);

let randomNunmbers = []

function 
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