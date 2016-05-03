// Ejercicio #2: Numero par o impar

//Escribir el código de una función a la que se pasa como parámetro un 
//número entero y devuelve como resultado una cadena de texto que indica si 
//el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función. 


alert("Vamos a usar un a función para saber si el número ENTERO ingresado es par o impar")

var N = prompt("Introduce un número entero")
var R = ParImpar(N)

function ParImpar(N) {
	//Si el resto es igual (==) a 0 el número es "Par", de lo contraio es "Impar"
	
	if(N % 2 == 0) {
	return "Par";
	}
	else {
	return "Impar";
	}
}
alert("El número " + N + " es " + R); 





