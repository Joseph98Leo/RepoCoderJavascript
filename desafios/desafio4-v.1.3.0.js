class Rectangulo {
    constructor(resultado) {
        this.resultado = resultado;
    };

    calcularArea(B, H) {
        this.resultado = B * H;
    };
    calculaPerimetro(B, H) {
        this.resultado = 2 * (B + H);
    };
    resultadoFinal() {
        return this.resultado;
    };
};

function programa() {
    let num1 = parseInt(document.datos.entradaB.value);
    let num2 = parseInt(document.datos.entradaH.value);

    let obj = new Rectangulo();
    obj.calcularArea(num1, num2);
    document.write(`El área es ${obj.resultadoFinal()} <br>`);

    obj.calculaPerimetro(num1, num2);
    document.write(`El perímetro es ${obj.resultadoFinal()}`);
};

// TODO: INYECTAR EL CÓDIGO HTML EN EL INDEX.HTML DENTRO DE LA ETIQUETA BODY


{/* <h2> Cálculo Área y perímetro rectángulo </h2>

<form name="datos">
    Escribe Base: <input type="number" size="2" name="entradaB"/>
    Escribe Altura: <input type="number" size="2" name="entradaH"/>
    <input type="button" value="Pulsa aquí" onclick="programa()"/>
</form> */}
