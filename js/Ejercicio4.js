function invertirArreglo(arr) {
  let invertido = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    invertido.push(arr[i]);
  }
  return invertido;
}

// Ejemplo de uso
const numeros = [3, 7, 2, 9, 5];
console.log(invertirArreglo(numeros)); // Salida: [5, 9, 2, 7, 3]
