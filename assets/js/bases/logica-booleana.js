
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

// NOT: convierte al opuesto
console.warn('Not');

console.log( !true ); // false
console.log( !false ); // true
console.log(!regresaFalse()); // true

// AND: será True si todos los valores son verdaderos
console.warn('And');

console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true
console.log(regresaTrue() && regresaFalse()); // false

// OR: será True si una condición es verdadera
console.warn('Or');

console.log(true || false); // true
console.log(false || false); // false
console.log(regresaFalse() || regresaTrue()); // true