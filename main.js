// defino mi lista de contactos
let listaDeContactos = [
    primerContacto = {
        id: 1,
        nombre: 'Yerlys',
        apellido: 'Castellar',
        telefono: 300584990,
        ubicaciones: [{
            ciudad: 'Arjona',
            direccion: "Barrio nariño"
        }]
    }

]
console.log(listaDeContactos);

// funcion que permite crear un nuevo contacto
function agregarContacto(segundoContacto) {
    let existe = segundoContacto.id != 0 && segundoContacto.id > 0

    switch (existe) {
        case false:
            if (!existe) {
                let indice = listaDeContactos.length
                segundoContacto.id = indice + 1
                listaDeContactos.push(segundoContacto);
                console.log("\nEl contacto fue registrado exitosamente");
            }
            break;
        case true:
            console.log("el contacto ya existe, ingrese uno nuevo")
            break;
    }
};

// funcion que permite mostrar por consola toda nuestra lista de contactps
function imprimirContactos() {
    console.log("Lista de contactos:");
    for (var i = 0; i < listaDeContactos.length; i++) {
        console.log(listaDeContactos[i]);
    }
};
// funcion para actualizar un contacto existente en la lista
function actualizarContacto(indice, nuevoNombre) {
    if (indice !== -1) {
        listaDeContactos[indice].nombre = nuevoNombre;
        console.log("Contacto actualizado, exitosamente")
    }
};

function mostrarUnContacto(id) {
    for (let i = 0; i < listaDeContactos.length; i++) {
        if (listaDeContactos[i].id == id) {
            console.log(listaDeContactos[i])
        }
    }
}

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
    for (let i = 0; i < listaDeContactos.length; i++) {
        if (listaDeContactos[i].id == id) {
            listaDeContactos.splice(i, 1);
            console.log("el contacto fue eliminado");
        }
    }
};

const segundoContacto = new Object()
segundoContacto.id = 0
segundoContacto.nombre = 'Maria'
segundoContacto.apellido = 'Parra'
segundoContacto.telefono = 3204857664
segundoContacto.ubicaciones = [{
    ciudad: 'Cartagena',
    direccion: "Bocagrande"
},
{
    ciudad: 'Cartagena',
    direccion: "Ternera"
}
]
agregarContacto(segundoContacto);
imprimirContactos();
actualizarContacto(1, 'PAOLA')
imprimirContactos();
console.log("mostrando un solo contacto")
mostrarUnContacto(2)
borrarContacto(2);
imprimirContactos();