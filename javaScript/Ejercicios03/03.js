var num = parseInt(prompt("Introduce un numero y te muestro el factorial"));

var total = 1;
for(let i =1; i<=num;i++){
    total = total*i;
}
alert(total);