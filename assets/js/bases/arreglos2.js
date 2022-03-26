
let videoJuegos=['Mario Bros', 'Mafia', 'Hitman', 'ChessMaster'];

console.log('Largo', videoJuegos.length); // Muestra el tamaño del Arreglo

let primero = videoJuegos[0]; //Muestra el primer elemento del Arreglo
let ultimo = videoJuegos[videoJuegos.length - 1];

console.log({primero, ultimo});

//Ciclo que recorre el arreglo
videoJuegos.forEach((elemento, indice, arreglo) =>{
    console.log({elemento, indice, arreglo});
})

videoJuegos.push('Pes10'); // Agregar un elemento al final del Arreglo

videoJuegos.unshift('Gta'); // Agregar un elemento al inicio del Arreglo

console.log(videoJuegos);

videoJuegos.pop(); // Borra el último elemento del Arreglo

videoJuegos.splice(1, 2); // Borra 2 elementos a partir del indice 1

console.log(videoJuegos);

let buscador=videoJuegos.indexOf('Hitman'); // Busca dentro del Arreglo
console.log(buscador);
