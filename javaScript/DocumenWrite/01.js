var numFinal = 0;
let arr = [];
for (let index = 0; index < 3; index++) {
    var numero = parseInt(prompt("Itroduce un numero"));
    arr.push(numero);

}
document.write("Numero mayor"+Math.max(...arr));

