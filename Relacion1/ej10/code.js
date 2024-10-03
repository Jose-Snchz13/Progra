let arr1 = ["Ray", "Jose", "Dani"];
let arr2 =  ["Dani", "Jose", "Ivan"];
let arr = arr1.concat(arr2);
let res=[];
let encontrado = false;
arr
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i]==arr[j] && i != j){
            encontrado=true;            
        }        
    }
    if(!encontrado){
        res.push(arr[i]);
    }
    encontrado=false;
    
}
res