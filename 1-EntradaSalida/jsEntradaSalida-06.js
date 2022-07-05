/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let sum1 = document.getElementById("txtIdNumeroUno").value;
	let sum2 = document.getElementById("txtIdNumeroDos").value;

	sum1 = parseInt(sum1);
	sum2 = parseInt(sum2);
	alert(sum1 + sum2);
}

