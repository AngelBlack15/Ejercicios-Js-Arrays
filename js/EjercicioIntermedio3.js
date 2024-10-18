function palabrasMasLargas(arr, n) {
    return arr.filter(palabra => palabra.length > n);
  }
  
  // Ejemplo de uso
  const palabras = ["casa", "automóvil", "perro", "computadora"];
  console.log(palabrasMasLargas(palabras, 5)); // Salida: ['automóvil', 'computadora']
  