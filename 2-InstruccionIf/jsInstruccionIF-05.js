function mostrar()
{
	//tomo la edad  
	let edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(!((edad < 18) && (edad > 12))){
		alert("la persona NO es adolescente.");
	}
	
}//FIN DE LA FUNCIÓN