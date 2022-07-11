function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	let estado = document.getElementById("estadoCivil").value;
	
	if(edad < 18 && estado != "Soltero"){
		alert("Es muy pequeño para NO ser soltero.");
	}

}//FIN DE LA FUNCIÓN