function ordenarNumeros(arr) {
  return arr.sort((a, b) => a - b);
}

// Ejemplo de uso
const numeros2 = [3, 7, 2, 9, 5];
console.log(ordenarNumeros(numeros2)); // Salida: [2, 3, 5, 7, 9]
