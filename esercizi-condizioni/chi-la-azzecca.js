/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var gamer1 = 25;
var gamer2 = 91;
var extration = Math.floor((Math.random() * (100-1) +1));
var valore1 = Math.abs(extration - gamer1);
var valore2 = Math.abs(extration - gamer2);

console.log(`Numero estratto ${extration}`);
console.log(`${extration} - ${gamer1} = ${valore1}`);
console.log(`${extration} - ${gamer2} = ${valore2}`);


if (gamer1 == extration) {
console.log('il vincitore: giocatore 1');
} else if (gamer2 == extration) {
console.log('il vincitore: giocatore 2');
} else if (valore1 > valore2) {
  console.log('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!');
} else {
console.log('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!');
}