/**
 * Ejercicio 18: Un restaurante nos ha encargado una aplicación para colocar a los clientes
en sus mesas. En una mesa se pueden sentar de 0 (mesa vacía) a 4 comensales (mesa
llena).
El funcionamiento es el siguiente:
Cuando llega un cliente se le pregunta cuántos son. Como el programa no está
preparado para colocar a grupos mayores a 4, si un cliente solicita una mesa con mas
comensales (pej, 6), el programa dará el mensaje “Lo siento, no admitimos grupos de 6,
haga grupos de 4 personas como máximo e intente de nuevo” y volverá a preguntar.
Para cada grupo nuevo que llega, se busca siempre la primera mesa libre (con 0
personas). Si no quedan mesas libres, se busca una donde haya hueco para todo el grupo
(por ejemplo si el grupo es de dos personas, se podrá colocar en mesas donde haya una
o dos personas).
Cada vez que se sientan nuevos clientes se debe mostrar el estado de las mesas.
Los grupos no se pueden romper aunque haya huecos sueltos suficientes.
A tener en cuenta:
• El programa comienza pidiendo el numero de mesas que tiene el restaurante.
• Inicialmente, las mesas se cargan con valores aleatorios entre 0 y 4 y mostrará
por pantalla como quedan las mesas inicialmente.
• El programa seguirá pidiendo comensales hasta que se introduzca un valor
negativo.
 */

function recogerNumero(cad) {
  let num;
  do {
    num = Number(prompt(cad));
  } while (isNaN(num));
  return num;
}

function numeroPersonas(pers){
    do {
        if (pers > 4) pers = recogerNumero("Como maximo 4 personas, por favor.");
        else pers = recogerNumero("Buenas, cuantos comensales sois.");
      } while (pers > 4);
      return pers;
}

function main() {
  let nmesas = recogerNumero("Dame el número de mesas");
  let pers = 0;
  let mesas = [];

  for (let i = 0; i < nmesas; i++) {
    mesas.push(parseInt(Math.random() * 5));
  }

  while (pers >= 0) {
    pers = numeroPersonas();   
    if (pers >= 0) {
      for (let i = 0; i < nmesas; i++) {
        if (mesas[i] + pers <= 4) {
          mesas[i] += pers;
          i = nmesas;
        }
      }
      console.log(mesas);
    }    
  }
}
