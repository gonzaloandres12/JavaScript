var num = parseInt(prompt("Introduce el numero y muetro la tabla de multiplicar"));


document.write(`<table>
<tr>
<th class="titulo">Tabla de multiplicar del :`+num+`</th>
</tr></table><br>`);
//bucle para la tabla de multiplicar
for (let index = 0; index <=10; index++) {
    var res = num*index;
    document.write(`<table><tr> <td>`+num+`*`+index+`</td> <td>`+res+`</td></tr></table>`);
    
}