const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

// console.log(basket);

let fruitQuantity = {};

for (let fruit of basket) {
  //A logica do if abaixo é: enquanto objeto[variavelComONomeDaChave] estiver vazia, o resultado booleano seria false; mas como tem o operador NOT (!) na frente do objeto, enquanto ela estiver vazia o resultado booleano é true. Entao, a cada passada do for of, é primeiro verificado se a chave do objetvo existe e esta vazia; caso positivo, a chave é criada com o nome atual contido na variavel fruit e com valor zero; caso negativo, adiciona-se 1 nessa chave.
  if (fruitQuantity[fruit]) { //if (!fruitQuantity[fruit]) é o mesmo que escrever if (!fruitQuantity[fruit] === true)
    fruitQuantity[fruit] = 0;
   } 
  fruitQuantity[fruit] += 1;
}


const summaries = [];
// if (!summaries.length) 

for (fruit in fruitQuantity) {
  // let message = `${fruitQuantity[fruit]} ${fruit}`;
  let message = fruitQuantity[fruit] + ' ' + fruit;
  if (fruitQuantity[fruit] > 1) message += 's';
  summaries.push(message);
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);