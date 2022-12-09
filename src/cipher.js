const cipher = {
  encode: function(offset, string){
  // --------------- PRIMERA OPCIÓN UTILIZANDO ABECEDARIO ----------------
    string = string.toUpperCase();
    offset = parseInt(offset)
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let finalString = '';
    for(let i = 0; i < abc.length; i++){     // hay error en el orden que entra el cifrado
      if(string.includes(abc[i])){
        console.log();
        let newPosition = (i + offset) % 26;
        console.log(newPosition);
        finalString += abc[newPosition];
      }
    }
    console.log(finalString);
    return finalString;
  },
  decode: function(offset, string){
    // --------------- PRIMERA OPCIÓN UTILIZANDO ABECEDARIO ----------------
    string = string.toUpperCase();
    offset = parseInt(offset)
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let finalString = '';
    for(let i = 0; i < abc.length; i++){     // hay error en el orden que entra el decifrado
      if(string.includes(abc[i])){
        console.log(i);
        let newPosition = ((i - offset) + 26) % 26;
        console.log(newPosition);
        finalString += abc[newPosition];
      }
    }
    console.log(finalString);
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
