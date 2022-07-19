function mostrar()
{
	var estacionIngresada =document.getElementById("txtIdEstacion").value;
	var destinoIngresado =document.getElementById("txtIdDestino").value;
	let disponible = false;
	switch(estacionIngresada){
		case "Invierno":
			if(destinoIngresado == "Bariloche"){
				disponible = true;
			}
			break;
		case "Verano":
			if(destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas"){
				disponible = true;
			}
			break;
		case "Otoño":
			disponible = true;
			break;
		case "Primavera":
			if(destinoIngresado != "Bariloche"){
				disponible = true;
			}
			break;
	}
	if(disponible){
		alert("Se viaja");
	} else{
		alert("No se viaja.");
	}

}//FIN DE LA FUNCIÓN