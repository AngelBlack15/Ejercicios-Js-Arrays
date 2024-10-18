function reemplazarNegativos(arr) {
    return arr.map(num => num < 0 ? Math.abs(num) : num);
  }
  
  // Ejemplo de uso
  const numeros = [1, -2, 3, -4];
  console.log(reemplazarNegativos(numeros)); // Salida: [1, 2, 3, 4]
  