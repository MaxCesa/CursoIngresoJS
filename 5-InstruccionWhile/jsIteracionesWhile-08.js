/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=parseFloat(prompt("Ingrese valor (Ingrese 0 para parar)."));
	while(respuesta	!= 0){
		if(respuesta > 0){
			sumaPositivos += respuesta;
		}
		else{
			multiplicacionNegativos *= respuesta;
		}
		respuesta=parseFloat(prompt("Ingrese valor (Ingrese 0 para parar)."));
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN