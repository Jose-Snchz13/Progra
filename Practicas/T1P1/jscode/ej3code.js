let arr = [];

function recogerNumero(cad) {
  let num;
  do {
    num = Number(prompt(cad));
  } while (isNaN(num));

  return num;
}

function ejercicio3() {
  let num;
  do {
    num = recogerNumero(
      "Dame un número positivo," + " si me das uno negativo no lo añadire"
    );
    if (num > 0) {
      arr.push(num);
    }
  } while (num >= 0);
  apartadoB();
  apartadoC();
  let n = apartadoD();
  apartadoE(n);
}

function apartadoB() {
  let res = "B) ";
  arr.forEach((element) => {
    res += element + " ";
  });
  console.log(res);
}

function apartadoC() {
  let res = 0;
  arr.forEach((element) => {
    res += element;
  });
  console.log("C) " + res);
}

function apartadoD() {
  let n;
  do {
    n = recogerNumero("Dame un número positivo:");
  } while (n < 0);
  return n;
}

function apartadoE(n) {
  let repes = 0;
  let pos = [];
  if (arr.includes(n)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == n) {
        repes++;
        pos.push(i);
      }
    }
    console.log(
      "D) La primera aparición de ese número en nuestro array es la " +
        pos[0] +
        " y la última apararición es " +
        pos.pop()
    );
  } else {
    console.log("D) El numero introducido no existe en el array.");
  }
}
