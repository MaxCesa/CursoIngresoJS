/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta = 0;
	contador=0;
	acumulador=0;
	respuesta = parseFloat(prompt("Ingrese valor (escriba 0 para parar)."));
	while(respuesta != 0){
		acumulador += respuesta;
		contador++;
		respuesta = parseFloat(prompt("Ingrese valor (escriba 0 para parar)."));
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN