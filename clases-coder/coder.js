/* ALGORITMO CON WHILE */

/* let nombre = prompt("Ingrese su nombre para ingresar");

while (nombre != "Facu") {
    alert("Nombre incorrecto");

    nombre = prompt("Para acceder ingrese nombre correcto");
}

alert(`hola ${nombre}`);
 */
/* ALGORITMO CON IF */

/* alert("Para entrar al bar debera ingresar su edad");

let num = parseInt(prompt("A continuacion ingrese su edad"));

if (num >= 18) {
    alert("Podes pasar");
}
else if (num < 18) {
    alert("Los menores no pueden ingresar");
} */

/* FUNCION CON CONDICIONAL IF */

/* function saludar() {    
    let saludo = prompt("Hola Facu, ¿Como estuvo tu dia?")
    if (saludo === "bien") {
        alert("Que bueno!");
    }else if (saludo === "mal") {
        alert("Que pena");
    }
}

saludar(); */

/* BUCLE FOR */

/* let numero = parseInt(prompt("ingrese un numero"));

for (let index = 1; index <= 10; index++) {
    let resultado = numero * index;
    alert(numero + " X " + index + " = " + resultado);
} */


/* ESTRUCTURA DE UNA FUNCION  */

/* function mensaje(){
    console.log("hola a todos");
}

mensaje(); */

/* function pedirDato(){
    let nombre = prompt("Hola ingresa tu nombre");
    alert("el nombre ingresado es: " + nombre)
}

pedirDato(); */

/* let apellido = "laugle";

{
    let nombre = "facu";
    console.log(nombre);
}

console.log(apellido); */
/* 
let num1 = parseInt(prompt("Ingrese numero para sumar"));
let num2 = parseInt(prompt("Segundo numero para sumar"));

const suma = (num1, num2) => num1 + num2;

let resultado = suma(num1, num2);

alert(resultado); */


/* OBJETOS */

/* /* /* Funcion constructora */

/* function Paciente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
};

const paciente1 = new Paciente("Facundo", "Laugle");
const paciente2 = new Paciente("german", "leiner");


console.log(paciente1.nombre); 
console.log(paciente2.nombre);  */


/* function Alumno(objeto) {
    this.nombre = objeto.nombre;
    this.edad = objeto.edad;
    this.acudiente = objeto.acudiente;
};

const alumno1 = new Alumno({nombre: "damian", edad: 32, acudiente: "claudia"});

console.log(alumno1.acudiente);
 */

/* const persona = {
    nombre: "andres",
    edad: 36,
    domicilio: "av melian 3880"
};

for(const propiedad in persona){
    console.log(persona[propiedad]);
} */

/* class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    hablar(){
        console.log("hablando");
    }
}

const persona1 = new Persona("andres", 33);
console.log(persona1);

persona1.hablar(); */

/* SIMULADOR */

/* alert("Bienvenido! A continuacion ingresa tus datos");

function iniciar() {
    let usuario = prompt("Ingrese su nombre de usuario");
    
    while (usuario != "Facundo") {

        alert("el usuario ingresado no es correcto");
       
        let nombre = prompt("Para acceder ingrese el nombre correcto");
       
        if (nombre != "Facundo") {
            alert("Vuelve a ingresar tus datos");
        }else{
            alert(`Hola ${nombre}. A continuacion ingresa tu contraseña.`);
            break;
        }
    }

    let password = prompt("ingrese su contraseña");
        
    if (password != "madafaka") {
            alert("La contraseña no es la correcta");
        } else {
            alert("Bienvenido al sitio");
    }        
}


iniciar();

let pc = {
    nombre: "Facu",
    procesador: "intel",
    memoria: "1TB",
    disco: "1TB",
};

let nombre = pc ["nombre"];
let procesador = pc ["procesador"];
let memoria = pc ["memoria"];
let disco = pc ["disco"];

let frase = `el nombre de mi pc es: <b>${nombre}</b><br>
             el procesador de mi pc es: <b>${procesador}</b><br>
             la memoria de mi pc es: <b>${memoria}</b><br>
             el disco de mi pc es: <b>${disco}</b><br>`

             document.write(frase); */