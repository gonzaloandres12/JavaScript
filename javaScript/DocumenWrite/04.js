var num = parseInt(prompt("Introduce el numero"));

document.write(`<table>
<tr>
<th class="titulo">Desgloses de la cantidad: `+num+`</th>
</tr></table><br>`);

document.write(`<table>
 <tr><td>Unidades de 500: `+num+`</td></tr>
 <tr><td>Unidades de 200: `+num+`</td></tr>
 <tr><td>Unidades de 100: `+num+`</td></tr>
 <tr><td>Unidades de 50: `+num+`</td></tr>
 <tr><td>Unidades de 20: `+num+`</td></tr>
 <tr><td>Unidades de 10: `+num+`</td></tr>
 <tr><td>Unidades de 5: `+num+`</td></tr>
 <tr><td>Unidades de 1: `+num+`</td></tr>
 </table>`);