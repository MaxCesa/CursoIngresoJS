function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota = Math.floor((Math.random() * 10)+1);
	if(nota < 4){
		alert("Vamos, la proxima se puede.");
	}
	else if(nota == 9 || nota == 10){
		alert("Excelente.");
	}else{
		alert("Aprobo.");
	}

}//FIN DE LA FUNCIÓN