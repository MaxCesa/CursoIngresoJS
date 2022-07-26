/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo = 0;
	var numeroMinimo = 0;
	var respuesta;
	//iniciar variables
	respuesta='si';
	numeroMaximo = parseFloat(prompt("Ingrese numero."));
	numeroMinimo = numeroMaximo;
	respuesta=prompt("desea continuar?");
	while(respuesta=="si")
	{
		numeroIngresado = parseFloat(prompt("Ingrese numero."));
		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}
		else if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
		}
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN