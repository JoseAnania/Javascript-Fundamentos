// Sobrecarga de Constructores (JS sólo permite un constructor por clase)

class Persona {

    static porObjeto ({nombre, apellido, pais}) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    obtenerInfo() {
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'José',
      apellido1 = 'Anania',
      pais1 = 'Dinamarca';

const eri = {
      nombre: 'Erica',
      apellido: 'Faure',
      pais: 'Suecia'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(eri);

persona1.obtenerInfo();
persona2.obtenerInfo();