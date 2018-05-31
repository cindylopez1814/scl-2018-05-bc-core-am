window.cipher = {
  encode: () => {
    /* Acá va tu código */
    for (let i = 0; i < txtCod.length; i++){
      let ascii= txtCod.charCodeAt (i);    
      let code = ascii + offset;
      let result = String.fromCharCode(code); 
      return result;
    };
  },
  decode: () => {
    /* Acá va tu código */
  }
}