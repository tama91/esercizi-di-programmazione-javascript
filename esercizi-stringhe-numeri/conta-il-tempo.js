/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var time = 12571;
const secondsINminute = 60;
const secondsINhour = 3600;

var HH = time/secondsINhour;
HH = HH.toFixed(0);

var mm = (time%secondsINhour)/secondsINminute;
mm = mm.toFixed(0);

var ss = (time%secondsINminute);
ss = ss.toFixed(0);


console.log(`${HH} ore, ${mm} minuti e ${ss} secondi`)