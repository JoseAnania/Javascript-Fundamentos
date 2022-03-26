
function crearPersona(nombre, apellido) {
    return{
        nombre,
        apellido,
    }
}

const persona = crearPersona('José', 'Anania');

console.log(persona);

// Flecha

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});

const persona2 = crearPersona2('Mick', 'Jagger');

console.log(persona2);

// Ejemplos

function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(true, 'José', false, 'Hola', 123);