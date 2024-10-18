function sumaAcumulada(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  
  // Ejemplo de uso
  const numeros = [1, 2, 3, 4];
  console.log(sumaAcumulada(numeros)); // Salida: 10
  