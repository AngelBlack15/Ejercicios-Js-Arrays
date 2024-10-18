function eliminarFalsy(arr) {
    return arr.filter(Boolean);
  }
  
  // Ejemplo de uso
  const valores = [0, "hola", false, 42, "", null];
  console.log(eliminarFalsy(valores)); // Salida: ['hola', 42]
  