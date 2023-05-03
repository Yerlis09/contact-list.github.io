import {guardarContacto, cargarContactos} from './js/funciones.js'

const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const btnAddContact = document.querySelector('.btn-add-contact')

const contactList = document.querySelector('.contact-list')

const db = window.localStorage

btnAddContact.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto)
}

cargarContactos(db, contactList)

