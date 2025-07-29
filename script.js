var display = document.getElementById("resultado");

function presion(boton) {
  pantalla(boton);
  return;
}

let num1;
let num2;
let operador;
let espera = false;

function pantalla(valor) {
  if (valor == "C") {
    display.value = "";
    return;
  }

  if (valor == "+") {
    num1 = parseInt(display.value);
    operador = "+";
    display.value = "";
    return;
  }

  if (valor == "-") {
    num1 = parseInt(display.value);
    operador = "-";
    display.value = "";
    return;
  }

  if (valor == "*") {
    num1 = parseInt(display.value);
    operador = "*";
    display.value = "";
    return;
  }

  if (valor == "/") {
    num1 = parseInt(display.value);
    operador = "/";
    display.value = "";
    return;
  }

  if (valor == "=") {
    num2 = parseInt(display.value);
    let resultado;
    if (operador == "+") {
      resultado = num1 + num2;
    }
    if (operador == "-") {
      resultado = num1 - num2;
    }
    if (operador == "*") {
      resultado = num1 * num2;
    }
    if (operador == "/") {
      if (num2 == 0) {
        resultado = "No puede ser cero";
      } else {
        resultado = num1 / num2;
      }
    }
    display.value = resultado;
    return;
  }
  display.value += valor;
}

function numActivo(espera) {}

function setNum1(numero) {
  num1 = numero;
}

function setNum2(numero) {
  num2 = numero;
}

function getNum1() {
  return num1;
}

function getNum2() {
  return num2;
}
function borrar(valor) {
  return "";
}
