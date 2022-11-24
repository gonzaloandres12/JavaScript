var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tu apellido");
var salario = prompt("Introduce tu salario");
var edad = prompt("Introduce tu eadad");
var nuevoSalario;
if(salario>=1000 & salario<=2000){
    if(edad>45){
        nuevoSalario = (parseFloat(salario)*0.3)+ parseFloat(salario);
        alert("Nombre:"+nombre+" Apellido:"+apellidos+" Edad:"+edad+ " Salario:"+nuevoSalario);
    }else if (edad<=45){
        nuevoSalario = (parseFloat(salario)*0.3)+ parseFloat(salario);
        alert("Nombre:"+nombre+" Apellido:"+apellidos+" Edad:"+edad+ " Salario:"+nuevoSalario);
    }

}else if(salario<1000){
    if(edad<30){
        nuevoSalario = 1100;
        alert("Nombre:"+nombre+" Apellido:"+apellidos+" Edad:"+edad+ " Salario:"+nuevoSalario);
    }else if(edad>30 & edad<45){
        nuevoSalario = (parseFloat(salario)*0.3)+ parseFloat(salario);
        alert("Nombre:"+nombre+" Apellido:"+apellidos+" Edad:"+edad+ " Salario:"+nuevoSalario);
    }else if(edad>45){
        nuevoSalario = (parseFloat(salario)*0.3)+ parseFloat(salario);
        alert("Nombre:"+nombre+" Apellido:"+apellidos+" Edad:"+edad+ " Salario:"+nuevoSalario);
    }
}

