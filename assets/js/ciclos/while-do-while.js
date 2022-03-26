
console.warn('WHILE');

const autos = ['Ford', 'Renault', 'Fiat', 'Toyota'];

// El WHILE se ejecuta hasta que la condición sea falsa (es decir, mientras sea verdadera)

let i=0;

while (i < autos.length) {
    console.log(autos[i]);
    i++;
}

// El DO WHILE ejecutará el bloque al menos una vez

console.warn('DO WHILE');

let j=0;

do {
    console.log(autos[j]);
    j++;
}while(j < autos.length);