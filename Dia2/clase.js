let brutos = [1000,1300,1500,1700,2000,2200,2800,3000];
for (let i = 0; i < brutos.length; i++) {
    console.log(brutos[i]);
    
}
/* 
    brutos.foreach(funtion (ele) {
        console.log(ele);
    })
*/
let netos = [];
let fiscalAlto = [];
/*
    netos = brutos.map(function(ele){
        return ele * 0.85;
    })
*/
/*
    fiscalAlto = brutos.filter(function(ele){
        return ele >1935;
    });
    o
    let fiscalAlto = brutos.filter (ele => (ele > 1935));
*/
for (let i = 0; i < brutos.length; i++) {
    netos.push(brutos[i] * 0.85);    
    if(netos[i] >1935) fiscalAlto.push(netos[i]);
}
