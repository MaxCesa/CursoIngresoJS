/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let num1 = document.getElementById("txtIdLargo").value;
    let num2 = document.getElementById("txtIdAncho").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    alert((num1*2 + num2*2) * 3);
}
function Circulo () 
{
	let radio = document.getElementById("txtIdRadio").value
    radio = parseFloat(radio);

    alert(radio * Math.PI * 6);
}
function Materiales () 
{
    let num1 = document.getElementById("txtIdLargo").value;
    let num2 = document.getElementById("txtIdAncho").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let area = num1 * num2;

    alert("Se necesitan "+ (area * 2)+ " bolsas de cemento y "+ (area * 3)+ " de cal.");
}