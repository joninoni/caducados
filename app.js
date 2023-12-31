// Variables
const formulario=document.querySelector("#formulario");
const btnEnviar=document.querySelector(`input[type="submit"]`);
const lista=document.querySelector("#lista");
let productosCaducados=[];
// Eventos;
listaEventos();
function listaEventos(){
    formulario.addEventListener("submit",agragarCaducado);

    document.addEventListener("DOMContentLoaded",()=>{
        productosCaducados=JSON.parse(localStorage.getItem("caducados")) || [];
        crearHtml();
    })
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
    crearHtml();
    formulario.reset();
}
function crearHtml(){

    limpiarHtml();

    if(productosCaducados.length > 0){
        productosCaducados.forEach( caducado => {
            const btnEliminar=document.createElement("a");
            btnEliminar.textContent="X";
            btnEliminar.onclick = ()=>{
                eliminarCaducado(caducado.codigo);
            }
            const parrafo = document.createElement('p');
            parrafo.textContent=`${caducado.producto} ${caducado.codigo} ${caducado.cantidad}
            ${caducado.fecha}`;
            parrafo.appendChild(btnEliminar);
            lista.appendChild(parrafo);
        })
    }
    sincronizarHtml();
}
function sincronizarHtml(){
    localStorage.setItem("caducados",JSON.stringify(productosCaducados));
}
function eliminarCaducado(codigo){
    productosCaducados=productosCaducados.filter( caducado => caducado.codigo !==codigo);
    crearHtml();
}
function limpiarHtml(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
}