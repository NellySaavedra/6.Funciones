// Ejercicio #3: Ordenando numeros

// Realizar una función a la cual le envíe tres enteros 
// y los muestre ordenados de menor a mayor.

alert ("Esta es una función que se encargará de ordenar tres números de menor a mayor")

var valor1
var valor2
var valor3

valor1=prompt("Ingrese primer valor:");
valor1=parseInt(valor1);

valor2=prompt("Ingrese segundo valor:");
valor2=parseInt(valor2);

valor3=prompt("Ingrese tercer valor:");
valor3=parseInt(valor3);

alert("Los tres valores ingresados son: "+ valor1 + "," + valor2 + "," + valor3); 

function NOrdenados(a,b,c){
	
	
    if (a < b && a < c){
    	
      alert("EL numero menor es: " + a);
      
      if (b < c){
        
        alert("El númerno intermedio es: " + b);
        alert("El número mayor es: " + c)
      }
      else {
        
        alert("El númerno intermedio es: " + c);
        alert("El número mayor es: " + b)
      }
    }
    else {
      if (b < c){
      	
        alert("EL numero menor es: " + b);
        
        if (a < c){
        	
        alert("El númerno intermedio es: " + a);
        alert("El número mayor es: " + c)

        }
        else {
       
        alert("El númerno intermedio es: " + c);
        alert("El número mayor es: " + a)
        }
      }
      else {
      	
      	alert("EL numero menor es: " + c);
      	
        if (a < b){
        
        alert("El númerno intermedio es: " + a);
        alert("El número mayor es: " + b)

        }
        else
        {
        alert("El númerno intermedio es: " + b);
        alert("El número mayor es: " + a);
        }
      }
    } 
  }
NOrdenados(valor1,valor2,valor3);
