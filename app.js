// Variables
const formulario=document.querySelector("#formulario");
const producto=document.querySelector("#producto");
const codigo=document.querySelector("#codigo");
const cantidad=document.querySelector("#cantidad");
const fecha=document.querySelector("#fecha");
const btnEnviar=document.querySelector(`input[type="submit"]`);
const lista=document.querySelector("#lista");
// Eventos
producto.addEventListener("blur",validarEmail);
codigo.addEventListener("blur",validarEmail);
cantidad.addEventListener("blur",validarEmail);
fecha.addEventListener("blur",validarEmail);
formulario.addEventListener("submit",crearHtml);
// Funciones
function validarEmail(e){
    if(e.target.value.trim()===""){
        console.log("no puede haber cmpos vacios");
        return
    }   
}


