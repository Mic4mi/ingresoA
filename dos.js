/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar() {
  let continuar = "si";
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumPeso = 0;
  let liquidosCarosPrecio = 0;
  let liquidosCarosBandera = false;
  let liquidosCarosMarca;
  let solidosLivianosPeso = 0;
  let solidosLivianosPesoBandera = false;
  let solidosLivianosPesoMarca;

  do {
    marca = prompt("Ingrese la marca del producto");
    precio = parseFloat(prompt("Ingrese el precio del producto"));
    while (precio <= 0 || isNaN(precio)) {
      precio = parseFloat(prompt("Inválido. Ingrese el precio del producto"));
    }

    peso = parseFloat(prompt("Ingrese el peso del producto."));
    while (peso <= 0 || isNaN(peso)) {
      peso = parseFloat(prompt("Inválido. Ingrese el peso del producto."));
    }

    tipo = prompt('Ingrese el tipo de producto: "sólido" ó "líquido"').toLowerCase();
    while (tipo != "sólido" && tipo != "líquido") {
      tipo = prompt('Inválido. Ingrese el tipo de producto: "sólido" ó "líquido"').toLowerCase();
    }

    // Peso total
    acumPeso += peso;

    // El más caro de los líquidos
    //Más liviano de los sólidos
    switch (tipo) {
      case "líquido":
        if (!(liquidosCarosBandera) || precio > liquidosCarosPrecio) {
          liquidosCarosPrecio = precio;
          liquidosCarosBandera = true;
          liquidosCarosMarca = marca;
        }
        break;
      case "sólido":
        if (!(solidosLivianosPesoBandera) || peso < solidosLivianosPeso) {
          solidosLivianosPeso = peso;
          solidosLivianosPesoBandera = true;
          solidosLivianosPesoMarca = marca;
        }
    }

    continuar = prompt("¿Desea ingresar otro producto?").toLowerCase();
  } while (continuar === "si");

  console.log("A. El peso total de la compra es: " + acumPeso);
  console.log("B. El producto líquido más caro es marca " + liquidosCarosMarca + " y cuesta $" + liquidosCarosPrecio);
  console.log("C. El producto sólido más liviano es marca " + solidosLivianosPesoMarca + " y pesa " + solidosLivianosPeso + "kg.");
}
