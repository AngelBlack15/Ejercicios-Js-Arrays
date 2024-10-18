function todosUnicos(arr) {
    return new Set(arr).size === arr.length;
  }
  
  // Ejemplo de uso
  const numeros006 = [1, 2, 3, 4, 5];
  console.log(todosUnicos(numeros006)); // Salida: true
  console.log(todosUnicos([1, 2, 2, 3])); // Salida: false
  