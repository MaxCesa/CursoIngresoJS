function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	while(contador < 5){
		numeroIngresado = parseFloat(prompt("Ingrese numero a añadir."));
		acumulador += numeroIngresado;
		contador++;
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN