const prompt = require('prompt-sync')();
const pin="9685";
let valor=prompt("ingresa tu contraseña");
let intentos=0;
let bandera=true;
while(bandera){
    intentos++;
    if(valor===pin && intentos < 5){
        console.log("bienvenido");
        bandera=false
    }else{console.log("usuario bloqueado"); bandera=false}
}
