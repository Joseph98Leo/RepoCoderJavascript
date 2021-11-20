// ---------- Definiendo variables...

const num1 = parseInt(prompt('Introduce el primer número: ')),
      num2 = parseInt(prompt('Introduce el segundo número: '));

// ---------- Creando condición y mostrando en pantalla

if(num1 > num2){
    alert(`El primer número "${num1}" es mayor que el segundo número "${num2}" `);
} else if (num1 < num2) {
    alert(`El segundo número "${num2}" es mayor que el primer número "${num1}"`)
} else {
    alert(`Los números son iguales`)
};