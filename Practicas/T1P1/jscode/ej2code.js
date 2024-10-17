function recogerNumero(cad) {
  let num = 0;
  do {
    if (num < 0 || num > 10)
      cad = "Ese calificación no es valida introduce otra:";
    num = parseInt(prompt(cad));
  } while (isNaN(num) || num < 0 || num > 10);

  return num;
}

function ejercicio2() {
  let contSus = 0;
  let contApros = 0;
  let contNotable = 0;
  let contSobre = 0;
  let num;
  for (let i = 0; i < 10; i++) {
    num = recogerNumero("Dame un calificación por favor:");

    if (num < 5) contSus++;
    else if (num < 7) contApros++;
    else if (num < 9) contNotable++;
    else contSobre++;
  }
  alert(
    "Esta clase tiene " +
      contSus +
      " suspensos, " +
      contApros +
      " aprobados por los pelos, " +
      contNotable +
      " notables y " +
      contSobre +
      " sobresalientes"
  );
}
