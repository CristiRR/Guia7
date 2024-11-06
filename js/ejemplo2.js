document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.forms["frmRegistro"];
    const button = document.getElementById("btnRegistro");

    const modal = new bootstrap.Modal(document.getElementById("idModal"), {});
    const bodyModal = document.getElementById("idBodyModal");

    const recorrerFormulario = function () {
        let totText = 0;
        let totRadio = 0;
        let totCheck = 0;
        let totDate = 0;
        let totSelect = 0;
        let totFile = 0;
        let totPass = 0;
        let totEmail = 0;

        let elementos = formulario.elements;
        let totalElementos = elementos.length;

        for (let index = 0; index < totalElementos; index++) {
            let elemento = elementos[index];
            let tipoElemento = elemento.type;
            let tipoNode = elemento.nodeName;

            if (tipoElemento == "text" && tipoNode == "INPUT") {
                console.log(elemento);
                totText++;
            } else if (tipoElemento == "password" && tipoNode == "INPUT") {
                console.log(elemento);
                totPass++;
            } else if (tipoElemento == "email" && tipoNode == "INPUT") {
                console.log(elemento);
                totEmail++;
            } else if (tipoElemento == "radio" && tipoNode == "INPUT") {
                console.log(elemento);
                totRadio++;
            } else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
                console.log(elemento);
                totCheck++;
            } else if (tipoElemento == "file" && tipoNode == "INPUT") {
                console.log(elemento);
                totFile++;
            } else if (tipoElemento == "date" && tipoNode == "INPUT") {
                console.log(elemento);
                totDate++;
            } else if (tipoNode == "SELECT") {
                console.log(elemento);
                totSelect++;
            }
        }

        // Crear tabla DOM
        const table = document.createElement("table");
        table.classList.add("table", "table-striped");

        const tbody = document.createElement("tbody");

        const addRow = (label, value) => {
            const tr = document.createElement("tr");
            const tdLabel = document.createElement("td");
            const tdValue = document.createElement("td");
            tdLabel.textContent = label;
            tdValue.textContent = value;
            tr.appendChild(tdLabel);
            tr.appendChild(tdValue);
            tbody.appendChild(tr);
        };

        addRow("Total de input [type='text']", totText);
        addRow("Total de input [type='password']", totPass);
        addRow("Total de input [type='radio']", totRadio);
        addRow("Total de input [type='checkbox']", totCheck);
        addRow("Total de input [type='date']", totDate);
        addRow("Total de input [type='email']", totEmail);
        addRow("Total de select", totSelect);

        table.appendChild(tbody);
        bodyModal.innerHTML = ""; // lo de antes
        bodyModal.appendChild(table);
        modal.show();
    };

    const validarFormulario = (event) => {
        event.preventDefault();

        let valid = true;
        let mensajes = [];

        // si se deja en blanco 
        const camposRequeridos = ["idNombre", "idApellidos", "idFechaNac", "idCorreo", "idPassword", "idPasswordRepetir"];
        camposRequeridos.forEach(id => {
            const campo = document.getElementById(id);
            if (campo.value.trim() === "") {
                valid = false;
                mensajes.push(`El campo ${campo.previousElementSibling.textContent} no puede estar vacío.`);
            }
        });

        // fehcas
        const fechaNac = document.getElementById("idFechaNac").value;
        if (new Date(fechaNac) > new Date()) {
            valid = false;
            mensajes.push("La fecha de nacimiento no puede ser mayor a la fecha actual.");
        }

        // para el correp 
        const correo = document.getElementById("idCorreo").value;
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correo)) {
            valid = false;
            mensajes.push("El correo electrónico no es válido.");
        }

        // para las contras
        const password = document.getElementById("idPassword").value;
        const passwordRepetir = document.getElementById("idPasswordRepetir").value;
        if (password !== passwordRepetir) {
            valid = false;
            mensajes.push("Las contraseñas no coinciden.");
        }

        // para los intereses
        const intereses = ["idCkProgramacion", "idCkBD", "idCkRedes", "idCkSeguridad"];
        const interesSeleccionado = intereses.some(id => document.getElementById(id).checked);
        if (!interesSeleccionado) {
            valid = false;
            mensajes.push("Debe seleccionar al menos un interés.");
        }

        // los de bloque
        const carreraSeleccionada = document.querySelector('input[name="idRdCarrera"]:checked');
        if (!carreraSeleccionada) {
            valid = false;
            mensajes.push("Debe seleccionar una carrera.");
        }

        const pais = document.getElementById("idCmPais").value;
        if (pais === "Seleccione una opcion") {
            valid = false;
            mensajes.push("Debe seleccionar un país de origen.");
        }

        if (valid) {
            recorrerFormulario();
        } else {
            alert(mensajes.join("\n"));
        }
    };

    formulario.addEventListener("submit", validarFormulario);
});
