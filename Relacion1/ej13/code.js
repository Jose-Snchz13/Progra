function recogerNumero(cad) {
    let num;
    do {
      num = Number(prompt(cad));
    } while (isNaN(num));    
    return num;
}

function main(){
    let n = recogerNumero("Introduce un año por favor.");
    if(n<=0){
        alert("Que gracioso eres tu no?");
    }else{
        n=parseInt(n/100)+1;
        alert(n);
    }
}