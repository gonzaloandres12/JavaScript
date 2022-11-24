function Biblioteca(titulo, autor, editorial, fecha) {
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.fecha = fecha;

}


var biblio = [];

function funcionGuardar() {
    biblio.push(new Biblioteca(document.getElementById('titulo').value, document.getElementById('autor').value
        , document.getElementById('editorial').value, document.getElementById('fecha').value));

}


function funcionVisualizar() {
    document.getElementById('textArea').value = "";
    console.log(biblio);
    console.log(biblio[0].autor);
    console.log(biblio.length);
    for (let index = 0; index < biblio.length; index++) {
        document.getElementById('textArea').value += "Titulo:" + biblio[index].titulo + "\n";
        document.getElementById('textArea').value += "Autor:" + biblio[index].autor + "\n";
        document.getElementById('textArea').value += "Edtorial:" + biblio[index].editorial + "\n";
        document.getElementById('textArea').value += "Fecha:" + biblio[index].fecha + "\n";
        
    }
}

