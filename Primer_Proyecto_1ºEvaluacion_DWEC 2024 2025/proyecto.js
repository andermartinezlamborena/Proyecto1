// Historial de operaciones
let historial = [];

// Función principal de la calculadora
function calculadora() {
    let continuar = true;

    while (continuar) {
        alert("Bienvenido a la introduccion a la calculadora, imagina que es una calculadora habitual")
        alert("Primero introduces el numero despues seleccionas la operacion y dependiendo de cual sea se pedira que ingreses el segundo numero")
        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let operacion = prompt("Seleccione la operación: suma, resta, multiplicación, división, raíz").toLowerCase();

        // Si la operación es raíz, no pedimos un segundo número
        let num2 = operacion !== "raiz" ? parseFloat(prompt("Ingrese el segundo número:")) : null;

        if (!validarEntrada(num1, num2, operacion)) {
            alert("Input inválido, intente de nuevo.");
            continue;
        }

        let resultado = realizarOperacion(num1, num2, operacion);
        if (resultado !== null) {
            alert(`Resultado: ${resultado}`);
            historial.push({
                operacion: operacion,
                resultado: resultado
            });
            mostrarHistorial();
        }

        // Preguntamos al usuario si quiere realizar otra operación
        continuar = confirm("¿Desea realizar otra operación?");
    }
}

// Funcion para validar la entrada 
function validarEntrada(num1, num2, operacion) {
    // Comprobamos con isNaN si el primer parametro es 
    if (isNaN(num1)) return false;

    if (operacion !== "raiz" && isNaN(num2)) {
        return false;
    }

    if (operacion === "division" && num2 === 0) {
        alert("Error: División por cero.");
        return false;
    }

    if (operacion === "raíz" && num1 < 0) {
        alert("Error: No se puede calcular la raíz cuadrada de un número negativo.");
        return false;
    }

    // Validación de operación
    const operacionesPermitidas = ["suma", "resta", "multiplicacion", "division", "raiz"];
    if (!operacionesPermitidas.includes(operacion)) {
        alert("Operación no valida. Vuelva a intentarlo.");
        return false;
    }

    return true;
}

// Realizar la operación
function realizarOperacion(num1, num2, operacion) {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            return num1 / num2;
        case "raiz":
            return Math.sqrt(num1);
        default:
            return null;
    }
}

// Mostrar historial
function mostrarHistorial() {
    let historialTexto = "Historial de operaciones:\n";
    historial.forEach((item, index) => {
        historialTexto += `Operación ${index + 1}: ${item.operacion} = ${item.resultado}\n`;
    });
    alert(historialTexto);
}

// Iniciar calculadora
calculadora();
