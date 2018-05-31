window.cipher = {
  encode: (txtCod, offset) => {
    /* Acá va tu código */
    let resultCode = "";
    for (let i = 0; i < txtCod.length; i++){
      let code = (txtCod.charCodeAt (i) - 65 + parseInt(offset)) % 26 + 65;
      resultCode += String.fromCharCode(code);
    }
    return resultCode;
  },
  decode: (txtDec, offset) => {
    /* Acá va tu código */
    let resultDec = "";
    for (let i = 0; i < txtDec.length; i++){
      let asciiDec = txtDec.charCodeAt (i);
      let codeDec = (asciiDec + 65 - parseInt(offset)) % 26 + 65;
      resultDec += String.fromCharCode(codeDec);
    }
    return resultDec;
  }
}