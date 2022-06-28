let pc = {
    nombre: "Facu",
    procesador: "Intel dual core",
    ram: "16GB",
    espacio: "1TB"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];


frase = `el nombre de mi p c es: <b>${nombre}</b><br>
         el procesador es: <b>${procesador}</b><br>
         la memoria ram es: <b>${ram}</b><br>
         el espacio en disco es: <b>${espacio}</b><br>
         `

         document.write(frase);
       
let frutas = ["banana", "manzana", "pera", 5, 9, "pedro"];

document.write(frutas[0]);