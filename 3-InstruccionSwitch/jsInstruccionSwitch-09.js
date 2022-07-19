function mostrar()
{
	var estacionIngresada =document.getElementById("txtIdEstacion").value;
	var locacionIngresada =document.getElementById("txtIdDestino").value;
	let precio = 15000;
	switch(estacionIngresada){
		case "Invierno":
			switch(locacionIngresada){
				case "Bariloche":
					precio *= 1.2;
					break;
				case "Cataratas":
				case "Cordoba":
					precio *= 1.1;
					break;
				case "Mar del Plata":
					precio *= 0.8;
			}
			break;
		case "Verano":
			switch(locacionIngresada){
				case "Bariloche":
					precio *= 0.8;
					break;
				case "Cataratas":
				case "Cordoba":
					precio *= 1.1;
					break;
				case "Mar del Plata":
					precio *= 1.2;
			}
			break;
		case "Otoño":
		case "Primavera":
			if(locacionIngresada != "Cordoba"){
				precio *= 1.1;
			}
			break;
	}

	alert("Precio del viaje: $" + precio);

}//FIN DE LA FUNCIÓN