/* Acá va tu código */
// Declarar variables
const btnDecode= document.getElementById("button-deco");
const btnCod = document.getElementById("button-cod");
let mnsj = document.getElementById ("root");
// Funcionalidad Boton "Codificar"
btnCod.addEventListener ("click", () => {
  let txtCod = document.getElementById("txt1").value;
  const offset = document.getElementById("offset").value;
  const outCod = window.cipher.encode(txtCod, offset);
  mnsj.innerHTML = outCod;
}); 
// Funcionalidad Boton "Decodificar"
btnDecode.addEventListener ("click", () =>{
  let txtDec = document.getElementById("txt2").value;
  const offset = document.getElementById("offset").value;
  const outDec = window.cipher.decode(txtDec, offset);
  mnsj.innerHTML = outDec;
});

