function generarTabla(filas,columnas,colorPick){
    document.write("<table style= width:100%; border="+"2px solid "+colorPick+">");
    for (let index = 0; index < filas; index++) {
        document.write("<tr>");
        for (let index = 0; index < columnas; index++) {
            document.write("<td>"+index+"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

