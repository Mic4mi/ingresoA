/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contadorMasculino = 0;
	let contadorFemenino = 0;
	let acumEdad = 0;
	let promedioEdad;
	let mayorTemperaturaMujer = 0;
	let mayorTemperaturaMujerBandera = false;
	let mayorTemperaturaMujerNombre;

	for (let i = 0; i < 5; i++) {
		nombre = prompt("Ingrese nombre");
		while (!(isNaN(nombre))) {
			nombre = prompt("Inválido. Ingrese nombre");
		}

		temperatura = parseFloat(prompt("Ingrese la temperatura de la persona"));
		while (temperatura <= 32 || temperatura >= 44 || isNaN(temperatura)) {
			temperatura = parseFloat(prompt("Inválido. Ingrese la temperatura de la persona"));
		}

		sexo = prompt('Sexo: Ingrese "m" para másculino ó "f" para femenino.').toLowerCase();
		while (sexo != "m" && sexo != "f") {
			sexo = prompt('Inválido. Ingrese"m" para másculino ó "f" para femenino.').toLowerCase();
		}

		edad = parseInt(prompt("Ingrese la edad"));
		while (edad <= 0 || edad >= 116 || isNaN(edad)) {
			edad = parseInt(prompt("Inválido. Ingrese la edad"));
		}

		//promedio Edad
		acumEdad += edad;

		switch (sexo) {
			case "f":
				contadorFemenino++
				if (!(mayorTemperaturaMujerBandera) || temperatura > mayorTemperaturaMujer) {
					mayorTemperaturaMujer = temperatura;
					mayorTemperaturaMujerBandera = true;
					mayorTemperaturaMujerNombre = nombre;
				}
				break;
			case "m":
				contadorMasculino++
				break;
		}
	}

	promedioEdad = acumEdad / 5;

	console.log("A. Cantidad de mujeres " + contadorFemenino + ". Cantidad de hombres: " + contadorMasculino + ".");
	console.log("B. El promedio de todas las edades es de " + promedioEdad + ".");

	if (contadorFemenino === 0) {
		console.log("C. No hay mujeres.");
	} else {
		console.log("C. La mujer con mayor temperatura tiene " + mayorTemperaturaMujer + "° y se llama " + mayorTemperaturaMujerNombre);
	}

}
