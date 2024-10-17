let equivalencia = 1.0965;

function recogerNumero(cad) {
  let num;
  do {
    num = Number(prompt(cad));
  } while (isNaN(num) || num < 0);

  return num;
}

function ejercicio1() {
  let euros = recogerNumero("Dame una cantidad de euros:");
  let res = euros * equivalencia;
  alert(euros + " euros equivalen a " + res + " dólares americanos");
}
