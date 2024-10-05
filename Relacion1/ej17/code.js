function recogerNumero(cad) {
    let num;
    do {
      num = Number(prompt(cad));
    } while (isNaN(num));    
    return num;
}
let arr = [20,5,7,4,32,9,2,14,11,6];
// while (arr.length < 10){
//     arr.push(recogerNumero("Introduce un número por favor:"))
// }
console.log(arr);

let inicio = 3;
let final = 7;

let valor = arr[inicio];
for (let i = inicio; i < final; i++) {
    arr[i] = arr[i+1];    
}
arr.unshift(arr.pop());
arr[final] = valor;
arr