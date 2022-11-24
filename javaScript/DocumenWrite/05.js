let arr = [];
document.write("Lista normal:");
for (let index = 0; index <10; index++) {
    var numero = parseInt(prompt("Itroduce un numero"));
    arr.push(numero);
    document.write(numero+"-");

} 

document.write("<br> Lista invertida:");
for (var i = arr.length-1; i >= 0; i--) {
   document.write(arr[i]+"-");
    
}
   
