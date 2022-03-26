

const joseph = {
    nombre: 'José',
    edad: 40,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const peter = {
    nombre: 'Pedro',
    edad: 25,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

joseph.imprimir();

// Sería engorroso si tuvieramos muchos objetos repetir. Entonces haremos

function Persona(nombre, edad) { // P mayúscula!!!! (indica que servirá para crear instancias)
    
    console.log('Se ejecutó esta linea');
    
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona('María', 18); // La palabra NEW indica una nueva instancia
const melisa = new Persona('Melisa', 35);
maria.imprimir();
melisa.imprimir();

// Estas formas no se utiliza desde la llegada de POO