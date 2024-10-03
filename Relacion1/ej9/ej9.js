

function pedirNumero(){   
    let n;
    do {
        n = prompt();        
    } while (n<2 || (n.isNaN));
    return n;
}

function hacerTabla(){
    let n = pedirNumero();
    let manolo = [];
    let filita = [];
    for (let i = 1; i <= n*n; i++) {
        filita.push(i*n);
        if(filita.length == n){
            manolo.push(filita);
            filita=[];
        }
        
    }
    for (let i = 0; i < manolo.length; i++) {
        filita=[];
        manolo.forEach((element) => {
            filita.push(element[i]);
        });     
        console.log(filita);
    }
    
        
}