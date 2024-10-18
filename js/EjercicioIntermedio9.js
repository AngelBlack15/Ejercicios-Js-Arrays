function sumaAcumulada(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  
  // Ejemplo de uso
  const numeros09 = [1, 2, 3, 4];
  console.log(sumaAcumulada(numeros09)); // Salida: 10
  