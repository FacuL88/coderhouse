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