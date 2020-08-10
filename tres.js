/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let continuar = "si";
	let nombreTitular;
	let lugar;
	let temporada;
	let cantidadAcompañantes;
	let barilocheContador = 0;
	let cataratasContador = 0;
	let saltaContador = 0;
	let lugarMasElegido;
	let titularConMasPasajerosCant = 0;
	let titularConMasPasajerosCantBandera = false;
	let titularConMasPasajerosCantNombre;
	let promedioInvierno = 0;
	let acumPersonasInvierno = 0;
	let contadorPersonasInvierno = 0;

	do {
		nombreTitular = prompt("Ingrese el nombre del titular");
		while (!(isNaN(nombreTitular))) {
			nombreTitular = prompt("Inválido. Ingrese el nombre del titular");
		}

		lugar = prompt('Ingrese destino: “bariloche”, “cataratas” o “salta”').toLowerCase();
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt('Inválido. Ingrese destino: “bariloche”, “cataratas” o “salta”').toLowerCase();
		}

		temporada = prompt('Ingrese temporada: “otoño”, “invierno”, “verano”, “primavera”').toLowerCase();
		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera") {
			temporada = prompt('Inválido. Ingrese temporada: “otoño”, “invierno”, “verano”, “primavera”').toLowerCase();
		}

		cantidadAcompañantes = parseInt(prompt("Ingrese la cantidad de acompañantes"));
		while (cantidadAcompañantes < 0 || isNaN(cantidadAcompañantes)) {
			cantidadAcompañantes = parseInt(prompt("Inválido. Ingrese la cantidad de acompañantes"));
		}

		switch (lugar) {
			case "bariloche":
				barilocheContador++
				break;
			case "cataratas":
				cataratasContador++
				break;
			case "salta":
				saltaContador++
				break;
		}

		// titular que lleva + pasajeros
		if (!(titularConMasPasajerosCantBandera) || cantidadAcompañantes > titularConMasPasajerosCant) {
			titularConMasPasajerosCant = cantidadAcompañantes;
			titularConMasPasajerosCantBandera = true;
			titularConMasPasajerosCantNombre = nombreTitular;
		}

		// promedio de personas por viaje que viajan en invierno
		if (temporada === "invierno") {
			contadorPersonasInvierno++
			acumPersonasInvierno += (cantidadAcompañantes + 1);
		}

		continuar = prompt("¿Desea agregar más datos?").toLowerCase();
	} while (continuar === "si");

	// Promedio de personas que viajan en invierno
	promedioInvierno = acumPersonasInvierno / contadorPersonasInvierno;
	// lugar más elegido
	if (barilocheContador > cataratasContador && barilocheContador > saltaContador) {
		lugarMasElegido = "Bariloche";
	} else if (cataratasContador >= barilocheContador && cataratasContador > saltaContador) {
		lugarMasElegido = "Cataratas";
	} else {
		lugarMasElegido = "Salta";
	}

	console.log("A. El lugar más elegido para viajar es " + lugarMasElegido);
	console.log("B. La persona que lleva más pasajeros se llama " + titularConMasPasajerosCantNombre + " y lleva " + titularConMasPasajerosCant + " personas.");
	console.log("C. El promedio de personas que viajan en invierno es " + promedioInvierno);
}
