

const formulario = document.querySelector('#formulario');

const contenido = document.querySelector('#contenido');
const listaCosas = document.querySelector('#lista-cosas');

let listado = [];





addEventListener()
function addEventListener() {

    formulario.addEventListener('submit', cargarLista);

    document.addEventListener('DOMContentLoaded', () => {
        listado = JSON.parse(localStorage.getItem('listado')) || [];

        cargarHTML();

    })






}


function cargarLista(e) {
    e.preventDefault()

    const list = document.querySelector('#list').value;


    //Validación 

    if (list === '') {

        mostrarError();
        return;
    }

    const listadoObj = {
        id: Date.now(),
        list,
    }

    listado = [...listado, listadoObj];

    cargarHTML();

    formulario.reset();



}



function mostrarError() {


    const error = document.createElement('p');
    error.textContent = 'Debe agregar contenido';
    error.classList.add('error');


    //insertarlo en el html 

    contenido.appendChild(error);


    //Borrar error 3s


    setTimeout(() => {
        error.remove();
    }, 3000);



}


function cargarHTML() {

    limpiarHTML()

    if (listado.length > 0) {
        listado.forEach(list => {

            const li = document.createElement('li');

            li.textContent = list.list;

            //Agregar al html 

            listaCosas.appendChild(li);


            //Agregar botón  de eliminar

            btnEliminar = document.createElement('a');
            btnEliminar.textContent = 'X';
            btnEliminar.classList.add('borrar-lista');

            //insertado en el html

            li.appendChild(btnEliminar);

            btnEliminar.onclick = () => {
                borrarLista(list.id);
            }












        });
    }//Sincronizar Local Storage
    sincronizarLocalStorage();
}

function sincronizarLocalStorage() {
    localStorage.setItem('listado', JSON.stringify(listado));
}

function limpiarHTML() {
    while (listaCosas.firstChild) {
        listaCosas.removeChild(listaCosas.firstChild);
    }
}



function borrarLista(id) {

    listado = listado.filter(list => list.id !== id);

    cargarHTML();

}



























