function recogerNumero(cad) {
  let num;
  do {
    num = Number(prompt(cad));
  } while (isNaN(num));

  return num;
}
function recogeOperacion(){
    let res = "No entres";
    let listaDec = ["sumar","restar","multiplicar","dividir"];
    while (!listaDec.includes(res)) {
        res = prompt("Dime la operación que quieres realizar.").toLocaleLowerCase();
    }
    return res
}
function calcular(){
    let n1 = recogerNumero("Dime el primer numero");
    let n2 = recogerNumero("Dime el segundo numero");
    let ope = recogeOperacion();
    console.log(`${n1},${n2},${ope}`);
    
    let n = 0;
    switch (ope) {
        case "Sumar":n = sumar(n1,n2);break;
        case "Restar":n = restar(n1,n2);break;
        case "Multiplicar":n = multiplicar(n1,n2);break;
        case "Dividir":n = dividir(n1,n2);break;
    }
    alert(n);
}   

function sumar(n1, n2) {return n1 + n2;}
function restar(n1, n2) {return n1 - n2;}
function multiplicar(n1, n2) {return n1 * n2;}
function dividir(n1, n2) {return n1 / n2;}