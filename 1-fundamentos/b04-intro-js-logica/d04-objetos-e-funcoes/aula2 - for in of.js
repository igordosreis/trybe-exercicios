// for in - percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção e retorna as propriedades em si (ie.: os indices de um array)

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
for (let index in car) {
    console.log(index, car[index]);
}

let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

// for of - percorre os elementos dos objetos iteráveis através dos seus respectivos valores (e não dos índices)

let foods = ['hamburguer', 'bife', 'acarajé'];
for (let value of foods) {
   console.log(value);
};
//resultado: hamburguer, bife, acarajé;