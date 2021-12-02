function calculaIgv(a = 0, b = 0) {
    return a - b;
}

function precioTotal(a) {
    return a * 1.18;
}

let precioBase = parseInt(prompt("Ingrese el precio base:")),
    precioConIgv = precioTotal(precioBase);

if (!isNaN(precioBase)) {
    alert(`El precio total es de ${precioTotal(precioBase)}`);

    alert(
        `Cálculo del IGV: precio total(${precioTotal(precioBase)}) - precio base(${precioBase}) = ${Math.round(calculaIgv(precioTotal(precioBase) - precioBase))}.aprox`
    );
} else {
    alert("Error: No ingresaste un número");
};
