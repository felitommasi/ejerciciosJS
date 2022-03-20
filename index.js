//comprobacion de edad para acceso
//algoritmo condicional 
/* let nombre = prompt('ingresa tu nombre');
let edad = prompt('ingresa tu edad');
edad = parseInt(edad);
let confirmacion = prompt('¿confirmas que sos mayor de 18? si/no');

if ((edad >= 18) && ((confirmacion == 'si') || (confirmacion == 'SI'))){
    alert('Bienvenido' + " " + nombre);
}else if ((edad < 18) || ((confirmacion == 'no') || (confirmacion == 'NO'))){
    alert('acceso prohibido');
}else if ((nombre != " ") || (edad != " ") || (confirmacion != " ")){
    alert('no ingresaste algun dato, volve a intentar');
} 
else{
    alert('ERROR');
} */

//Desafio - crear un algoritmo usando un ciclo

let numero = parseInt(prompt('ingrese un numero para ver tabla de multiplicacion en la consola'));

for (let i = 0; i <= 10; i++){
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}
