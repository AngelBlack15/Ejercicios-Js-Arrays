function encontrarObjeto(arr, propiedad, valor) {
    return arr.find(objeto => objeto[propiedad] === valor);
  }
  
  // Ejemplo de uso
  const objetos = [{ nombre: "Juan", edad: 25 }, { nombre: "Ana", edad: 30 }];
  console.log(encontrarObjeto(objetos, "edad", 30)); // Salida: { nombre: 'Ana', edad: 30 }
  