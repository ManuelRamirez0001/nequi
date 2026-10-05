let continuar="si";
do{
    const menu=prompt("1) Ver saldo, 2) Enviar dinero, 3) Recargar, 4) Salir. :")
    if(menu=="1"){
        console.log("saldo XXXX");
    }
    else if(menu=="2"){
        console.log("ingrese la cuenta destino y el monto");
    }
    else if(menu=="3"){
        console.log("monto a recargar");
    }
    else if(menu=="4"){
        continuar="no";
    }
    else{console.log("erro ingreso no valido")}
    
    const pregunta=prompt("desea continuar si/no");
    continuar=pregunta.toLowerCase;
}while(continuar=="si")