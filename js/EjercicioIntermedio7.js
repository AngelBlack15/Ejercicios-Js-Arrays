function todosMayores(arr, n) {
    return arr.every(num => num > n);
  }
  
  // Ejemplo de uso
  const numeros7 = [10, 20, 30];
  console.log(todosMayores(numeros7, 5)); // Salida: true
  console.log(todosMayores(numeros7, 25)); // Salida: false
  