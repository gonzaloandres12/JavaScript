var texto = "";
let n =prompt("numero de asteriscos");

for (let i = 1; i <=n; i++) {
    for (let j = 1; j <=i; j++) {
       texto = texto+"* ";
    }
    texto = texto + "/n";
}

//document.write(texto);
document.getElementById("pantalla").value = texto;




