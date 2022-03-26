
// Las llaves hacen referencia a un Objeto Literal
let personaje = {
    nombre: 'Tony Stark', // Los Objetos están compuestos de pares de valores (Llaves y valor de llaves)
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coordenadas: { // Esto es un Objeto Anidado
        lat: 34.034,
        lgt: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'], // Esto es un Arreglo dentro del Objeto
    direccion:{
        zip:'1004, 1981',
        ubicacion: 'Malibu, California',
    }
}; 

console.log(personaje);
console.log('Nombre', personaje.nombre); // Muestra el valor de la llave buscada
console.log('Nombre', personaje['nombre']); // Idem arriba
console.log('Edad', personaje.edad);

console.log('Coordenadas', personaje.coordenadas); // Muestra el Objeto Anidado
console.log('Longitud', personaje.coordenadas.lgt); // Muestra el valor de la llave dentro del Objeto Anidado

console.log('Nº de trajes: ', personaje.trajes.length); 

console.log('Ultimo Traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x= 'vivo';

console.log('Está vivo?: ', personaje[x]);

delete personaje.edad; // Borrar una llave del Objeto
console.log(personaje);

personaje.casado=true; // Agrega una propiedad al Objeto

//Para tratar el Objeto como Arreglos
const pares = Object.entries(personaje);
console.log(pares);

// Evitar futuros cambios en el Objeto (como agregar, modificar o borrar propiedades) pero no afecta a los Objetos Anidados
Object.freeze(personaje);

// Para ver todas las propiedades del Objeto
const propiedades=Object.getOwnPropertyNames(personaje);
console.log(propiedades);

// Propiedades + Valores
const valores=Object.values(personaje);
console.log(propiedades, valores);