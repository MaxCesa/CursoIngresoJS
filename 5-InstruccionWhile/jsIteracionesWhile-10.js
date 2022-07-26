/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var contadorPositivo = 0;
	var contadorNegativo = 0;
	var sumaPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("ingrese numero"));
		switch(Math.sign(numeroIngresado)){
			case -1:
				contadorNegativo++;
				sumaNegativos += numeroIngresado;
				break;
			case 0:
				contadorCeros++;
				break;
			case 1:
				contadorPositivo++;
				sumaPositivos += numeroIngresado;
				break;
		}

		if((numeroIngresado % 2) == 0){
			contadorPares++;
		}

		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de los negativos es : "+sumaNegativos + "\n");
	document.write("la suma de los positivos es : "+sumaPositivos + "\n");
	document.write("la cantidad de positivos es : "+contadorPositivo + "\n");
	document.write("la cantidad de negativos es : "+contadorNegativo + "\n");
	document.write("la cantidad de ceros es : "+contadorCeros + "\n");
	document.write("la cantidad de numeros pares es : "+contadorPares + "\n");
	document.write("el promedio de positivos es : "+ (sumaPositivos/contadorPositivo) + "\n");
	document.write("el promedio de negativos es : "+ (sumaNegativos/contadorNegativo) + "\n");
	document.write("la diferencia entre positivos y negativos es : "+ (sumaPositivos - sumaNegativos) + "\n");
}//FIN DE LA FUNCIÓN