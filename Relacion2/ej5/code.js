window.onload = () =>{
    let dedo = document.getElementsByTagName("p")[0];
    dedo.onclick = function(){
        if(document.getElementsByClassName("uno")[0] == null){
            this.setAttribute("class","uno");
        }else{
            this.setAttribute("class","dos");
        }
    }
}