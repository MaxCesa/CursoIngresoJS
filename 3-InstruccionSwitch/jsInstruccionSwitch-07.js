function mostrar()
{
	var destinoIngresado =document.getElementById("txtIdDestino").value;
	switch(destinoIngresado){
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Usuahia":
			alert("Sur");
		case "Mar del plata":
			alert("Este");
			break;
	}

}//FIN DE LA FUNCIÓN