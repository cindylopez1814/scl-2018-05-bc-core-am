window.cipher = {
  encode: () => {
    /* Acá va tu código */
    for (let i = 0; i < txtCod.length; i++){
      let ascii = txtCod.charCodeAt (i);    
      let code = ascii + offset;
      return String.fromCharCode(code); 
    };
  },
  decode: () => {
    /* Acá va tu código */
    for (let i = 0; i < txtDec.length; i++){
      let asciiDec = txtDec.charCodeAt (i);
      let codeDec = asciiDec - offset;
      return String.fromCharCode(codeDec);
    }
  }
}