/* Acá va tu código */
// Declarar variables
let txtCod = document.getElementById("txt1").value;
let txtDec = document.getElementById("txt2").value;
const btnCod = document.getElementById("button-cod");
const btnDecode= document.getElementById("button-deco");
const offset = document.getElementById("offset").value;
const mnsj = document.getElementById ("root");
// Funcionalidad Boton "Codificar"
  btnCod.addEventListener ("click", () => {
    mnsj.innerHTML = cipher.encode()
  }); 
// Funcionalidad Boton "Decodificar"


