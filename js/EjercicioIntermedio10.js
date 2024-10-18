function productoElementos(arr) {
    return arr.reduce((a, b) => a * b, 1);
  }
  
  // Ejemplo de uso
  const numeros010 = [1, 2, 3, 4];
  console.log(productoElementos(numeros010)); // Salida: 24
  