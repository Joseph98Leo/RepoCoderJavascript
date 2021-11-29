// El programa pide al usuario ingresar un número y el programa calcula el factorial de este número.

let num = parseInt(prompt('Ingrese un número: ')),
    result = 1;

if (isNaN(num) || num < 0) {
    alert('Error: No ingresaste datos válidos')
} else {

    for (let i = num; i > 0; i--) {
        result *= i;
    }

    alert(`El factorial de ${num} es ${result}`)

}
