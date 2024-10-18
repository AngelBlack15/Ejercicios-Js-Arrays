function palabrasMasLargas(arr, n) {
    return arr.filter(palabra => palabra.length > n);
  }
  
  // Ejemplo de uso
  const palabras3 = ["casa", "automóvil", "perro", "computadora"];
  console.log(palabrasMasLargas(palabras3, 5)); // Salida: ['automóvil', 'computadora']
  