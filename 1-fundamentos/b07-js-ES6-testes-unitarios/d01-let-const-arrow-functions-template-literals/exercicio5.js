// const clicksDisplay = document.querySelector('p');
// const button = document.querySelector('button');

// const clickCounter = () => {
//     let counter = 0;
//     button.addEventListener('click', () => {
//         counter += 1;
//         clicksDisplay.innerText = counter;
//     });
// }
// clickCounter();

let counter = 0;
document.querySelector('button').addEventListener('click', () => {
    counter += 1;
    document.querySelector('p').innerText = counter;
})