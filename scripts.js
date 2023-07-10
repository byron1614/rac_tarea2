// Obtener elementos del DOM mediante su ID
let titulo = document.getElementById('tituloPagina');
let boton = document.getElementById('botonClick');

console.log(titulo)

// Obtener elementos del DOM mediante selectores
let enlace = document.querySelector('a');
let formulario = document.querySelector('form');
console.log(enlace)

// Modificar el cont del primer párrafo
let parrafo1 = document.getElementById('parrafo1');
parrafo1.textContent = 'Texto cambiado desde JavaScript';
console.log(parrafo1)

// Crear un nuevo elemento <p>
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un nuevo párrafo creado dinámicamente';
console.log(nuevoParrafo)

// Obtener el contenedor 'cajaTexto' y añadir el nuevo párrafo
const cajaTexto = document.getElementById('caja');
cajaTexto.appendChild(nuevoParrafo);
console.log(cajaTexto)

// Añadir un evento de escucha al botón
boton.addEventListener('click', function() {
  console.log('¡Haz hecho clic en el botón!');
});

let cont = document.getElementById('caja')
let cont2 = document.getElementById('caja2')
console.log(cont2)

console.log(cont.childNodes)
console.log(cont.children[3].innerText = 'ESTO SE MODIFICO POR EL SUBBTE RAC CHAMALE')

/*crear un atributo */
console.log(enlace.getAttribute('href'))
/*Establece el valor de un atributo en el elemento indicado.*/
formulario.setAttribute('action', 'www.facebook.com')
console.log(formulario.getAttribute('action'))


let crear = document.querySelectorAll('meta')


for (const cre of crear) {
console.log(cre.getAttribute('content'))
}

formulario.action = "www.google.com"

console.log(enlace.href)


/* reemplazar una clase por otra*/
console.log(titulo.getAttribute('class').replace('text-primary','text-danger'))
console.log(titulo.classList)

/*eliminar una clase y agregar*/
titulo.classList.add('fs-4')
titulo.classList.remove('text-danger')
titulo.classList.add('text-info')
//segun su cont/
console.log(cont.textContent)
console.log(cont.innerText)
console.log(cont.innerHTML)
console.log(cont.outerHTML)
/* si se desea reemplazar en cont html por un formulario*/
cont2.innerHTML = "<table></table>"

const formuuu = document.createElement('form')
const textoss = document.createElement('h2')

textoss.textContent = "ES UN TIPO DE TEXTO  QUE SE ACABA DE CREAR EN JS"
textoss.classList.add('text-warning', 'fw-semibold')
//*
cont.appendChild(formulario)
cont.appendChild(textoss)
/***/
console.log(cont.firstChild)
console.log(cont.firstElementChild)
console.log(cont.lastChild)
console.log(cont.lastElementChild)
console.log(cont.nextElementSibling)
console.log(cont.nextSibling)
console.log(cont.previousElementSibling.previousElementSibling)
console.log(cont.parentElement)

