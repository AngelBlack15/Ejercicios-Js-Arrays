function aplanarArreglo(arr) {
    return arr.flat();
  }
  
  // Ejemplo de uso
  const anidado = [1, [2, 3], [4, 5]];
  console.log(aplanarArreglo(anidado)); // Salida: [1, 2, 3, 4, 5]
  