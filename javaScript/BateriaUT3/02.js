var texto = prompt("Escribe algo");


function funcionBoton() {
    let size = texto.length;
    let alea = Math.floor(Math.random() *size)
    
    let resul = texto.charAt(alea);
        
    document.write("Palabras: "+texto+"\n");
    document.write("Caracter: "+resul);
}



