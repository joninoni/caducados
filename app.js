// Variables
const formulario=document.querySelector("#formulario");
const btnEnviar=document.querySelector(`input[type="submit"]`);
const lista=document.querySelector("#lista");
let productosCaducados=[];
// Eventos;
listaEventos();
function listaEventos(){
    formulario.addEventListener("submit",agragarCaducado);
}
// Funciones
function agragarCaducado(e){
    e.preventDefault();
    console.log("agregando caducado");
}
