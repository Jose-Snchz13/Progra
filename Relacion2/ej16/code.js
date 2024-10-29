window.onload = () =>{
    let botoncito1 = document.getElementsByTagName("button")[0];
    let barrica1 = document.getElementsByTagName("meter")[0];   
    let botoncito2 = document.getElementsByTagName("button")[1];
    let barrica2 = document.getElementsByTagName("progress")[0];

    botoncito1.onclick = function(){hacerCosas(barrica1,botoncito1)};
    botoncito2.onclick = function(){hacerCosas(barrica2,botoncito2)};
} 

function hacerCosas(barra, botoncito){
        this.disabled = true;        
        let timer = setInterval(function(){
            if(barra.value == 100){
                alert("listo");
                clearInterval(timer);
                botoncito.disabled = false;
            }
            barra.value = barra.value + 1;            
        }, 100);       
}