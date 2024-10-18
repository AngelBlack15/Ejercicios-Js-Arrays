function combinarArreglos(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }
  
  // Ejemplo de uso
  const arr01 = [1, 2, 3];
  const arr02 = [3, 4, 5];
  console.log(combinarArreglos(arr01, arr02)); // Salida: [1, 2, 3, 4, 5]
  