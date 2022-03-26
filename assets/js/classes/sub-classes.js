//Creamos una clase

class Persona {

    static conteo = 0; // Contador (cuenta en este caso las instancias de la Clase Persona)

    // Definimos las propiedades de la Clase
    nombre = ''; 
    banda = '';
    edad = '';
    comida = '';
    
    
    // Método Constructor que se va a ejecutar cuando se crea una nueva instancia de Persona
    constructor( nombre = 'Sin nombre', banda = 'Sin Código', edad = 0) { 
        
        this.nombre = nombre;
        this.banda = banda;
        this.edad = edad;

        Persona.conteo++;
    }
    // Sets y Gets (SET: establece un valor -- GET: recupera un valor)
    set setComidaFavorita (comida) {
        this.comida = comida;
    }

    get getComidaFavorita () {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }


    // Métodos de la Clase
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi banda es ${this.banda}`);
    }

    miEdad() {
        this.quienSoy();
        console.log(`${this.nombre} tiene ${this.edad}`);
    }
}

// Clase hija
class Actor extends Persona {
    // Propiedades únicas de la clase hija
    pelicula = '';

    // Constructor
    constructor(nombre, banda, edad) {
        super(nombre, banda, edad);

        this.pelicula = 'Laberinto';
    }

}

const mick = new Actor('Mick Jagger', 'Rolling Stones', 78); 

mick.quienSoy();
console.log(mick);
