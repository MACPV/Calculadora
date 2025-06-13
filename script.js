var display = document.getElementById("resultado");

function presion(boton) {
  pantalla(boton);
  return;
}

function pantalla(valor) {
  let imprime;
  imprime = borrar(valor == "C");
  valor = borrar(valor == "C");
  imprime = display.value + valor;
  display.value = imprime;
  console.log(imprime);
}

function borrar(valor) {
  return "";
}
