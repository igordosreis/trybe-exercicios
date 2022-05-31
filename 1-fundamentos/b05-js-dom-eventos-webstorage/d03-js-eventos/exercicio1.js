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

function zoomInAndOut() {
    const daysInsideUl = document.querySelector('#days');

    daysInsideUl.addEventListener('mouseover', function(event) {
        // event.target.style.transform = 'scale(1.3)';
        event.target.style.fontSize = 'xx-large';
    })
    daysInsideUl.addEventListener('mouseout', function(event) {
        // event.target.style.transform = 'scale(1)';
        event.target.style.fontSize = '20px';
    })
};
zoomInAndOut();

// function zoomIn() {
//     const daysInsideUl = document.querySelector('#days');

//     daysInsideUl.addEventListener('mouseover', function(event) {
//         event.target.style.fontSize = 'xx-large';
//     })
// };
// zoomIn();

// function zoomOut() {
//     const daysInsideUl = document.querySelector('#days');

//     daysInsideUl.addEventListener('mouseout', function(event) {
//         event.target.style.fontSize = '20px';
//     })
// };
// zoomOut();


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
    const taskSelector = document.querySelector('.task');

    taskSelector.addEventListener('click', function(event) {
        // console.log(taskSelector.className);
        if (taskSelector.className === 'task') {
            event.target.className += ' selected';
        } else // Porque eu preciso desse else para que a funcao funcione corretamente? Porque somente o 2o if nao basta?
        if (taskSelector.className === 'task selected') {
            event.target.className = 'task';
        }
    })
};
taskClassAdd();


// 10 -  Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

    // Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

// PRIMEIRA VERSAO - Porque nao funciona com querySelector?

function eventAdd() {
    const daySelector = document.querySelector('#days');
    // const taskSelector = document.querySelector('.task.selected'); // Nao funciona, pois o taskSelector cria uma lista estatica no momento que ele primeiro surge. Já o getElementsByClassName cria listas dinamicas que incluem e excluem itens a medida que eles sao criados ou deletados.
    const taskSelector = document.getElementsByClassName('task selected'); // document.getElementsByClassName('selected'); Tambem funciona
    daySelector.addEventListener('click', function(event) {
        const newDayColor = taskSelector[0].style.backgroundColor;
        const originalFontColor = 'rgb(119, 119, 119)';
        if (event.target.style.color === newDayColor) {
            event.target.style.color = originalFontColor;
        } else {
            event.target.style.color = newDayColor;
        }
    });
};
eventAdd();


// SEGUNDA VERSAO - Funciona

// const daySelector = document.querySelector('#days');
// function eventAdd(event) {
//     const taskSelector = document.querySelector('.task.selected');
//     console.log(taskSelector);
//     // const regularTask = document.querySelector('.task');
//     const newDayColor = taskSelector.style.backgroundColor;
//     const originalBackgroundColor = 'rgb(119, 119, 119)';
//     // console.log(daySelector.style.backgroundColor);
//     console.log(newDayColor);
//     console.log(originalBackgroundColor);
//     if (event.target.style.color === newDayColor) {
//         event.target.style.color = originalBackgroundColor;
//     } else {
//         event.target.style.color = newDayColor;
//     }  
// };
// daySelector.addEventListener('click', eventAdd);


// // GABARITO

// function setDayColor() {
//     let selectedTask = document.getElementsByClassName('task selected');
//     let days = document.querySelector('#days');
//     let taskDiv = document.querySelector('.task');
//     let taskColor = taskDiv.style.backgroundColor; //Se eu tenho que colocir o dia com a mesma cor da tarefa selecionada (com a classe 'task selected'), porque 
//tambem buscar pela div com a classe task e pegar o backgroundcolor dela, alem de buscar pela div com a classe selected?  
//Da forma como o calendario foi feito só existe uma tarefa para se selecionada, então isso não faz diferença para o funcionamento da função, 
//mas como eu ainda estava solidificando meu conhecimento ao resolver essa questao, eu nao entendi o proposito disso e se isso iria interferir no funcionamento da funcao.
//
//     days.addEventListener('click', function(event){
//       let eventTargetColor = event.target.style.color;
//       if (selectedTask.length > 0 && eventTargetColor !== taskColor) { //A forma como entendo esse if é que ele só vai alterar a cor do alvo que disparou o evento se 1) existe algo com a classe selected, logo a  
//coleção com 1 elemento retornada peloquerySelector vai ter um comprimento maior que zero e 2) se a cor do background do alvo do evento que disparou a funcao é diferente da cor de background da tarefa (que coincide com a tarefa selecionada, pois
//só existe uma tarefa). Na época que fiz esse exercício, eu não tinha entendido o propósito do (1) pois nao estava ciente do que exatamente o querySelector retorna, mas eventualmente entendi durante os projetos.
//        
//         let color = selectedTask[0].style.backgroundColor;
//         event.target.style.color = color;
//       } else if (eventTargetColor === taskColor && selectedTask.length !== 0) { //O proposito da segunda condicao desse if é o mesmo do primeira condição do outro if: verificar se existe algo com a classe selected. Mas na epoca
//desse exercicio eu nao sabia do proposito de usar o selectedTask.length, como falei acima. Entao essa condicional desse if ser diferente da primeira condicional do outro if me deixou muito confuso pois imediatamente assumi que o proposito das duas condicionais
//fosse diferentes. Talvez adicionar algumas notas explicativas sobre esses detalhes do gabarito seja de grande ajuda.
//         event.target.style.color = 'rgb(119,119,119)';
//       }
//     });
//   };
//   setDayColor();