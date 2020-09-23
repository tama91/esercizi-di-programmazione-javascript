/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

function difference(a, b) {
  return Math.abs(a % b);
}

var numeroGatti = 44;

var gattiXfila = 6;

var numeroFile = Math.ceil(numeroGatti / gattiXfila);

var gattiMancanti = Math.abs((numeroGatti % gattiXfila) - gattiXfila);


console.log(numeroFile);
console.log(gattiMancanti);