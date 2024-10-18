function invertirArreglo(arr) {
  let invertido = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    invertido.push(arr[i]);
  }
  return invertido;
}

// Ejemplo de uso
const numerossss = [3, 7, 2, 9, 5];
console.log(invertirArreglo(numerossss)); // Salida: [5, 9, 2, 7, 3]
