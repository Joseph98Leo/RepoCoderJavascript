const num1 = window.prompt('Introduce el primer número: '),
      num2 = window.prompt('Introduce el segundo número: '),
      dato1 = parseInt(num1),
      dato2 = parseInt(num2);

alert(`La suma de ${dato1} y ${dato2} es: ${dato1 + dato2}
Su resta es: ${dato1 - dato2}
Su producto es: ${dato1 * dato2}
Su division es: ${(dato1 / dato2)}`);
