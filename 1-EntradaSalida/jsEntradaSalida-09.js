/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let num = document.getElementById("txtIdSueldo").value;
	num = parseInt(num);

	let resultado = num * 1.10;
	document.getElementById("txtIdResultado").value = resultado;
}
