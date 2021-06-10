const colors = require('colors');
const fs = require('fs');
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try{
        if (listar ) {
            console.log('=============================='.green);
            console.log('Tabla del:'.green, colors.blue(base));
            console.log('=============================='.green);
        }
        let salida, consola = '';

        for(let i=1; i<=hasta; i++){
            salida += (`${ base } X ${ i } = ${ base * i }\n`);
            consola += (`${ base } ${ 'X' } ${ i } ${ '='.green } ${ base * i }\n`);
        }
        if (listar ) {
            console.log(consola);
        }
        fs.writeFileSync( `salida/tabla-${ base }.txt`, salida);

        return 'tabla-${ base }.txt creado';
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}