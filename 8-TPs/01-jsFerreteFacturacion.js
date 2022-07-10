/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let num1 = document.getElementById("txtIdPrecioUno").value;
    let num2 = document.getElementById("txtIdPrecioDos").value;
    let num3 = document.getElementById("txtIdPrecioTres").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    alert(num1 + num2 + num3);
}
function Promedio () 
{
    let num1 = document.getElementById("txtIdPrecioUno").value;
    let num2 = document.getElementById("txtIdPrecioDos").value;
    let num3 = document.getElementById("txtIdPrecioTres").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    alert((num1 + num2 + num3)/3);
}
function PrecioFinal () 
{
    let num1 = document.getElementById("txtIdPrecioUno").value;
    let num2 = document.getElementById("txtIdPrecioDos").value;
    let num3 = document.getElementById("txtIdPrecioTres").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    alert((num1 + num2 + num3)*1.21);
}