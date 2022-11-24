var codes = "0123456789ABCDEF";
var x = "#";


for (let index = 0; index < 6; index++) {
    x = x+codes[Math.floor((Math.random() * 16))];
}
document.write(x);
document.body.style.backgroundColor = x;
