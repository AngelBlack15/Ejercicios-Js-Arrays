function productoElementos(arr) {
    return arr.reduce((a, b) => a * b, 1);
  }
  
  // Ejemplo de uso
  const numeros = [1, 2, 3, 4];
  console.log(productoElementos(numeros)); // Salida: 24
  