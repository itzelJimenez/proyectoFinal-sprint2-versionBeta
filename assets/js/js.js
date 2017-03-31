var listas = [];
var nombreNuevaLista = document.getElementById('nombreNuevaLista');
var contenedorLista = document.getElementById('nuevasListas');

function Lista (id,nombre){
	this.id=id
	this.nombreLista = nombre
	this.elementos = []
}

function crearLista(lista){
	var id= Date.now();
 	var lista = new Lista (id,nombreNuevaLista.value);
 	listas.push(lista);
 	mostrarLista(lista);
}

function mostrarLista(lista){
	//Agregar titulo
	var section = document.createElement('section');
	var titulo = document.createElement('h2');
	var nodoTitulo = document.createTextNode(nombreNuevaLista.value);
	titulo.appendChild(nodoTitulo);
	section.appendChild(titulo);
	nuevasListas.appendChild(section);

	//Agregar el contenedor de lista ul
	var ul = document.createElement('ul');
	ul.innerText = "Tareas pendientes";
	section.appendChild(ul);
	nuevasListas.appendChild(section)

	
	
	var formulario = document.createElement('form');
	var inputText = document.createElement('input');
	inputText.type = "text";
	inputText.placeHolder = "Agrega el nombre de Lista";
	var inputButton = document.createElement('input');
	inputButton.type = "button";
	inputButton.value = "+"
	inputButton.onclick = function(){
		var li = document.createElement('li');
		var nuevoItem = this.previousSibling;
		li.innerText = nuevoItem.value;
		ul.appendChild(li);

		var elemento = nuevoItem.value;
		var arregloElementos = lista.elementos;
		arregloElementos.push(elemento);
		nuevoItem.value = " ";
		//Crear botón borrar elemento junto con li
		var botonBorrarPendiente = document.createElement('input');
		botonBorrarPendiente.type = "button";
		botonBorrarPendiente.value = "eliminar tarea";
		botonBorrarPendiente.onclick = function(){
			ul.removeChild(li);
		}
		li.appendChild(botonBorrarPendiente)
	

	}
	formulario.appendChild(inputText);
	formulario.appendChild(inputButton);
	section.appendChild(formulario);

	//Agregar botón de borrar lista
	var botonBorrarLista = document.createElement('input');
	botonBorrarLista.type = "button";
	botonBorrarLista.value = "Eliminar Lista";
	botonBorrarLista.onclick= function(){
		contenedorLista.removeChild(section);
	}
	formulario.appendChild(botonBorrarLista);
	section.appendChild(formulario);
	borrarInput();

}

function borrarInput(){
	nombreNuevaLista.value = " ";
}

/*
function agregarElemento () {
	var ul = document.createElement('ul');
	var li = document.createElement('li');
	var nuevoItem = this.previousSibling;
	var textNode = document.createTextNode(nuevoItem.value);
	li.appendChild(textNode);
	ul.appendChild(li);
	section.appendChild(ul);

}*/