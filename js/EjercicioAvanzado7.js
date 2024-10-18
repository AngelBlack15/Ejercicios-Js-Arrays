function numeroMayorMultidimensional(arr) {
    return Math.max(...arr.flat());
  }
  
  // Ejemplo de uso
  const numeros007 = [[1, 2], [3, 4], [5, 6]];
  console.log(numeroMayorMultidimensional(numeros007)); // Salida: 6
  