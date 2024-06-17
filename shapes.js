// Definisikan modul
const shapes = {};

// Fungsi untuk menghitung luas persegi
shapes.luasPersegi = function(sisi) {
    return sisi * sisi;
};

// Fungsi untuk menghitung keliling persegi
shapes.kelilingPersegi = function(sisi) {
    return 4 * sisi;
};

// Fungsi untuk menghitung luas persegi panjang
shapes.luasPersegiPanjang = function(panjang, lebar) {
    return panjang * lebar;
};

// Fungsi untuk menghitung keliling persegi panjang
shapes.kelilingPersegiPanjang = function(panjang, lebar) {
    return 2 * (panjang + lebar);
};

// Export modul
module.exports = shapes;
