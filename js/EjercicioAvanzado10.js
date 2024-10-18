function combinarArreglos(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }
  
  // Ejemplo de uso
  const arr1 = [1, 2, 3];
  const arr2 = [3, 4, 5];
  console.log(combinarArreglos(arr1, arr2)); // Salida: [1, 2, 3, 4, 5]
  