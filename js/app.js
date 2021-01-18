

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






























// //Variables
// const formulario = document.querySelector('#formulario');
// const listaTweets = document.querySelector('#lista-tweets');
// let tweets = [];


// //Event Listeners paso 1 

// eventListeners()
// function eventListeners() {

//     //Cuando se agrega un nuevo tweet paso 1
//     formulario.addEventListener('submit', agregarTweet);

//     //Cuando el documento esté listo paso 9
//     document.addEventListener('DOMContentLoaded', () => {
//         tweets = JSON.parse(localStorage.getItem('tweets')) || [];

//         crearHTML();

//     })
// }





// //Funciones

// //paso 2
// function agregarTweet(e) {
//     e.preventDefault();

//     //Textarea donde el usuario escribe tweets paso 2.1
//     const tweet = document.querySelector('#tweet').value;


//     //validacion 2.2 

//     if (tweet === '') {
//         mostrarError('No se puede mandar un mensaje vacío');

//         return; //evita que se ejecuten mas lineas de codigo
//     }

//     //paso 4 Añadiendo tweets a la variable vacía
//     const tweetObj = {
//         id: Date.now(),
//         tweet,
//     }


//     tweets = [...tweets, tweetObj];

//     // Paso 5 una vez agregado se crea el html

//     crearHTML();

//     //paso 7 Reiniciar formulario

//     formulario.reset();




// }


// //Mostrar mensaje de error

// //paso 3 
// function mostrarError(error) {

//     const mensajeError = document.createElement('p');
//     mensajeError.textContent = error;
//     mensajeError.classList.add('error');

//     //insertado en el contenido

//     const contenido = document.querySelector('#contenido');
//     contenido.appendChild(mensajeError);

//     //Elimina la alerta despues de 3segundos paso 3.3
//     setTimeout(() => {
//         mensajeError.remove();
//     }, 3000);

// }

// //paso 5 Muestra el listado de los tweets
// function crearHTML() {
//     limpiarHTL();
//     if (tweets.length > 0) {
//         tweets.forEach(tweet => {

//             //agregar boton de eliminar paso 9

//             const btnEliminar = document.createElement('a');
//             btnEliminar.classList.add('borrar-tweet');
//             btnEliminar.textContent = 'X';


//             //Añadir funcion eliminar paso 10

//             btnEliminar.onclick = () => {
//                 borrarTweet(tweet.id);
//             }

//             //Crear el HTML
//             const li = document.createElement('li');
//             li.textContent = tweet.tweet;

//             //ASIGNAR BTN
//             li.appendChild(btnEliminar);


//             listaTweets.appendChild(li);
//         });
//     }

//     //Sincronizar storage
//     sincronizarStorage();
// }

// //paso 8
// function sincronizarStorage() {

//     localStorage.setItem('tweets', JSON.stringify(tweets));

// }

// //Elimina un tweet paso 10
// function borrarTweet(id) {
//     tweets = tweets.filter(tweet => tweet.id !== id);
//     console.log(tweets);
//     crearHTML();

// }

// //Limpiar html paso 6

// function limpiarHTL() {
//     while (listaTweets.firstChild) {
//         listaTweets.removeChild(listaTweets.firstChild)
//     }
// }