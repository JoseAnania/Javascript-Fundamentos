
// Función 
function saludar(){
    console.log('Hola Mundo');
};

saludar();

// Función con Argumentos
function saludar2(nombre){
    console.log(arguments); // Agregar argunmentos sin declararlos en la Función
    console.log('Hola ' + nombre);
};

saludar2('José', 40, true, 'Argentina');

// Función con Flecha
const saludar3 = () => {
    console.log('Hola Mundo! (con Flecha)')
};

saludar3();

// Funcion con Flecha con Argumentos
const saludar4 = (nombre) => {
    console.log('Hola ' + nombre + ' (con Flecha)')
};

saludar4('José');

// Función con Retorno
function sumar(a, b){
    return a + b;
}

console.log(sumar(1,2));

// Función con Flecha con Retorno
const sumar2 = (a, b) => {
    return a + b;
}

console.log(sumar2(3,4));

//Ejemplos

function getAleatorio() {
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());