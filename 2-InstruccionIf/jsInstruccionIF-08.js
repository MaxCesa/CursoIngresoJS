function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	let estado = document.getElementById("estadoCivil").value;

	if(edad > 17 && estado == "Soltero"){
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN