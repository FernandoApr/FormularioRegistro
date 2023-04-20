const usuarios = [
    {
        identificacion: 123456789,
        nombre: "Juan",
        apellido: "Perez",
        direccion: "Calle 123",
        ciudad: "Bogotá",
        pais: "Colombia",
        telefono: "3214567890",
        email: "juan.perez@example.com"
    },
    {
        identificacion: 987654321,
        nombre: "Maria",
        apellido: "Gomez",
        direccion: "Carrera 45",
        ciudad: "Medellín",
        pais: "Colombia",
        telefono: "119876543",
        email: "maria.gomez@example.com"
    },
    {
        identificacion: 456789123,
        nombre: "Pedro",
        apellido: "Ramirez",
        direccion: "Avenida 8",
        ciudad: "Cali",
        pais: "Colombia",
        telefono: "3004567890",
        email: "pedro.ramirez@example.com"
    }
];

const llenarTabla = () => {

    limpiarTabla();
    const tabla = document.getElementById("tabla-contenido");
    let contenido = '';

    for (let i = 0; i < usuarios.length; i++) {
        contenido += `
          <tr>
            <td>${usuarios[i].identificacion}</td>
            <td>${usuarios[i].nombre}</td>
            <td>${usuarios[i].apellido}</td>
            <td>${usuarios[i].direccion}</td>
            <td>${usuarios[i].ciudad}</td>
            <td>${usuarios[i].pais}</td>
            <td>${usuarios[i].telefono}</td>
            <td>${usuarios[i].email}</td>
          </tr>
        `;
    }

    tabla.innerHTML += contenido;
}

const registrar = () => {

    const identificacion = document.getElementById("identificacion").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const pais = document.getElementById("pais").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;



    if (identificacion && !validarCampoNumerico(identificacion)) {
        alert("El campo identificación es obligatorio y solo permite numeros.");
        return;
    }

    if (verificarIdentificacionRegistrada(identificacion)) {
        alert("Ya existe un usuario con dicha identificación.");
        return;
    }

    if (identificacion && nombre && apellido && direccion && ciudad && pais && telefono && email) {
        const usuario = {
            identificacion: identificacion,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            ciudad: ciudad,
            pais: pais,
            telefono: telefono,
            email: email
        };

        usuarios.push(usuario);
        limpiarCampos();
        llenarTabla();
    } else {
        alert("Todos los campos son obligatorios");
    }


}

const validarCampoNumerico = (campo) => {
    console.log("Entro");
    const regexNumerico = /^[0-9]+$/;
    console.log(regexNumerico.test(campo));
    return regexNumerico.test(campo);
};

const limpiarTabla = () => {
    const tabla = document.getElementById("tabla-contenido");
    const filas = tabla.getElementsByTagName("tr");
    while (filas.length > 1) {
        tabla.deleteRow(1);
    }
};

const limpiarCampos = () => {
    const identificacion = document.getElementById("identificacion");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const direccion = document.getElementById("direccion");
    const ciudad = document.getElementById("ciudad");
    const pais = document.getElementById("pais");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");

    identificacion.value = "";
    nombre.value = "";
    apellido.value = "";
    direccion.value = "";
    ciudad.value = "";
    pais.value = "";
    telefono.value = "";
    email.value = "";
};

const verificarIdentificacionRegistrada = (identificacion) => {
    return usuarios.some(objeto => objeto.identificacion === identificacion);
};