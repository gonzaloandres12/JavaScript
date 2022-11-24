var fechaUser = prompt("Introduce tu fecha de naimiento => (xxxx/xx/xx)");

var fechaHoy = new Date();
var fechaCumpleUser = new Date(fechaUser);

var edadUser = fechaHoy.getFullYear() - fechaCumpleUser.getFullYear();
var mesUser = fechaHoy.getMonth() - fechaCumpleUser.getMonth();

//comprbar si hay cumplido los años si no restar uno
if(mesUser < 0 || mesUser === 0 && fechaHoy.getDate() < fechaCumpleUser.getDate()){
    edadUser--;
}


if(edadUser>=18){
    document.writeln("Es mayor eadad =>"+edadUser);
}else{
    document.writeln("Es menor eadad =>"+edadUser);
}
