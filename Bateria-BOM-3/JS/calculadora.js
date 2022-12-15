var opPulsado = false;
var operacionRealizar = "";
var num1 = 0;
var num2 = 0;
var total ;
function addNumber(numeroVal){
    console.log(numeroVal);
    console.log(opPulsado);
    console.log(operacionRealizar);
    
    if(opPulsado == false){
        num1 += numeroVal;
    }else{
        num2 += numeroVal;
    }

    console.log(num1);
    console.log(num2);
}


function operaciones(operacionVal){
    opPulsado = true;
    operacionRealizar = operacionVal;
}

function resultado() {
    switch (operacionRealizar) {
        case '/':
            total = num2 / num1;
            break;
    
        case '*':
            total = num1 * num2;
            break;

        case '-':
        total = num1 - num2;
        break;

        case '+':
        total =  num1 + num2;
        break;
    }
    console.log(total);
}

function mostrarNumeros(numeroValue){
    var inputText = document.getElementsByName('valores');
   
    
}