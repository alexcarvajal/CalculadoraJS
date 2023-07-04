//esto agrega el valor de los botones a la pantalla
const agregar = (valor) =>{
    document.getElementById("pantalla").value += valor;
} 
//esto borra el valor de la pantalla
const borrar = () =>{
    document.getElementById("pantalla").value = "";
}
//esto evalua la operacion
const calcular = () =>{
    let resultado = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = resultado;
}
