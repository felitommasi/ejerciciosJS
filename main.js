//valor pasaje por seccion de destino
const seccionUno = 50; 
const seccionDos = 70;
const seccionTres = 90; 

//definir destino
let destino = prompt('Ingrese su destino para comprar pasaje:' + '\n' + '* Su saldo actual es de $80');
let precioPasaje = destino;

if ((destino == 'yrigoyen') || (destino == 'avellaneda') || (destino == 'gerli') || (destino == 'lanus') || (destino == 'escalada')){
    precioPasaje = seccionUno;
}else if ((destino == 'banfield') || (destino == 'lomas de zamora') || (destino == 'temperley') || (destino == 'adrogue') || (destino == 'burzaco') || (destino =='longchamps')){
    precioPasaje = seccionDos;
}else if ((destino == 'glew') || (destino == 'guernica') || (destino == 'korn')){
    precioPasaje = seccionTres;
}else{
    alert('el destino ingresado no existe');
}

//saldo actual SUBE
let saldoActual = 80;

//compra pasaje
function compraPasaje(_valor1,_valor2){return saldoActual-precioPasaje}
const saldoRestante = compraPasaje(saldoActual,precioPasaje);

if (saldoRestante < 0){
    alert('Su saldo es insuficiente')
}else if (saldoRestante >= 0){
    alert('Buen viaje' + '\n' + `* Su saldo restante es: $${saldoRestante}`);
}