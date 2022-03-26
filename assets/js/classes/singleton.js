
// Un Singleton es una instancia única de la clase

class Singleton {

    static instancia; // Por el momento es Undefined
    nombre = '';

    constructor(nombre = '') {
       
        if ( !!Singleton.instancia) {// La doble negación lo convierte en un Booleano (de Undefined a Booleano)
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

// Todas las instancias apuntan a 'Ironman'

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Batman');

console.log(`El nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`El nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`El nombre en la instancia3 es: ${instancia3.nombre}`);