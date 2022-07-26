/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina){
        case 1:
            alert("empate.");
            break;
        case 2:
            alert("perdiste.");
            break;
        case 3:
            alert("ganaste.");
            break;
    }
    comenzar()

}//FIN DE LA FUNCIÓN
function papel()
{
    switch(eleccionMaquina){
        case 1:
            alert("ganaste.");
            break;
        case 2:
            alert("empate.");
            break;
        case 3:
            alert("perdiste.");
            break;
    }
    comenzar()

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina){
        case 1:
            alert("perdiste.");
            break;
        case 2:
            alert("ganaste.");
            break;
        case 3:
            alert("empate.");
            break;
    }
    comenzar()

}//FIN DE LA FUNCIÓN