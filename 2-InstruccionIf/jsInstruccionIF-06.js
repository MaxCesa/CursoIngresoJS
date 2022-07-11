function mostrar()
{
	//tomo la edad  
	let edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad < 13){
		alert("la persona es niño.");
	}
	else if((edad < 18) && (edad > 12)){
		alert("la persona es adolescente.");
	}
	else{
		alert("la persona es adulta.");
	}
}//FIN DE LA FUNCIÓN