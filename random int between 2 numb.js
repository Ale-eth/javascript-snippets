// Numero entero aleatorio entre 2 numeros min y max

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

random(1, 50);  // 34
