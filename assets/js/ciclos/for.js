
const bandas = ['Rolling Stones', 'Pearl Jam', 'Nirvana', 'Red Hot'];

console.warn('FOR');

for( let i=0; i<bandas.length; i++ ) {
    console.log(bandas[i]);
}

console.warn('FOR IN');

for( let i in bandas ) {
    console.log(bandas[i]);
}

console.warn('FOR OF');

for( let i of bandas ) {
    console.log(i);
}