/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseInt(temperatura);

    alert(temperatura + " grados Fahrenheit son " + ((temperatura - 32) * (5/9)) + " centigrados.")
}

function CentigradosFahrenheit () 
{
    let temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseInt(temperatura);

    alert(temperatura + " centigrados son " + ((temperatura * (9/5)) + 32) + " grados Fahrenheit.")
}
