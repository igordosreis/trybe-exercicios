function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  

  // 1 -  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

    // Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
    // Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
    // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const daysUl = document.getElementById('days');

function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (let day of dezDaysList) {
        const dayLi = document.createElement('li');
        dayLi.innerHTML = day;
        dayLi.className = 'day';
        daysUl.appendChild(dayLi);
        if (day === 24 || day === 25 || day === 31) {
            dayLi.className +=' holiday';
        }
        if (day === 4 || day === 11 || day === 18 || day === 25) {
            dayLi.className +=' friday';
        }
    };
};
createDays();


// 2 -  Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

    // Adicione a este botão a ID "btn-holiday".
    // Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createHolidayButton(buttonName) {
    // const buttonContainer = document.querySelector('.buttons-container'); // Eu poeria criar uma nova variavel que buscasse a tag com a classe buttons-container para posteriormente criar o botao como filho. Ou eu poderia ja buscar essa tag e, na mesma linha, usar o appendChild como fiz abaixo
    const holidayButton = document.createElement('button');
    holidayButton.innerHTML = buttonName;
    holidayButton.id = 'btn-holiday';
    document.querySelector('.buttons-container').appendChild(holidayButton);
};
createHolidayButton('Feriados');


// 3 -  Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

    // É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

// document.querySelector('#btn-holiday').addEventListener('click', holidaysHighlight)
function holidaysHighlight() {
    const holidays = document.querySelectorAll('.holiday');
    const holidayButton = document.querySelector('#btn-holiday');
    const backgroundColor = 'rgb(238, 238, 238)';
    const newColor = 'rgb(230, 250, 0)'; //Porque, caso eu coloque a cor em rgb ou hex, o botao para de reverter a cor? Ja tentei substituit as variaveis no if pelas cores em rgb e remover um '=', mas nao funcionou.

    holidayButton.addEventListener('click', function() {
        for (let day of holidays) {
            // console.log(day.style.backgroundColor);
            if (day.style.backgroundColor === newColor) {
                day.style.backgroundColor = backgroundColor;
            } else {
                day.style.backgroundColor = newColor;
            }
        }
    })
};
holidaysHighlight();


// 4 -  Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

    // Adicione a este botão o ID "btn-friday".
    // Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createFridayButton(buttonName) {
    const fridayButton = document.createElement('button');
    fridayButton.innerHTML = buttonName;
    fridayButton.id = 'btn-friday';
    document.querySelector('.buttons-container').appendChild(fridayButton);
};
createFridayButton('Sexta-feira');


// 5 -  Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

    // É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function fridaysHighlight() {
    const fridays = document.querySelectorAll('.friday');
    const fridayButton = document.querySelector('#btn-friday');
    const backgroundColor = 'rgb(238, 238, 238)';
    const newColor = 'rgb(238, 130, 238)';

    fridayButton.addEventListener('click', function() {
        for (let day of fridays) {
            if (day.style.backgroundColor === newColor) {
                day.style.backgroundColor = backgroundColor;
            } else {
                day.style.backgroundColor = newColor;
            }
        }
    })
};
fridaysHighlight();