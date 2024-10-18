function todosMayores(arr, n) {
    return arr.every(num => num > n);
  }
  
  // Ejemplo de uso
  const numeros = [10, 20, 30];
  console.log(todosMayores(numeros, 5)); // Salida: true
  console.log(todosMayores(numeros, 25)); // Salida: false
  