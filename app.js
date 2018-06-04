// preguntando nombre y apellido
var name = prompt("Cuál es tu nombre y apellido");
// obteniendo primera Iniciales
var firstInitial = name.slice(0,1);
// buscando position de segundo caracter
var secondInitialPosition = name.indexOf(" ")+1;
//Obteniendo segunda inicial
var secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);
//mostrando las Iniciales
document.write("Tus iniciales son " + firstInitial.toUpperCase() + secondInitial.toUpperCase() );
