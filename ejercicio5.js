//zona de usuarios

const usuarios = [ 
    ["manuel", 13000, 4300, 300], 
    ["pedro", 2000, 3000], 
    ["raul", 1000, 2000, 4000] 
]; 
for(let a = 0; a < usuarios.length; a++){ 
        let totalUsuario = 0;
        for(let u = 1; u < usuarios[a].length; u++){//console.log(usuarios[a].length);
            totalUsuario += usuarios[a][u]; }
    console.log(usuarios[a][0], totalUsuario); 
}