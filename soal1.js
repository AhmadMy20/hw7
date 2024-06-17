// Import modul shapes
const shapes = require('./shapes');

// Contoh penggunaan fungsi-fungsi dari modul
console.log('Luas persegi dengan sisi 5:', shapes.luasPersegi(5));
console.log('Keliling persegi dengan sisi 5:', shapes.kelilingPersegi(5));

console.log('Luas persegi panjang dengan panjang 4 dan lebar 6:', shapes.luasPersegiPanjang(4, 6));
console.log('Keliling persegi panjang dengan panjang 4 dan lebar 6:', shapes.kelilingPersegiPanjang(4, 6));


const fs = require('fs');


fs.readFile('log.txt', 'utf-8', (err, data) => {
    if (err) {console.error(err)};

    console.log('DATA :', data);
})