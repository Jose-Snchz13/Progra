window.onload = () =>{
    let colors = ["black","red","blue","yellow"];
    let i;
    let dedos = document.getElementsByTagName("td");
    for (const element of dedos) {
        i = 0;
        element.onclick = function(){
            this.style.backgroundColor = colors[i];
            if(i<colors.length-1) i++;
            else i=0;
        }    
    }
}