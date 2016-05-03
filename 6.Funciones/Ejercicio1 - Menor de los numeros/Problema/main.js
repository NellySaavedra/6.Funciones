// Ejercicio #1: El menor de los numeros

// Elaborar una función a la cual le enviemos tres enteros y muestre el menor.

alert ("Usaremos una funcion para determinar cuál de tres númenos enteros es mayor.")
	
	//Las variables sólo funcionaron afuera
	var a = prompt ("Ingrese el primer número")
	var b = prompt ("Ingrese el segundo número")
	var c = prompt ("Ingrese el tercer número")
	
function Letra(a,b,c){
	
	if ((a > b) & (a > c)) {
		alert (a + " Es mayor")		
	}
	else if ((b > a) & (b > c)) {
		alert (b + " Es mayor")
	}
	else if ((c > a) & (c > b) ) {
		alert (c + " Es mayor")
	}
}
//Si no manod a llamar la funcio "Letra", ningún alert se muestra, por tanto no se sabe cuál es el resultado
Letra(a,b,c); 


