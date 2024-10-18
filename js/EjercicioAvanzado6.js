function todosUnicos(arr) {
    return new Set(arr).size === arr.length;
  }
  
  // Ejemplo de uso
  const numeros = [1, 2, 3, 4, 5];
  console.log(todosUnicos(numeros)); // Salida: true
  console.log(todosUnicos([1, 2, 2, 3])); // Salida: false
  