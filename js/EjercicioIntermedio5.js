function buscarIndice(arr, valor) {
    return arr.indexOf(valor);
  }
  
  // Ejemplo de uso
  const numeros = [1, 2, 3, 4, 5];
  console.log(buscarIndice(numeros, 3)); // Salida: 2
  console.log(buscarIndice(numeros, 6)); // Salida: -1
  