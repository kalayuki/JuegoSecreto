/*let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);*/

/* antes de utilizar funcion asignaTextoElemento
let titulo = document.querySelector('h1');
titulo.innerHTML= "Juego del numero secreto"

let parrafo = document.querySelector('p');
parrafo.innerHTML= "Indica un numero del 1 al 10";

*/

//__________________________________________________________________________________________

//Variable ************


// se puede crear una variable para que devuelva una funcion /
let numerosecreto =0;
//Variable de intentos 
let intentos=0;
//Creamos nuestro array para que luego de no acertar y poner nuevo juego , no se repita el mismo numero
let listaNumeroSorteado =[];
//Creamos una variable de numeros maximos para ingresar a nuestro array 
let numeroMaximo = 10;


//___________________________________________________________________________________________
//Funciones ****************

//Asigna texto a un elemento desde una funcion 

function asignarTextoElemento(elemento , texto) {

let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML= texto;
return;

};

function intentoUsuario() {

    alert("Hizo click en el boton")
    return
};

function verificarIntento() {
    // Capturar el valor del input y convertirlo a número
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //Creamos condicional para que cambie el texto segun lo ocurra 

    if (numeroDeUsuario===numerosecreto) {
     
        //Llamamos a la funcion de insertar texto

        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos==1? "intento":"itentos"}`);
        //Boton juego nuevo luego de acertar , utilizamos el removeAttibute, que remueve el atrubuto del boton, el atributo disabled, que es que esta desabilitado para que este el boton habilitado

         document.getElementById('reiniciar').removeAttribute('disabled')

    } else{//Cuando el usuario no acierta
        if (numeroDeUsuario>numerosecreto){
            asignarTextoElemento('p',`El numero secreto es menor ${numeroDeUsuario}`)
        }else{
            asignarTextoElemento('p',`El numero secreto es mayor ${numeroDeUsuario}`)
        }
        intentos++
        limpiarCaja()
    }
    return
  }

  //Funcion para limpiar el input despues de no acertar

  function limpiarCaja() {
    //No es necesario declarar una variable , let valorCaja= document.querySelector('#valorUsuario');valorCaja.value="";
    //Se puede hacer de la siguiente manera debito a que lo toma desde el ID
    document.querySelector('#valorUsuario').value='';
    
    
  }
  function condicionesIniciales() {

    //Formas de llamar a la funcion y le pasamos los parametros que son los elementos y el texto , como ejemplo el h1

     asignarTextoElemento('h1', 'Juego del numero secreto');
     asignarTextoElemento('p', `Indicar nimero del 1 al ${10}`);
     //General el numero random , llamamos a la variable de numero secreto
     numerosecreto = generarNumeroSecreto();
     //Inicializar el numero de intentos, llamamos a la variable de intentos
     intentos=1
    
  }

   //Funcion de la variable numeroSecreto 
function generarNumeroSecreto() {
    //En vez de retornarlo directamente como lo haciamos antes ahora creamos una variable para poder
    //ver el numero creado  [antes :return Math.floor(Math.random()*10)+1;]

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado)


    //Si ya sorteamos todos los numeros 
    //Esto surge por problemas de rcursividad 

    if (listaNumeroSorteado.length == numeroMaximo) {
        //Si llegamos al numero maximo aparecera el siguiente mensaje
         asignarTextoElemento('p','Ya se sortearon todos los numeros posibles ')

    }else{
        ///***  si no llegamos al numero maximo , seguimos jugando 

    //Si el numero generado esta incluido en la lista 
    // Cuando ponemos el array utilizamos el metodo includes , que recorrera el array para ver si el numero ya esta o no en nuesra lista

    if (listaNumeroSorteado.includes(numeroGenerado)){
      //La funcion se puede llamar a si misma para generar un nuevo numero
        return generarNumeroSecreto()
        

    }else {

        // Si no esta tambien lo agregamos con el metodo push
        listaNumeroSorteado.push(numeroGenerado)
        return numeroGenerado
    }
    }
}

  //Funcion para el boton juego nuevo reinicializamos el juego 

  function reiniciarJuego() {
    //limpiar la caja , llamamos a la funcion limpiar caja
       limpiarCaja();
    //Indicar mensaje de intervalo de numeros , llamamos a la funcion mensaje iniciales ,
    // Se genera un nuevo numero aleatio
    // Se inicia la variable intentos nuevamente en 1
    //Para todo esto llamamos a la funcion condicionesIniciales 
       condicionesIniciales();
    //desabilitar el boton de nuevo juego, en este caso no importa si utilizamos queryselector en vez getById
    //En este caso para volver a desabilitarlo necesitamos insertale nuevamente el atributo siable
    //Para hacer esto utiliamos setAttribute que contiene dos parametros , uno de ellos es el 
    //atributo que le queremos colocar y en true , es decir veradero 
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    

  }

 
condicionesIniciales()

//__________________________________________________________________________________________
//Desafio 2
/*
//Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo() {

    console.log("Hola mundo")
    return
}

holaMundo()

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

//Variable
let nombreUsuario ="emilia"
let holaNombre= holaMundoNombre(nombreUsuario)
//Funcion
function holaMundoNombre (nombre){
    
    return ("hola " ,nombre)
}
 console.log(holaNombre)

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

//Variable 
let numeroIngresado = 4;
let calcularDoble= numeroDoble(numeroIngresado)
//Funcion
function numeroDoble(numero) {
    return (numero*2);
}

console.log(calcularDoble);

//Crear una función que reciba tres números como parámetros y devuelva su promedio.

//Variables

let numero1= 3;
let numero2=6;
let numero3 =9;
let calcularPromedio= promedio(numero1,numero2,numero3)

//Funcion

function promedio(numero1, numero2, numero3) {

    return ((numero1+numero2+numero3)/3);
    
};

console.log(calcularPromedio)

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
//Variable
let valorNumero = 4;
let valorNumero2= 8;
let calcularMayorOMenor = valorNumeroMayoroMenor(valorNumero,valorNumero2)

//Funcion 

function valorNumeroMayoroMenor(numero1,numero2) {

    return(numero1>numero2 ? `El valor de ${numero1} es mayor que ${numero2}`
    :`El valor de ${numero1} es menor que ${numero2}`);

};

console.log(calcularMayorOMenor)

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo
//Variable
let numeroAMultiplica= 2;
let calcularMultiplicacion= multiplicar(numeroAMultiplica)
//Funcion

function multiplicar(valor) {

    return(valor*valor);
    
};

console.log(calcularMultiplicacion)*/



/*-________________________________________________________________________________________
//DESAFIO 3

//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

let imc = calculoDeImc(55,1,50);

function calculoDeImc(peso,altura) {

    let cuenta=peso/(altura*altura);
    return cuenta
};

console.log(imc);


//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

let numero = parseInt(5);
let resultado = calculoFactoria(numero);

function calculoFactoria(numero) {

    if (numero === 0 || numero ===1 ){
         return 1;

    }else {
        return numero * calculoFactoria (numero -1);
    }
    
}

console.log(resultado);


//Crea una función que convierta un valor en dólares,
// pasado como parámetro, y devuelva el valor equivalente en 
//reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
//Para esto, considera la cotización del dólar igual a R$4,80.

let monedaReales= parseInt(1);
let monedaDolares=(4.8);
let calculoDeConversion = calculoRealesADolares(monedaReales,monedaDolares);


function calculoRealesADolares(reales,dolares) {

    let calculo = reales*dolares;
    return calculo
    
};



console.log(calculoDeConversion)




//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//utilizando la altura y la anchura que se proporcionarán como parámetros.

//Variables 

let datoAltura= 20;
let datoAnchura= 20;
let resultadoArea= calculoDelArea(datoAltura,datoAnchura);


//Funciones 

 function asignarTexto(elemento,texto) {
     //asignamos el elemento y el texto
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;   
    
 };

 function calculoDelArea(altura,anchura) {
     let calculo= altura*anchura;

     asignarTexto('h1',`El area de la sala es  ${calculo} metros`)
     return 
 };


//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
let mensajeTabla="";
let numeroMultiplica =5;
let resultadoMultiplicacion= tablaDeMultiplicar(numeroMultiplica);

function tablaDeMultiplicar(numero){

    for (i = 0 ; i <=10; i++){

        let resultado = numero * i;

        asignarTextoMutiplicacion('p',`${numeroMultiplica} x ${i} = ${resultado}`);

    }
};
//Para que se forme la tabla de multiplicar se forme lo saque de la IA
function asignarTextoMutiplicacion(selector, texto) {
    mensajeTabla += texto + '\n';
    document.querySelector(selector).textContent = mensajeTabla;
  };



*/
 //________________________________________________________________________________________________
/*
 //Desafio 4

 //Crea una lista vacía llamada "listaGenerica".

 let listaGenerica = [];

 //Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
 //con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

 let lenguagesDeProgramacion = ['javaScript', 'c', 'c++','kotlin', 'python'];

 //Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('Golang');


//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
//Para que se vea en forma de lista

function verLista(lista) {
   //Utilizamos el ciclo for para que este recorra toda la lista
   for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    
    console.log(lenguagesDeProgramacion[i]);
    
   }

    
    
}

verLista();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function verLustainversa(lista) {

    for (let i = lenguagesDeProgramacion.length -1 ; i = 0; i++) {
    
    console.log(lenguagesDeProgramacion[i]);
    
   }
    
}

verLustainversa()

//Crea una función que calcule el promedio de los elementos en una lista de números.

let numeros= [1,5,7,];
let resultadoPromedio = calcularMedia (numeros)

function calcularMedia (listadeNumeros){
    //Inicialisamos la suma en 0
    let suma =0
    //Utilizamos el ciclo for para que este recorra todo el array
    for (let i = 0; i < listadeNumeros.length; i++) {
        //Sumamos todos los elementos del array
        suma += listadeNumeros[i];
        
    }return suma/listadeNumeros.length
}

console.log(resultadoPromedio)


//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function listadeMayorAMenor(lista){
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length -1; i++){
      if(lista[i] > mayor){
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i]
      }
    }
  
    console.log(`${mayor}, es el mayor`);
    console.log(`${menor}, es el menor`);
  }
  
  
  listadeMayorAMenor(numeros);

  let elemento = 5
  let encontrar = encontrarIndiceElemento(numeros,elemento)

  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  console.log(encontrar)*/