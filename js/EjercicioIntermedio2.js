function ordenarNumeros(arr) {
  return arr.sort((a, b) => a - b);
}

// Ejemplo de uso
const numeros = [3, 7, 2, 9, 5];
console.log(ordenarNumeros(numeros)); // Salida: [2, 3, 5, 7, 9]
