window.cipher = {
  encode: (txtCod, offset) => {
    /* Acá va tu código */
    let resultCode = "";
    for (let i = 0; i < txtCod.length; i++){
      let ascii = txtCod.charCodeAt (i)
      // String mayusculas
      if (ascii >= 65 && ascii <= 90) {
        let code = (ascii - 65 + parseInt(offset)) % 26 + 65;
        resultCode += String.fromCharCode(code);
      }
      // String minusculas
      if (ascii >= 97 && ascii <= 122){
        let code = (ascii - 97 + parseInt(offset)) % 26 + 97;
        resultCode += String.fromCharCode(code);
      }
    }
    return resultCode;
  },
  decode: (txtDec, offset) => {
    /* Acá va tu código */
    let resultDec = "";
    for (let i = 0; i < txtDec.length; i++){
      let asciiDec = txtDec.charCodeAt (i);
      // String mayusculas
      if (asciiDec >= 65 && asciiDec <= 90){
        let codeDec = (asciiDec + 65 - parseInt(offset)) % 26 + 65;
        resultDec += String.fromCharCode(codeDec);
      }
      // Condicion para mantener espaciado
      if (asciiDec === 32) {
        resultCode = String.fromCharCode(32);
      }
      // String minusculas
      if (asciiDec <= 122 && asciiDec >= 97 ){
        let codeDec = (asciiDec - parseInt(offset) - 122) % 26  +122;
        resultDec += String.fromCharCode(codeDec);
      }
    }
    return resultDec;
  }
};