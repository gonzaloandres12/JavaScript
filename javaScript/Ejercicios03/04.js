let intentos = 0
let nUser ;
var num = Math.floor((Math.random() * 3) + 1);
var acierto = false;



do {
  nUser = parseInt(prompt("ingrese un numero del 1 al 1000"),0);
  if(nUser===num){
    acierto = true;
  }
  if(!acierto){
    if(nUser>num){
      alert("El numero es menor");
    }else{
      alert("El numeor es mayor");
    }
   
  }
  intentos++;
} while (!acierto);



document.write(`<p>Numeros de intentos:`+intentos+`</p>`);

