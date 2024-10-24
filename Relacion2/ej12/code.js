

window.onload = () =>{
    let izquierda = document.getElementsByTagName("input")[0];
    let derecha = document.getElementsByTagName("input")[1];
    let caja = document.getElementsByTagName("img")[0];    
    derecha.onclick =  function(){moverDerecha(caja)} ;
    izquierda.onclick = function(){moverIzquierda(caja)};
}

function moverDerecha(cajita){
    posicion = parseInt((window.getComputedStyle(cajita)).getPropertyValue("left"));

    if(posicion+50 > (screen.width - cajita.offsetWidth)){               
        cajita.style.setProperty("left",(screen.width - cajita.offsetWidth)+"px");
    }else{
        cajita.style.setProperty("left",(posicion+50)+"px");
    }        
        
}
function moverIzquierda(cajita){
    posicion = parseInt((window.getComputedStyle(cajita)).getPropertyValue("left"));
    if(posicion > 0) cajita.style.setProperty("left",(posicion-50)+"px")
}
