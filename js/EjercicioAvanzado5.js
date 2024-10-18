function eliminarDuplicados(arr) {
    return [...new Set(arr)];
  }
  
  // Ejemplo de uso
  const numeros005 = [1, 2, 2, 3, 4, 4, 5];
  console.log(eliminarDuplicados(numeros005)); // Salida: [1, 2, 3, 4, 5]
  