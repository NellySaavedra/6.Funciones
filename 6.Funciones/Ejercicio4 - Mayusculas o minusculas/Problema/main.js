// Ejercicio #4: Mayusculas o minusculas

//Definir una función que muestre información sobre una cadena de 
//texto que se le pasa como argumento. A partir de la cadena que se le pasa, 
//la función determina si esa cadena está formada sólo por mayúsculas, 
//sólo por minúsculas o por una mezcla de ambas.

alert("Vamos a evaluar tres frases")

alert(info("TODOS CORRAN"));
alert(info("Mañana Es Un Gran Día"));
alert(info("me gusta el quesito"));

function info(Frase) {
var R = "La cadena : " + Frase + " : ";

	if(Frase == Frase.toUpperCase()) {
		R += " está formada sólo por mayúsculas";
	}
	else if(Frase == Frase.toLowerCase()) {
		R += " está formada sólo por minúsculas";
	}
	else {
		R += " está formada por mayúsculas y minúsculas";
	}
	return R;
}




