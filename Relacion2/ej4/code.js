let pos=0;
let fotos = ["perro", "gato", "conejo", "raton", "serpiente"];


window.onload = () =>{
    let dedo1 = document.getElementById("1");
    let dedo2 = document.getElementById("2");
    dedo1.onclick = function(){
        if(pos!=0){
            pos--;
            cambiarFoto();
            dedo2.disabled = false;
        }else{
            this.disabled = true;
        }     
    }
    
    dedo2.onclick = function(){
        if(pos!=fotos.length-1){
            pos++;
            cambiarFoto();
            dedo1.disabled = false;
        }else{
            this.disabled = true;
        }    
    }
    
    
}

function cambiarFoto(){
    let foto = document.getElementById("img");    
    foto.setAttribute("src","./img/"+fotos[pos]+".png");    
}