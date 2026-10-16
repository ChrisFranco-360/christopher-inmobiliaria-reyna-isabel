console.log("¡Bienvenido a Bienes Raíces Reyna Isabel!");
let cantidad = 0;

const contador = document.getElementById("contador");
const boton = document.getElementById("agregar-acompanante");

boton.addEventListener("click", function () {
    cantidad = cantidad + 1;
    contador.textContent = cantidad;
});