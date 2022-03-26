
// Propiedades Privadas (todavía no es un estandar, pero va en camino)

class Rectangulo {
    
    #area = 0; // '#' Propiedad Privada, para que no pueda ser modificada

    constructor(base=0, altura=0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 15);

console.log(rectangulo);