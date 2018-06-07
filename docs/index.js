/* Acá va tu código */
// Declarar variables
const btnDecode = document.getElementById('button-deco');
const btnCod = document.getElementById('button-cod');
const mnsj = document.getElementById('root');
// Funcionalidad Boton "Codificar"
btnCod.addEventListener('click', () => {
  let txtCod = document.getElementById('txt1').value;
  let offset = document.getElementById('offset').value;
  const outCod = cipher.encode(txtCod, offset);
  mnsj.innerHTML = outCod;
}); 
// Funcionalidad Boton "Decodificar"
btnDecode.addEventListener('click', () => {
  let txtDec = document.getElementById('txt2').value;
  let offset = document.getElementById('offset').value;
  const outDec = cipher.decode(txtDec, offset);
  mnsj.innerHTML = outDec;
}); 

