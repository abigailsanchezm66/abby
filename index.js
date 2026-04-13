//*EJERCICIO 1Crear un array llamado meses y que almacene el nombre de los doce meses del año.Mostrar por pantalla los doce nombres utilizando la función console.log().
function ejercicio1() {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        console.log(meses);
}
//*EJERCICIO 2A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios",2];Determinar cual de los dos elementos de texto es mayorUtilizando exclusivamente los dos valores booleanos del array, determinar los operadoresnecesarios para obtener un resultado true y otro resultado falseDeterminar el resultado de las cinco operaciones matemáticas realizadas con los doselementos numéricos
function ejercicio2() {
    var valores = [true, 5, false, "hola", "adios", 2];
    var texto1 = valores[3]; // "hola"
    var texto2 = valores[4]; // "adios"
}
//*EJERCICIO 3Completar las condiciones de los if del siguiente script para que los mensajes se muestrensiempre de forma correcta:
function ejercicio3() {
    
if(texto1 > texto2){
     console.log("El texto mayor es:", texto1, ".")
console.log("El texto menor es:", texto2, ".")
    }
    {}
var verdadero = valores[0]
 var falso = valores [2]
 console.log("resultado verdadero:", resultadotrue);
    console.log("resultado falso:", resultadofalso);
{
}
    var numero1 = 5;
var numero2 = 8;
if(numero1<numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
console.log("numero1 es negativo o distinto de cero");
}
if(++numero1 < numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
}

//*EJERCICIO 4:El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemáticosencillo que se basa en obtener el resto de la división entera del número de DNI y el número23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array deletras//*
 //*protn = variable Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es laA. Con estos datos, elaborar un pequeño script que:Almacene en una variable el número de DNI indicado por el usuario y en otra variable laletra del DNI que se ha indicado.En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando queel número proporcionado no es válido y el programa no muestra más mensajes.Si el número es válido, se calcula la letra que le corresponde según el método explicadoanteriormente.Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si nocoinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no escorrecta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNIson correctos.//*

 function ejercicio4() {

var numeroDNI = parseInt(prompt("Introduce tu número de DNI:"));
var letraUsuario = prompt("Introduce la letra de tu DNI:");

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (numeroDNI < 0 || numeroDNI > 99999999) {
    console.error("El número proporcionado no es válido.");
} 
else {
    var resto = numeroDNI % 23;
    var letraCalculada = letras[resto];

    if (letraCalculada !== letraUsuario.toUpperCase()) {
        alert("La letra que ha indicado no es correcta.");
    } else {
        alert("El número y la letra de DNI son correctos.");
    }
}
 }

function ejercico5 () {
//*EJERCICIO 5:El factorial de un número entero n es una operación matemática que consiste en multiplicatodos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a:5! = 5 x 4 x 3 x 2 x 1 = 120Utilizando la estructura for, crear un script que calcule el factorial de un número entero.//*

var numero = 5; 
var resultado = 1;
for (var i = numero; i > 0; i--) {
    resultado = resultado * i;
}
console.log("El factorial de " + numero + " es: " + resultado);
document.writeln("<h2>El factorial de " + numero + "! es: " + resultado + "</h2>");

}

//*EJERCICIO 6=Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.Mostrar por pantalla el resultado devuelto por la función.

function ejercicio6() {

if (valor%2==0){} //Si el if da verdadero luego es par.

let par = 0;
let inpar = 0;

for(let i=1; i<11; i++){

let num = parseInt(prompt("ingrese el ", i ,"º numero"))

if (num % 2 == 0){

    par++
}

else if (num % 2 == 1){

    inpar++
}
}

console.log("cantidad de valores Inpares", inpar)
console.log("cantidad de valores Pares", par)

//*EJERCICIO 7=Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. === comparacion estricta
 function ejercicio7() {
pront = texto 
texto = promp("Definir y comparar texto")
    var texto= promt("ingrese algo menos un numero");
    if (!isNan(texto) || texto == null || texto ==" "){
        console.log("denegado")
    }
}else{
if (textp===texto.toUpperCase){
    document.writeIn("esta escrito en mayuscula");
    }
}else if{(texto=== texto.tolower(ad)){}
    document.writeln("esta escrito con minuscula");
}
 }else{
    document.writeIn("es una mezclaaaa");
 }
 //EJERCICIO 10=Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la funciónMath.random para obtener números aleatorios entre 1 y 6 para cada uno de loslanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array elnúmero de apariciones de dicha suma, repitiendo 36.000 veces esta operación.
function ejercicio10() {
 let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0]
 for (let i=0; i <36000; i++){

    let dado1= Math.floor(Math.random()*6)+1;
    let dado2= Math.floor(Math.random()*6)+1;
    let suma= dado1 + dado2;

    arr[suma] = arr[suma] +1;
 }

 console.log(arr);

 for (let j = 2; j < arr.length; j++) {
    console.log("El numero: "+j+" salio "+arr[j]+" veces")
 }
}


//*EJERCICIO 9=Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), qumuestra por pantalla las propiedades de la persona.Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y elmétodo registrar().Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y elmétodo asignar()Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamientode la jerarquía.

function ejejercicio9 (params){
    function persona (nombre,edad,genero) {
        this.nombre= nombre;
        this.edad= edad;
        this.genero=genero;
    }
    persona.prototype.obtDeralles= function(){
     console.log(`'nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}'`)
    };
    function estudiante(nombre, edad, genero.curso, grupo)
    persona.call(this, nombre,edad,genero);
    this.curso= this.curso;
    this.grupo= this.grupo;
}
 //this=

 estudiante.prototype= Object.create(persona.prototype)
   estudiante. prototype.constructor= estudiante;

   estudiante.prototype.registrar= fuction(){

    console.log(`${this.nombre} ha sido registrado en el curso 
        ${this.curso}, grupo ${this.curso}, grupo ${this.grupo}.`);
   }


   // dni promt datos palabra sacar espaios  replaseALL split ("") se convierte array reverse metodo arrays join ("")
   
   function ejercicio8() {


var frasePalidromo = parseInt(prompt("Introduce tu nfrase palidromo:"));
var letraPalidromo = prompt("Introduce la palabra pelidromo");

var letras = "La ruta nos aporto otro paso natural"
   }