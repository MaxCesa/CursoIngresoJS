/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre = prompt("Ingrese nombre")
	txtIdNombre.value = nombre 
	alert(document.getElementById(nombre).value);
}

