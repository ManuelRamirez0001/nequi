const listaMovimientos=[122000,-19000,-70000,300000,-205000,10000];
let total=0;
let cantidadRetiros=0;
for (let i = 0; i < listaMovimientos.length; i++) {
    total+=listaMovimientos[i];
    if(listaMovimientos[i]<0){
        cantidadRetiros++;
    }   
}
console.log(total,cantidadRetiros);