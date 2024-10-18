function buscarElemento(arr, valor) {
  return arr.includes(valor);
}

// Ejemplo de uso
const numeros8 = [1, 2, 3, 4, 5];
console.log(buscarElemento(numeros8, 3)); // Salida: true
console.log(buscarElemento(numeros8, 6)); // Salida: false
