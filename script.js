var display = document.getElementById("resultado");

function presion(boton) {
  pantalla(boton);
  return;
}

function pantalla(valor) {

  if (valor == "C") {
    display.value = "";
    return;
  }

  let imprime = display.value + valor;
  display.value = imprime;
}


function borrar(valor) {
  return "";
}
