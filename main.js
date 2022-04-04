/* //valor pasaje por seccion de destino
const seccionUno = 50; 
const seccionDos = 70;
const seccionTres = 90; 

//definir destino
let destino = prompt(`* Su saldo actual es: $80 \n\n Ingrese su destino para comprar pasaje:`);
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
    alert(`Buen viaje \n\n * Su saldo restante es: $${saldoRestante}`);
}
 */

// ! desafio clase 6

class Pasaje {
    constructor(seccion, estacion, valor){
        this.seccion = seccion;
        this.estacion = estacion;
        this.valor = valor;
    }
}
const destino = [];

// ? seccion 1
destino.push(new Pasaje('seccion1', 'Yrigoyen', 50));
destino.push(new Pasaje('seccion1', 'Avellaneda', 50));
destino.push(new Pasaje('seccion1', 'Gerli', 50));
destino.push(new Pasaje('seccion1', 'Lanus', 50));
destino.push(new Pasaje('seccion1', 'Escalada', 50));

// ? seccion 2
destino.push(new Pasaje('seccion2', 'Banfield', 70));
destino.push(new Pasaje('seccion2', 'Lomas de zamora', 70));
destino.push(new Pasaje('seccion2', 'Temperley', 70));
destino.push(new Pasaje('seccion2', 'Adrogue', 70));
destino.push(new Pasaje('seccion2', 'Burzaco', 70));
destino.push(new Pasaje('seccion2', 'Longchamps', 70));

// ? seccion 3
destino.push(new Pasaje('seccion3', 'Glew', 90));
destino.push(new Pasaje('seccion3', 'Guernica', 90));
destino.push(new Pasaje('seccion3', 'Korn', 90));


//saldo actual SUBE
let saldoActual = 80;


let compra = prompt(`* Su saldo actual es: $80 \n\n Ingrese su destino para comprar pasaje:`);

for (const precio of destino) {
    if(precio.valor > saldoActual){
        alert('Tu saldo es insuficiente');
    }else{
        alert('Buen viaje \n\n * Su saldo restante es: $ ' + (saldoActual-precio.valor))
    }
}



