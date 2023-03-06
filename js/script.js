const modalSaludo =  new bootstrap.Modal("#modal-saludo");

window.addEventListener("DOMContentLoaded", () => {
    modalSaludo.show();
});

const saludo = document.getElementById("saludo");

document.getElementById("enviar").addEventListener("click", function() {
    document.getElementById("saludo").innerHTML = "¡Hola " + document.getElementById("nombre").value + "!";
    document.getElementById("enviar").style.display = "none";
    document.getElementById("nombre").style.display = "none";
    document.getElementById("colores").style.display = "block";
});

document.getElementById("azul").addEventListener("click", function() {
    document.body.classList.add("animacion-azul");
});

document.getElementById("amarillo").addEventListener("click", function() {
    document.body.classList.add("animacion-amarillo");
});

document.getElementById("rojo").addEventListener("click", function() {
    document.body.classList.add("animacion-rojo");
});