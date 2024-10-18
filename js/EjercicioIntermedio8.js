function algunosPares(arr) {
    return arr.some(num => num % 2 === 0);
  }
  
  // Ejemplo de uso
  const numeros08 = [1, 3, 5, 8];
  console.log(algunosPares(numeros08)); // Salida: true
  