// Convierte la primer letra de cada palabra de un string en mayuscula

const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c)) =>
  c.toUpperCase());

uppercaseWords('hola me llamo ale');  // 'Hola Me Llamo Ale'
