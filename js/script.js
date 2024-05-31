let pantalla = document.getElementById("pantalla");
let operacionActual = "";
let valorAnterior = "";

function agregarNumero(num) {
  pantalla.value += num;
}

function operacion(op) {
  operacionActual = op;
  valorAnterior = pantalla.value;
  pantalla.value = "";
}

function calcular() {
  let valorActual = pantalla.value;
  let resultado;

  switch (operacionActual) {
    case "+":
      resultado = parseFloat(valorAnterior) + parseFloat(valorActual);
      break;
    case "-":
      resultado = parseFloat(valorAnterior) - parseFloat(valorActual);
      break;
    case "*":
      resultado = parseFloat(valorAnterior) * parseFloat(valorActual);
      break;
    case "/":
      resultado = parseFloat(valorAnterior) / parseFloat(valorActual);
      break;
  }

  pantalla.value = resultado;
  operacionActual = "";
}

function borrar() {
  pantalla.value = "";
  operacionActual = "";
  valorAnterior = "";
}
