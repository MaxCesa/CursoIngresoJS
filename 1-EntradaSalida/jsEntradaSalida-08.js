/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
	let num1 = document.getElementById("txtIdNumeroUno").value;
	let num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	alert(num1 % num2);
}
