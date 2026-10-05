const listaMovimientos=[122000,0,0,300000,0,10000];
const movimiento=300000;
for (let i = 0; i <listaMovimientos.length; i++) {
    if(listaMovimientos<1){
        continue;
    }
    if(movimiento==listaMovimientos[i]){
        console.log(`el movimiento fue encontrado ${movimiento} fue el movimiento N°${i}`);
        break;
    }
}