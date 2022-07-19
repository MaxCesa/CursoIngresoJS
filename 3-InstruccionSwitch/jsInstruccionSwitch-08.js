function mostrar()
{
	var destinoIngresado =document.getElementById("txtIdDestino").value;
	switch(destinoIngresado){
		case "Bariloche":
		case "Usuahia":
			alert("Hace frio");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN