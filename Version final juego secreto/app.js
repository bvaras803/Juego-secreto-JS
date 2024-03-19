// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un numero del 1 al 10'; //con documento.querySelector se inicializa la variable, variable que despues se convierte en objeto
// y puede hacer diferentes cosas o modificar las etiquetas del html

let numeroSecreto = 0; // al momento de declarar las funciones siempre tiene que llevar parentesis, siempre.
//las funciones pueden ir dentro de las variables tambien
// console.log(numeroSecreto); // alcance global porque esta afuera de la funcion
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elementos,texto) { //Parametros de la funcion
    let titulo = document.querySelector(elementos); //DOM document Model Object
    titulo.innerHTML = texto;  //los metodos usan parametros por eso se ponen parentesis
}

console.log(numeroSecreto);

function verificarIntento() { //una funcion realiza una accion, la encapsula y la declara la funcion en JS y se ejecuta o se lleva a cabo la accion en HTML son dos estados
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); // una forma de llamar un input de un usuario es otorgandole en el html un id, en caso de que existan mas inputs
    // y el punto value porque retorna el objeto completo y para este caso solo se necesita el valor del input
    console.log(intentos);
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroUsuario); // el consolelog para verificar tiene que ser dentro de la funcion si no arroja error
    // console.log(typeof(numeroUsuario));
    // console.log(numeroUsuario === numeroSecreto);

    
    if(numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos > 1) ? 'Intentos' : 'Intento'}, felicidades!`); 
        document.getElementById('reiniciar').removeAttribute('disabled');//siempre "disable en pasado disabled"
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero es menor');
        } else {
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;    
        borrarCaja();
    }
    return;
}

function borrarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
            } else {
             if (listaNumerosSorteados.includes(numeroGenerado)) { //includes chequea y devuelve un boolean
            return generarNumeroSecreto(); //recursividad la funcion se llamara a ella misma si es que se repiten los numeros
            //hasta que salga de ella
        
       
            }  else {
                listaNumerosSorteados.push(numeroGenerado); // si el numero no esta en la lista lo pushea al final de la lista
                return numeroGenerado;
                }   
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego Del Numero Secreto'); // De esta forma se llama la variable y como
//modificamos la funciona para que quedara generica y puede volver a ser usada en cualquier momento
//aqui es donde se ponen los paramentros que modificara
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`); // De esta forma se llama la variable
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    borrarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //iniciarlizar numeros de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}    

condicionesIniciales();


// //Hoisting JS llama a las variables y las funciones primero que a todo lo demas, en caso de que se utilizen antes


//como saber la ultima posicion de un arreglo console.log(numerosSortedos[numerosSorteados.length-1])