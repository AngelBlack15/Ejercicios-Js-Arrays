function sumaElementos(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// Ejemplo de uso
const numeros = [3, 7, 2, 9, 5];
console.log(sumaElementos(numeros)); // Salida: 26
