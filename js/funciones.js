export const guardarContacto = (db, contacto) => {
    const existe = validarRepetidos(db, contacto)
    if (existe) {
        alert("El contacto ya existe")
    } else {
        db.setItem(contacto.id, JSON.stringify(contacto))
        window.location.href = '/'
        alert("El contacto fue registrado satisfactoriamente")
    }
}

const validarRepetidos = (db, contacto) => {
    let claves = Object.keys(db)
    for (let clave = 0; clave < claves.length; clave++) {
        let valueContacto = JSON.parse(db.getItem(claves[clave]))
        if (valueContacto.numero == contacto.numero) {
            return true
        }
    }
}

export const cargarContactos = (db, parentNone) => {
    let claves = Object.keys(db)
    for (let clave of claves) {
        let contact = JSON.parse(db.getItem(clave))
        crearContacto(parentNone, contact, db)
    }
}

const crearContacto = (parentNone, contact, db) => {
    let divContact = document.createElement('div')
    let nombreContact = document.createElement('h3')
    let numeroContact = document.createElement('p')
    let direccionContact = document.createElement('p')
    let iconoDelete = document.createElement('span')

    nombreContact.innerHTML = contact.nombre
    numeroContact.innerHTML = contact.numero
    direccionContact.innerHTML = contact.direccion
    iconoDelete.innerHTML = 'delete_forever'

    divContact.classList.add('contact')
    iconoDelete.classList.add('material-icons', 'icono')

    iconoDelete.onclick = () => {
        db.removeItem(contact.id)
        window.location.href = '/'
    }

    divContact.appendChild(nombreContact)
    divContact.appendChild(numeroContact)
    divContact.appendChild(direccionContact)
    divContact.appendChild(iconoDelete)

    parentNone.appendChild(divContact)
}