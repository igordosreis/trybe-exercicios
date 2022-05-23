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
    const newColor = 'rgb(230, 250, 0)'; //Porque, caso eu coloque a cor em rgb ou hex, o botao para de reverter a cor? Ja tentei substituit as variaveis no if pelas cores em rgb e remover um '=', mas nao funcionou. O problema é que o rgb que eu usei tinha espaçamento diferente entre os numeros quando comparado ao rgb original.

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


// 6 -  Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

    //Dica - Propriedade: event.target. https://developer.mozilla.org/en-US/docs/Web/API/Event/target

function zoomIn() {
    const daysInsideUl = document.querySelector('#days');

    daysInsideUl.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = 'xx-large';
    })
};
zoomIn();

function zoomOut() {
    const daysInsideUl = document.querySelector('#days');

    daysInsideUl.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = 'medium';
    })
};
zoomOut();


// 7 -  Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

    // O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTask(taskName) {
    const newTask = document.createElement('span');
    newTask.innerHTML = taskName;
    document.querySelector('.my-tasks').appendChild(newTask);

    // newTask.addEventListener('keyup', function() {
    //     newTask.innerHTML = taskName;
    // })
};
addTask('Tarefa #1');


// 8 -  Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.

    // O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
    // O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addColorToTask(color) {
    const newTaskColor = document.createElement('div');
    newTaskColor.className = 'task';
    newTaskColor.style.backgroundColor = color;
    document.querySelector('.my-tasks').appendChild(newTaskColor);
};
addColorToTask('turquoise');


// 9 - Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.

    // Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function taskClassAdd() {
    const taskSelecter = document.querySelector('.task');

    taskSelecter.addEventListener('click', function(event) {
        console.log(taskSelecter.className);
        if (taskSelecter.className === 'task') {
            event.target.className += ' selected';
            console.log(taskSelecter.className);
        } else // Porque eu preciso desse else para que a funcao funcione corretamente? Porque somente o 2o if nao basta?
        if (taskSelecter.className === 'task selected') {
            event.target.className = 'task';
            console.log(taskSelecter.className);
        }
    })
};
taskClassAdd();