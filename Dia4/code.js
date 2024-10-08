/*1. Función que recibe una matriz y devuelve true si hay algún elemento repetido 
False si todos son diferentes.
  2. Funcion que reciba 2 cadenas y devuelva true si son anagrama o false si no lo son:
*/
function ej1(arr){
    let num =[];
    arr.forEach(element => {
        element.forEach(elemento => {
            if(num.includes(elemento)) return true;
        });
        num.push(element);
    });
    return false;
}

function ej2(str1,str2){
    
}
str1 = "zorra";
str2 = "arroz";

let c1 = str1.split("");
let c2 = [...str2];
c1 = c1.join(c1.sort());
c2 = c2.join(c2.sort());
if(c1 === c2) return true;
return false;