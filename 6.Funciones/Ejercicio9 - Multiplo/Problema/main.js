// Ejercicio #9: Multiplos de un numero

//Programa que calcula los 10 primeros múltiplos del número que queramos, utilizando una función que retorna parámetro.


// BASE DEL EJERCICIO
n = prompt("Seleccione un número ENTERO para obtener sus 10 primeros múltipos");
n = parseInt(n);

for (var i = 2; i <= 10; i++) {
	n1 = (n*i)
	alert("Los múltipos de: " + n + " son: " + n1);
}


