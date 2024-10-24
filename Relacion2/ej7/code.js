window.onload = () =>{
    let colors = ["","black","red","blue","yellow"];
    let i;
    let dedos = document.getElementsByTagName("td");
    for (const element of dedos) {
        
        element.onclick = function(){

            i = colors.indexOf(this.style.backgroundColor);
            console.log(i);
            if(i != colors.length - 1) this.style.backgroundColor = colors[i+1];             
            else this.style.backgroundColor = colors[1];
        }    
    }
}