let n = 3;
    let manolo = [];
    let filita = [];
    for (let i = 1; i <= n*n; i++) {
        filita.push(i*n);
        if(filita.length == n){
            manolo.push(filita);
            filita=[];
        }
        
    }
    
    console.log(manolo);
    for (let i = 0; i < manolo.length; i++) {
        filita=[];
        manolo.forEach(element => {
            filita.push(element[i]);
        });     
        console.log(filita);
    }