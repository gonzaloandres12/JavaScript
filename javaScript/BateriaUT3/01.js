
var numero;
var total =0 ;
var count = 0;
while (numero!=0) {
    
    numero = prompt("Introduce un numero (para salir introduzca 0)");
    if(!isNaN(numero)){
        total += parseInt(numero);
        count++;
    }
    if(numero == null){
        break;
    }
  
}


document.write("Media:"+total/count);


