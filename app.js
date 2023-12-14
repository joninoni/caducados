// Variables
const formulario=document.querySelector("#formulario");
const producto=document.querySelector("#producto");
const codigo=document.querySelector("#codigo");
const cantidad=document.querySelector("#cantidad");
const fecha=document.querySelector("#fecha");
const btnEnviar=document.querySelector(`input[type="submit"]`);
const lista=document.querySelector("#lista");

const caducados={
    producto:"",
    codigo:"",
    cantidad:"",
    fecha:"",
}
// Eventos
producto.addEventListener("input",validarEmail);
codigo.addEventListener("input",validarEmail);
cantidad.addEventListener("input",validarEmail);
fecha.addEventListener("input",validarEmail);
formulario.addEventListener("submit",crearHtml);
// Funciones
function validarEmail(e){
    if(e.target.value.trim()===""){
        console.log("no puede haber cmpos vacios");
        return
    }
    caducados[e.target.id]=e.target.value;
    comprobarFormulario();
}
function comprobarFormulario(){
    if(Object.values(caducados).includes("")){
        btnEnviar.disabled=true;
        return;
    }
    btnEnviar.disabled=false;
}
function crearHtml(e){
    e.preventDefault();
    const parrafo=document.createElement('p');
    parrafo.textContent=`${caducados.producto} ${caducados.codigo} ${caducados.cantidad} ${caducados.fecha}`;
    lista.appendChild(parrafo);
}
