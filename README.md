Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Numero push minimi: 7
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.

SOLUZIONE

- imposto un  genereratore di numeri randomici tramite un array vuoto
- faccio in modo che l'array composto da numeri randomici appaia sul div #random_numbers
- imposto un timer di 30 secondi e lo associo ad una funzione che farà "scomparire" i numeri randomici apparsi sul file html
- la funzione sottostante ha il compito di far apparire un prompt in cui l'utente deve iserire gli stessi numeri randomici apparsi precedentemente
- creo un altro array in cui vengono inseriti i valori provenienti dai due precedenti SE i valori sono uguali
- creo un altra funzione in do un punteggio in base ai valori azzeccati

PS: sono consapevole di aver inserito il file README.md DOPO gli atri file, quando dovrebbe essere il primo file a venir creato. Semplicemente mi ero completamente scordato crearlo, non volevo/voglio fare il furbo.