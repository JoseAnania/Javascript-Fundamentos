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

const mick = new Persona('Mick Jagger', 'Rolling Stones', 78);
const eddie = new Persona('Eddie Vedder', 'Pearl Jam', 60);

console.log(mick);
console.log(eddie);

mick.miEdad();
eddie.miEdad();

mick.setComidaFavorita = 'Milanesas';
console.log(mick.getComidaFavorita);


console.log('Conteo estático ' + Persona.conteo);