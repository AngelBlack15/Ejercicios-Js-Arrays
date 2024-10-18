function buscarElemento(arr, valor) {
  return arr.includes(valor);
}

// Ejemplo de uso
const numeros9 = [1, 2, 3, 4, 5];
console.log(buscarElemento(numeros9, 3)); // Salida: true
console.log(buscarElemento(numeros9, 6)); // Salida: false
