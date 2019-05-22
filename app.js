//requireds
/**
 * RETIRO EL REQUIRED PQ EN ESTA SECCION NO LA USARE YA QUE COLOCARE LA LOGICA EN OTRO LUGAR
 */
// const fs = require('fs');

// pasar mi resultado a un archivo
//fs.writeFile(file,data[,options],callback)

// no nativos o expansiones
// const fs= required('express);
//las que creamos nosotros
//const fs= required('./fs')
//cuando colocamos las llaves en el let const se llama destructuracion

/**
 * Con yargs se puede listar los comandos como por ejemplo
 * | |
 *  abajo
 *   
 */
/**
 * este se comenta cuando creamos el archivo yargs
 */
/*const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla multiplicar ', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
*/

/**
 * fin
 */

const argv = require('./config/yargs').argv;
// const colors = require('colors');
const colors = require('colors/safe');
const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('listar');
        listartabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            //  .then(archivo => console.log(`Archivo creado : ${ archivo } `))
            // para agregar el color comento la linea superior
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        // console.log('crear');
        break;

    default:
        console.log('Comando no reconocido');
}
/**
 * comentamos esta base para colocar el process.argv
 */
//let base =  5 ;

/**
 * SE COMENTA ESTA SECCIO PARA REALIZAR UN ARCHIVO APARTE CON LA LOGICA EN LA CARPETA MULTIPLICAR
 */
/*let numero = 3;
let data = '';
for (let i = 1; i <= numero; i++) {
    data += `${ base } * ${ i } = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;

    console.log('El archivo ha sido creado!');
}); */
// crear un archivo aparte que se encargue de la logica ya hecha anteriormente
/**
 * Lo comente para ralizar el process argv de esta manera se puede borrar el base 
 * en la terminal compilamos el archivo con node app --base =5
 *  */
//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado : ${ archivo } `))
//    .catch(e => console.log(e));

/**
 * luego de comentar el crearArchivo(base)
 */


/*let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]
    // console.log(base);
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado : ${ archivo } `))
    .catch(e => console.log(e)); */

// let argv2 = process.argv;
//  console.log('Limite', argv.limite)