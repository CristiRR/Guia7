
const primerColorFondo = (event) => {
    document.body.style.backgroundColor = event.target.value;
};
const cambiarColorFondo = (color) => {
    document.body.style.backgroundColor = color;
};

const primerColorTitulos = (event) => {
    const colorSeleccionado = event.target.value;
    const titulos = document.querySelectorAll("h1");
    titulos.forEach((titulo) => {
        titulo.style.color = colorSeleccionado;
    });
};
const cambiarColorTitulos = (colorSeleccionado) => {
    const titulos = document.querySelectorAll("h1");
    titulos.forEach((titulo) => {
        titulo.style.color = colorSeleccionado;
    });
};

const primerColorParrafos = (event) => {
    const colorSeleccionado = event.target.value;
    const parrafos = document.querySelectorAll("p");
    parrafos.forEach((parrafo) => {
        parrafo.style.color = colorSeleccionado;
    });
};
const cambiarColorParrafos = (colorSeleccionado) => {
    const parrafos = document.querySelectorAll("p");
    parrafos.forEach((parrafo) => {
        parrafo.style.color = colorSeleccionado;
    });
};

let contadorAumentar = 1;
const aumentarLetra = () => {
    contadorAumentar += 0.05;
    document.body.style.fontSize = `${contadorAumentar}em`;
    document.querySelectorAll("h1, p").forEach((element) => {
        element.style.fontSize = `${contadorAumentar}em`;
    });
};

let contadorDisminuir = 1;
const disminuirLetra = () => {
    contadorDisminuir -= 0.05;
    if (contadorDisminuir > 0) { 
        document.body.style.fontSize = `${contadorDisminuir}em`;
        document.querySelectorAll("h1, p").forEach((element) => {
            element.style.fontSize = `${contadorDisminuir}em`;
        });
    }
};


const startDOM = () => {

    const buttonFondo = document.getElementById("idFondo");
    buttonFondo.addEventListener("input", primerColorFondo);
    buttonFondo.addEventListener("change", () => cambiarColorFondo(buttonFondo.value));

  
    const buttonTitulos = document.getElementById("idTitulos");
    buttonTitulos.addEventListener("input", primerColorTitulos);
    buttonTitulos.addEventListener("change", () => cambiarColorTitulos(buttonTitulos.value));

    const buttonParrafos = document.getElementById("idParrafos");
    buttonParrafos.addEventListener("input", primerColorParrafos);
    buttonParrafos.addEventListener("change", () => cambiarColorParrafos(buttonParrafos.value));

    document.getElementById("idBtnAumentar").addEventListener("click", aumentarLetra);
    document.getElementById("idBtnDisminuir").addEventListener("click", disminuirLetra);
};


document.addEventListener("DOMContentLoaded", startDOM);