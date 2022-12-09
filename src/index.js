import cipher from './cipher.js';

const inputCode = document.getElementById('inputCode');
const inputDecode = document.getElementById('inputDecode');
const inputOffset = document.getElementById('offset');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const string1 = inputCode.value;
    const string2 = inputDecode.value;
    const offset = inputOffset.value;
    if (string1 && string2) {
        alert('Escriba en solo un cuadro de texto.')
    } else if (string1 && string2 == '') {
        const resultEncode = cipher.encode(offset, string1);
        inputDecode.value = resultEncode;
        inputCode.value = '';
    } else if (string2 && string1 == '') {
        const resultDecode = cipher.decode(offset, string2);
        inputCode.value = resultDecode;
        inputDecode.value = '';
    }
})

