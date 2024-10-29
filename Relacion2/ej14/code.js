window.onload = () =>{
    let dedos = document.querySelectorAll("body>ul>li");
    dedos.forEach((element,pos)=>{
        element.onclick = function(){cosas(pos)};
    }
)}

function cosas(pos){
    let subcategoria = document.getElementsByClassName("subcategoria");
    let dedo = subcategoria[pos];   
    for (const element of subcategoria) {
        if(element != dedo) element.style.setProperty("display","none");            
        else element.style.setProperty("display","block"); 
    }
    
}