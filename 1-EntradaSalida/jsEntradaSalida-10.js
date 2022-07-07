/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let num = document.getElementById("txtIdImporte").value;
	num = parseInt(num);

	let resultado = num * 0.75;
	document.getElementById("txtIdResultado").value = resultado;
}
