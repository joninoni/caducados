// Variables
const formulario=document.querySelector("#formulario");
const producto=document.querySelector("#producto");
const codigo=document.querySelector("#codigo");
const cantidad=document.querySelector("#cantidad");
const fecha=document.querySelector("#fecha");
const btnEnviar=document.querySelector(`input[type="submit"]`);
const lista=document.querySelector("#lista");

let productosCaducados=[];
// Eventos
producto.addEventListener("blur",validarEmail);
codigo.addEventListener("blur",validarEmail);
cantidad.addEventListener("blur",validarEmail);
fecha.addEventListener("blur",validarEmail);
// formulario.addEventListener("submit",crearHtml);

const caducados={
    producto:"",
    codigo:"",
    cantidad:"",
    fecha:"",
}
// Funciones
function validarEmail(e){
    if(e.target.value.trim()===""){
        console.log("no puede haber cmpos vacios");
        return
    }
    caducados[e.target.id]=e.target.value;
    productosCaducados=[...productosCaducados,caducados]
    console.log(caducados);
    console.log(productosCaducados);
    comprobarCaducados();
}
function comprobarCaducados(){
    if(Object.values(caducados).includes("")){
        btnEnviar.disabled=true
        return
    }
        btnEnviar.disabled=false
}