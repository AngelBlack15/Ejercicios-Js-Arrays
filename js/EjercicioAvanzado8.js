function esPalindromo(cadena) {
    const normalizada = cadena.toLowerCase().replace(/[\W_]/g, '');
    return normalizada === normalizada.split('').reverse().join('');
  }
  
  // Ejemplo de uso
  console.log(esPalindromo("A man, a plan, a canal: Panama")); // Salida: true
  console.log(esPalindromo("Hola mundo")); // Salida: false
  