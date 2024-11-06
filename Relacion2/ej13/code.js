window.onload = () =>{
    let dedo = document.getElementsByTagName("p")[0];
    dedo.onclick = function(){
        const estilos = window.getComputedStyle(this)
        let color = estilos.backgroundColor;

        if(color == "rgb(0, 0, 0)")this.style.backgroundColor = "white";
        
        else this.style.backgroundColor = "black";
    }   
}