let matriz = [];
let copia = [[], [], []];
let tam = 3;

function recogerNumero(cad) {
  let num;
  do {
    num = parseInt(prompt(cad));
  } while (isNaN(num) || num > 3 || num < 1);

  return num;
}

function ejercicio4() {
  apartadoA();
  apartadoB(matriz);
  console.log("----------------------------");
  apartadoC();
  console.log("----------------------------");
  apartadoD();
  console.log("----------------------------");
  apartadoE();
}

function apartadoA() {
  let filita = [];
  let n;

  for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      n = parseInt(Math.random() * (18 + 1) + 2);
      filita.push(n);
    }
    matriz.push(filita);
    filita = [];
  }
}

function apartadoB(arr) {
  let res;
  for (let i = 0; i < tam; i++) {
    res = "";
    for (let j = 0; j < tam; j++) {
      if (arr[i][j] < 10) res += " 0" + arr[i][j];
      else res += " " + arr[i][j];
    }
    console.log(res);
  }
}

function apartadoC() {
  let suma = 0;
  for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      suma += matriz[i][j];
    }
  }
  console.log("La suma de todos los valores es " + suma);
}

function apartadoD() {
  for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      if (matriz[i][j] >= 10) copia[i][j] = 9;
      else copia[i][j] = matriz[i][j];
    }
  }
  apartadoB(copia);
}

function apartadoE() {
  let n = recogerNumero("Dame un número entre 1 y 3 por favor.");
  let arr = matriz[n - 1];
  matriz[n - 1] = copia[n - 1];
  copia[n - 1] = arr;
  console.log("Matriz original");
  apartadoB(matriz);
  console.log("Copia");
  apartadoB(copia);
}
