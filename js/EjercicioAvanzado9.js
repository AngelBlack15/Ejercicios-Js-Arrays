function contarFrecuencia(arr) {
    return arr.reduce((contador, valor) => {
      contador[valor] = (contador[valor] || 0) + 1;
      return contador;
    }, {});
  }
  
  // Ejemplo de uso
  const numeros009 = [1, 2, 2, 3, 3, 3];
  console.log(contarFrecuencia(numeros009)); // Salida: { '1': 1, '2': 2, '3': 3 }
  