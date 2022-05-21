const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Por causa da classe 'tech' que contem o atributo 'transform: translateY(-20px);', que desloca essa
// caixa 20px para cima. 
// Caso o valor fosse positivo, a caixa seria deslocada para baixo. -> porque é invertido?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.addEventListener('click', elevateOnClick);
secondLi.addEventListener('click', elevateOnClick);
thirdLi.addEventListener('click', elevateOnClick);

function elevateOnClick(event) {
  const elementWithTechClass = document.querySelector('.tech');
  // const elementWithTechClass = document.getElementsByClassName('tech')[0];
  elementWithTechClass.classList.remove('tech');
  event.target.classList.add('tech'); // ❓ Porque foi necessario adicionar esse event aqui e na funcao? Como funciona esse target?
  input.value = ''; // ❓ O que isso faz? // ❓ O que é o .value? // ❓ O que é o .target? 
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('keyup', changeText);

function changeText(event) {
  const elementWithTechClass = document.querySelector('.tech');
  // elementWithTechClass.innerText = input.value; // ❓ Por que nao usar essa solucao e sem o event?
  elementWithTechClass.innerText = event.target.value; 
  // elementWithTechClass.style.color = 'red'; 
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', redirect);

function redirect() {
  const mySpotrybefy = document.querySelector('#my-spotrybefy');
  // window.location = 'http://www.google.com'; // ❓ Por que nao usar essa solucao e sem o event?
  window.location.replace('http://www.google.com');
  }

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', mouseOver);
myWebpage.addEventListener('mouseout', mouseOut);

function mouseOver(event) {
  // const mySpotrybefy = document.querySelector('#my-spotrybefy');
  // mySpotrybefy.style.color = 'red';
  event.target.style.color = 'purple';
}

function mouseOut(event) {
  event.target.style.color = '';
}


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.