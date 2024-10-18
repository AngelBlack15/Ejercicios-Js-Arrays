function algunosPares(arr) {
    return arr.some(num => num % 2 === 0);
  }
  
  // Ejemplo de uso
  const numeros = [1, 3, 5, 8];
  console.log(algunosPares(numeros)); // Salida: true
  