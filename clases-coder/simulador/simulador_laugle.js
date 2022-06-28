alert("Bienvenido! A continuacion ingresa tus datos");

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

             document.write(frase);