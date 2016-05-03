// Ejercicio #6: Operaciones matematicas

// Realizar un programa que te de la opción de la operación matemática que quieres realizar por medio de funciones


alert("Vamos a realizar 4 operaciones distíntas con dos dígitos")

var n1 = prompt("Proporciona el primer dígito")
var n2 = prompt("Proporciona el segundno dígito")

function S(n1,n2){
	
	//Resultados sin alert
	
	console.log(parseFloat(n1) + parseFloat(n2));
	console.log(parseFloat(n1) * parseFloat(n2));
	console.log(parseFloat(n1) - parseFloat(n2));
	console.log(parseFloat(n1) / parseFloat(n2));
	console.log(parseFloat(n1) % parseFloat(n2));

	// Con alert (pero dentro de la función)

	alert("El resultado de la suma es: " + (parseFloat(n1) + parseFloat(n2)));
	alert("El resultado de la multiplicación es: " + (parseFloat(n1) * parseFloat(n2)));
	alert("El resultado de la resta es: " + (parseFloat(n1) - parseFloat(n2)));
	alert("El resultado de la división es: " + (parseFloat(n1) / parseFloat(n2)));
	alert("El resultado del resto es: " + (parseFloat(n1) % parseFloat(n2)));

}

S(n1,n2)


