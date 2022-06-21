function encode(string) {
    // seu código aqui
    let array = string.split('');
    for (let currentIndex in array) {
      if (array[currentIndex] === 'a') {
          array[currentIndex] = '1';
      }
      if (array[currentIndex] === 'e') {
          array[currentIndex] = '2';
      }
      if (array[currentIndex] === 'i') {
          array[currentIndex] = '3';
      }
      if (array[currentIndex] === 'o') {
          array[currentIndex] = '4';
      }
      if (array[currentIndex] === 'u') {
          array[currentIndex] = '5';
      }
    }
    let stringEncoded = array.join('');
    return stringEncoded;
}
function decode(string) {
    // seu código aqui
    let array = string.split('');
    for (let currentIndex in array) {
      if (array[currentIndex] === '1') {
          array[currentIndex] = 'a';
      }
      if (array[currentIndex] === '2') {
          array[currentIndex] = 'e';
      }
      if (array[currentIndex] === '3') {
          array[currentIndex] = 'i';
      }
      if (array[currentIndex] === '4') {
          array[currentIndex] = 'o';
      }
      if (array[currentIndex] === '5') {
          array[currentIndex] = 'u';
      }
    }
    let stringDecoded = array.join('');
    return stringDecoded;
}

const functions = { encode, decode };
module.exports = functions;