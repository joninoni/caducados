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
    const producto=document.querySelector("#producto").value;
    const codigo=document.querySelector("#codigo").value;
    const cantidad=document.querySelector("#cantidad").value;
    const fecha=document.querySelector("#fecha").value;

    if(producto==="",codigo==="",cantidad==="",fecha===""){
        console.log("no puede haber campos vacios");
        return;
    }
    const caducado={
        producto,
        codigo,
        cantidad,
        fecha,
    }
    productosCaducados=[...productosCaducados,caducado];
    // console.log(productosCaducados);
    // crearHtml();
}
