let numerSecreto = 0;
let intentos = 0;
let listanumeroSorteados = [];
let numeroMaximo = 10;
console.log(numerSecreto)
 function asginarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
 }

 function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos)
    if (numeroDeUsuario === numerSecreto){
        asginarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numerSecreto){
            asginarTextoElemento('p', 'EL numero Secreto es menor');
        }else{
            asginarTextoElemento('p', 'El numero Secreto es mayor');
        }intentos++;
        limpiarCaja();
    }   
    return;
 }

 function limpiarCaja(){
     document.querySelector('#valorUsuario').value = '';//si le pongo #antes de todo lo toma como el id
 }

 function generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1
   console.log(numeroGenerado);
   console.log(listanumeroSorteados);
    if(listanumeroSorteados.length == numeroMaximo){
        asginarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{

    if (listanumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listanumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
 }

 function condicionesIniciales(){
    asginarTextoElemento('h1', 'Juego del Número Secreto');
    asginarTextoElemento('p', `Ingrese un Nuevo Numero del 1 al ${numeroMaximo}:`);
    numerSecreto = generarNumeroSecreto();
    intentos = 1;
 }

 function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
 }
 condicionesIniciales();
