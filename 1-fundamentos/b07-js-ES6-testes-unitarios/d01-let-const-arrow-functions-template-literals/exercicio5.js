const clicksDisplay = document.querySelector('p');
const button = document.querySelector('button');

const clickCounter = () => {
    counter = 0;
    button.addEventListener('click', () => {
        counter += 1;
        clicksDisplay.innerText = counter;
    });
}
clickCounter();
