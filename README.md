# Calculadora Interactiva

Este proyecto es una calculadora interactiva basada en JavaScript que permite realizar operaciones básicas como suma, resta, multiplicación, división y cálculo de raíces cuadradas. Además, mantiene un historial de las operaciones realizadas.

## Características

- **Operaciones soportadas:**
  - Suma
  - Resta
  - Multiplicación
  - División
  - Raíz cuadrada
- **Validación de entradas:** Asegura que los valores ingresados sean válidos para cada operación.
- **Historial de operaciones:** Registra y muestra un historial de las operaciones realizadas durante la sesión.

## Uso

1. El usuario ingresa el primer número.
2. Selecciona la operación deseada (suma, resta, multiplicación, división o raíz).
3. Si la operación requiere un segundo número, se le solicita al usuario ingresarlo.
4. Se calcula el resultado y se muestra al usuario.
5. El usuario puede optar por realizar otra operación o finalizar.

### Validaciones importantes

- **División por cero:** Si el usuario intenta dividir por cero, se mostrará un mensaje de error.
- **Raíz cuadrada de números negativos:** No se permite calcular raíces cuadradas de números negativos.
- **Operaciones no válidas:** Si se selecciona una operación no soportada, se alerta al usuario.

## Cómo ejecutar el programa

1. Copia el código al archivo `index.html` dentro de una etiqueta `<script>` o guárdalo en un archivo JavaScript externo (por ejemplo, `calculadora.js`).
2. Abre el archivo HTML en tu navegador.
3. La calculadora se ejecutará automáticamente en el navegador, interactuando con el usuario mediante alertas y mensajes.

## Ejemplo de ejecución

1. Ingresar el número `5`.
2. Seleccionar la operación `multiplicación`.
3. Ingresar el segundo número `3`.
4. Resultado mostrado: `15`.

El historial se actualizará automáticamente con cada operación realizada.

## Créditos

Este programa fue desarrollado como un ejercicio introductorio a JavaScript y manejo de interacción con el usuario mediante `alert`, `prompt` y `confirm`.
