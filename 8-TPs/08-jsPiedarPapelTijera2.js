var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina){
        case 1:
            alert("empate.");
			ContadorDeEmpates++;
            break;
        case 2:
            alert("perdiste.");
			ContadorDePerdidas++;
            break;
        case 3:
            alert("ganaste.");
			ContadorDeGanadas++;
            break;
    }
	comenzar();
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina){
        case 1:
            alert("ganaste.");
			ContadorDeGanadas++;
            break;
        case 2:
            alert("empate.");
			ContadorDeEmpates++;
            break;
        case 3:
            alert("perdiste.");
			ContadorDePerdidas++;
            break;
    }
	comenzar();
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina){
        case 1:
            alert("perdiste.");
			ContadorDePerdidas++;
            break;
        case 2:
            alert("ganaste.");
			ContadorDeGanadas++;
            break;
        case 3:
            alert("empate.");
			ContadorDeEmpates++;
            break;
    }
	comenzar();
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
}