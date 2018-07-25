//================================
//Puerto
//================================
process.env.PORT = process.env.PORT || 3000;

//================================
//Entorno
//================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//================================
//Vencimieno token
//================================
process.env.CADUCIDAD_TOKEN = '2h'

//================================
//Clave secreta
//================================
process.env.CLAVE_SECRETA = process.env.CLAVE_SECRETA || 'EntornoDllo'


//================================
//Base de datos
//================================
let urlDb

if (process.env.NODE_ENV === 'dev') {
    urlDb = 'mongodb://localhost:27017/cafe';
} else {
    urlDb = 'mongodb://localhost:27017/cafe'; //ruta de produccion
}
process.env.URLDB = urlDb;