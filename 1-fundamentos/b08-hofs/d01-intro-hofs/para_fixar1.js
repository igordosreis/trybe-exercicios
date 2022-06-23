const wakingUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';
function exercise() { return 'Exercicio!'};

const doingThings = (action) => console.log(action());

doingThings(wakingUp);
doingThings(breakfast);
doingThings(sleep);
doingThings(exercise);