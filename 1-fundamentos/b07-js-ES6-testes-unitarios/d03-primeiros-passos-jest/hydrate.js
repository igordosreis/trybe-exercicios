function hydrate(phrase) {
    // seu código aqui
    let arrayOfStrings = phrase.match(/\d+/g);
    let arrayOfNumbers = arrayOfStrings.map((str) =>{ return Number(str) });
    let sum = arrayOfNumbers.reduce((holder, value) => holder + value);
    if (sum === 1) {
      return '1 copo de água';
    }
    return (`${sum} copos de água`);
  }
  module.exports = hydrate;