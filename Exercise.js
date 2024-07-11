// Ejercicio 1
// let numeroUno = 20
// let numeroDos = 8

// if(numeroDos<numeroUno){
//     console.log("Numero 1, es mayor que numero 2");
// }

// Ejercicio 2
// let numeroUno = 26
// let numeroDos = 26

// if(numeroUno===numeroDos){
//     console.log("El numero uno y el numero 2 son iguales.");
// }else{
//     console.log("El numero uno y el numero dos son diferentes");
// }

// Ejercicio 3
// let numeroUno = 26
// let numeroDos = 26

// if(numeroUno > numeroDos){
//     console.log( "El numero uno es mayor que el numero dos");
// }else if(numeroUno< numeroDos){
//     console.log("El numero uno es menor que el numero uno");
// }else{
//     console.log("El numero uno y el numero dos son iguales");
// }

// Ejercicio 4
// let numeroUno = 5
// let numeroDos = 8
// let numeroTres = 3

// if(numeroUno<numeroDos&&numeroUno<numeroTres){
//     console.log("Numero uno es menor que dos y tres");
// }else if(numeroDos<numeroUno&&numeroDos<numeroTres){
//     console.log("numero dos es menor que uno y tres");
// }else{
//     console.log("numero tres es menor que dos y uno");
// }


// Ejercicio 5

// let personaUno = (prompt("ingrese su nombre"))
// let personaDos= (prompt("ingrese su nombre"))
// let alturaPeronaUno = parseInt(prompt("ingrese su altura"))
// let alturaPeronaDos = parseInt(prompt("ingrese su altura"))
// let EdadPersonaUno = parseInt(prompt("ingrese su edad"))
// let EdadPersonaDos = parseInt(prompt("ingrese su edad"))

// if(alturaPeronaUno>alturaPeronaDos){
//     console.log(personaUno+" es mal alto "+personaDos) 
// }else{
//     console.log(personaDos+" es mal alto "+personaUno);
// }if(EdadPersonaUno>EdadPersonaDos){
//     console.log(personaUno+" es mayor que "+personaDos);
// }else{
//     console.log(personaDos+" es mayor que "+personaUno);
// }

// Ejercicio 6
// let nombreConductor = (prompt("Ingrese su nombre"))
// let edadConductor = (prompt("ingrese su edad"))
// let alturaConductor = (prompt("Ingrese su altura en cm"))
// let visionConductor = (prompt("Ingrese su nivel de vision de 1 a 10"))

// if((edadConductor>=18)&&(alturaConductor>150)&&(visionConductor>=8)){
//     console.log(nombreConductor+" Apto para conducir");
// }else{
//     console.log(nombreConductor+" No apto para conducir");
// }

// Ejercicio 7
// let nombrePersona = (prompt("Ingrese su nombre"))
// let pasePersona = (prompt("Mencione si su pase es vip o normal"))
// let entradaPersona = (prompt("Mencione si tiene o no tiene entrada"))


// if((nombrePersona == "samir")||(pasePersona=="vip")){
//     console.log("Bienvenido");
//     if(entradaPersona == si){
//         let utilizarEntrada = (prompt("¿Desea utilizarla?"))
//        if(utilizarEntrada==si)
//         console.log("Bienvenido");
//         }
// }else if((nombrePersona!= "samir")||(pasePersona=="normal")||(entradaPersona=="no")){
//     let comprarEntrada = (prompt("¿Desea Comprar la entrada?"))
//     if(comprarEntrada="no")
//         console.log("Hasta luego");
//     if(comprarEntrada == "si")
//         console.log("¿cuanto dinero tiene?")
//     let cuantoDinero = (prompt("Ingrese la cantidad de dinero"))
//     if(cuantoDinero>=1000)
//         console.log("Bienvenido");
//     if(cuantoDinero<1000)
//         console.log("No tienes dinero suficiente");
// }else{
//     console.log("Hasta luego");
// }

// Ejercicio 8
let numeroIncognita = 7
let numeroIngresado = (prompt("Ingrese su numero"))



if (numeroIngresado === numeroIncognita) {
    console.log("Ganaste");

} else {
    if(numeroIngresado>numeroIncognita){
        alert("Tu numero es mayor, vuelve a intentarlo")
    }else{
        alert("Tu numero es menor, vuelve a intentarlo")
    }

    numeroIngresado = (prompt("Segundo intento"))
    if(numeroIngresado>numeroIncognita){
        alert("Tu numero es mayor, vuelve a intentarlo")
    }else{
        alert("Tu numero es menor, vuelve a intentarlo")
    }
    numeroIngresado = (prompt("Tercer intento"))
    if(numeroIngresado==numeroIncognita){
        alert("Ganaste")
    }else{
        alert("Lo sentimos, vuelve a jugar")
    }

}






// Ejercicio 9
// let edad = (prompt("Ingresa tu edad"))

// if(edad<=12){
//     console.log("Eres un infante");
// }else if((edad>12)&&(edad<18)){

//         console.log("Eres un adolecente");
// }else if((edad>18)&&(edad<45)){
//         console.log("Eres un mayor joven");
//  }else if((edad>45)&&(edad<99)){
//         console.log("Eres un anciano");
//  }
// else{
//     console.log("En realidad tienes "+edad+" años?");
// }

// Ejercicio 10
// let jugadorUno = (prompt("Jugador uno. Ingrese piedra papel o tijera"))
// let jugadorDos = (prompt("Jugador dos. Ingrese piedra papel o tijera"))

// if ((jugadorUno == "piedra") && (jugadorDos == "tijera")) {
//     console.log("Gana jugador uno");
// } else if ((jugadorUno == "piedra") && (jugadorDos == "papel")) {
//     console.log("Gana jugador dos");

// } else if ((jugadorUno == "tijera") && (jugadorDos == "papel")) {
//     console.log("Gana Jugador uno");

// } else if ((jugadorUno == "tijera") && (jugadorDos == "piedra")) {
//     console.log("Gana jugador dos");
// } else if ((jugadorUno == "papel") && (jugadorDos == "piedra")) {
//     console.log("Gana jugador uno");
// } else if ((jugadorUno == "papel") && (jugadorDos == "tijera")) {
//     console.log("Gana jugador dos");
// } else if ((jugadorUno == "tijera") && (jugadorDos == "tijera") || ((jugadorUno == "papel") && (jugadorDos == "papel"))||((jugadorUno=="piedra") && (jugadorDos=="piedra"))) {
//     console.log("Empate");
// }else{
//     console.log("Es trampa");
// }
// Ejercicio 11

// let colorCamisa = (prompt("Ingrese el color de su camisa"))

// switch (colorCamisa) {
//     case "blanco":
//         console.log("Falta de color");
//         break;
//     case "negro":
//         console.log("Falta de color");
//         break;
//     case "verde":
//         console.log("Color de la naturaleza");
//         break;
//     case "azul":
//         console.log("El color del agua");
//         break;
//     case "amarillo":
//         console.log(" El color del sol");
//         break;
//     case "rojo":
//         console.log("El color del fuego");
//         break;
//     case "marron":
//         console.log("Color de la tierra");
//         break;

//     default:
//         console.log("Excelente elección, no lo teníamos pensado.");
//         break;
// }


// Ejercicio 12
// let numeroUno =parseInt(prompt("Ingrese el primer numero para realizar la suma"))
// let numeroDos =parseInt(prompt("Ingrese el primer dos para realizar la suma"))
// let resultado =(numeroUno+numeroDos)

// console.log("Su resultado es "+resultado+".");

// Ejercicio 13
// let primerNombre = (prompt("Ingrese su nombre"))
// let primerApellido = (prompt("Ingrese su apellido"))
// let numeroId = (prompt("Ingrese su numero de id"))
// let altura = (prompt("Ingrese su altura"))
// let Sexo = (prompt("Ingrese su sexo M para masculino y F para femenino"))


// console.log("Primer Nombre:"+primerNombre+", Primer Apellido:"+primerApellido+", Numero de id:"+numeroId+", Altura:"+altura+", Sexo: "+Sexo+". ");
// if (confirm("¿Es correcta la informacion?")) {
//     console.table([primerNombre])
//     console.table([primerApellido])
//     console.table([numeroId])
//     console.table([altura])
//     console.table([Sexo])
//     console.log("Registro exitoso");
//   }else{
//     console.log("Vuelva en intentar en 1 mes");
//   }