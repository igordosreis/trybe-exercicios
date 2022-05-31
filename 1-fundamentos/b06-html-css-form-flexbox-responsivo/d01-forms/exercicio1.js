// const submmitButton = document.getElementById('send-button');
// const agreeCheckbox = document.getElementById('checkbox-1');

// submmitButton.addEventListener('click', (event) =>{
//     event.preventDefault();
// });

// function resetForm() {
//     document.getElementById('reset-button').addEventListener('click', () => {
//     const inputAll = document.querySelectorAll('input');
//     for (let value of inputAll) {
//         value.value = '';
//         value.checked = '';
//     }
//     document.querySelector('textarea').value = '';
//     });
// }
// resetForm();

// function readyToSUbmmit() {
//     agreeCheckbox.addEventListener('change', () => {
//     submmitButton.disabled = !agreeCheckbox.checked;
// });
// }
// readyToSUbmmit();
// // agreeCheckbox.addEventListener('change',readyToSUbmmit); 

function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }  
}

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
    document.querySelector('#dropdown').selectedIndex = -1; //'selectedIndex = 0' retorna para a primeira opcao, caso ela esteja disponivel, ou retorna para nenhuma opcao, caso a primeira opcao nao esteja disponivel; e '-1' retorna para nenhuma das opcoes disponiveis
}

function enableSubmit() {
    const submitBtn = document.querySelector('#send-button');
    const agreement = document.querySelector('#checkbox-1');
    submitBtn.disabled = !agreement.checked;
}

function textInputValidation() {
    const email = document.querySelector('#email-input').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#name-input').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#text-input').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
}

window.onload = function() {
    const submitBtn = document.querySelector('#send-button');
    submitBtn.addEventListener('click', handleSubmit);

    const clearBtn = document.querySelector('#reset-button');
    clearBtn.addEventListener('click', clearFields);

    const agreement = document.querySelector('#checkbox-1');
    agreement.addEventListener('change', enableSubmit);
};