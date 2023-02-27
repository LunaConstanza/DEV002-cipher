const cipher = {
  encode: function(offset, string){
  // --------------- PRIMERA OPCIÓN UTILIZANDO ABECEDARIO ----------------
    string = string.toUpperCase();
    offset = parseInt(offset);
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let finalString = '';
    for(let i = 0; i < string.length; i++){
        const letra = string[i];
        let positionInicial;
        if (letra == " ") {
          finalString += letra;        
        } else {
          for (let i = 0; i < abc.length; i++) {
            if(letra.includes(abc[i])){
              positionInicial = i;
            }
          }
          let newPosition = (positionInicial + offset) % 26;
          finalString += abc[newPosition];
        }
    }
    return finalString;
  },
  decode: function(offset, string){
    // --------------- PRIMERA OPCIÓN UTILIZANDO ABECEDARIO ----------------
    string = string.toUpperCase();
    offset = parseInt(offset);
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let finalString = '';
    for(let i = 0; i < string.length; i++) {
      const letra = string[i];
      let positionInicial;
      if (letra == " ") {
        finalString += letra;
      } else {
        for (let i = 0; i < abc.length; i++) {
          if(letra.includes(abc[i])){
            positionInicial = i;
          }
        }
        let newPosition = ((positionInicial - offset) + 26) % 26;
        if (newPosition < 0) {
          const sumaPosition = 26 + newPosition;
          finalString += abc[sumaPosition];      
        } else {
          finalString += abc[newPosition];
        }
      }
    }
    return finalString;
  }
};



// Abecedario normal
// (x + n) % 26
// (posicion letra + valor fijo) residuo de 26
// (0 + 33) % 26
// 7

// Abecedario segun ASCII
// (x - 65 + n) % 26 + 65
// (n° de la letra ASCII - 65 + valor fijo) residuo de 26 + para obtener código ASCII
// para encontrar ubicación en el alfabeto
// (65 - 65 + 33) % 26 + 65
// 7 + 65
// 72

// const string = (texto) => {
//   const letraASCII1 = texto.charCodeAt(0);
//   console.log('1 resultado A = ',letraASCII1);
//   const suma = letraASCII1 + 7;
//   console.log(suma);
//   const letraASCII2 = String.fromCharCode(suma);
//   console.log('2 resultado A = ',letraASCII2);
// }
// string('ABC');



export default cipher;
