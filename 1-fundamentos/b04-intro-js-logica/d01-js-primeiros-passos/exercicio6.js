let pieceName = 'RoOk';
// let lowerCaseName = pieceName.toLowerCase()

switch(pieceName.toLowerCase()) {
    case 'pawn':
        console.log('Pawn. 1 diagonal square.');
        break;
    case 'bishop':
        console.log('Bishop. Full diagonal line.');
        break;
    case 'knight':
        console.log('Knight. L-shaped move: 2 vertical or horizontal squares, then 1 lateral square.');
        break;
    case 'rook':
        console.log('Rook. Full straight line.');
        break;
    case 'queen':
        console.log('Queen. 1 square forward or full digonal line or full straight line sideways or backwards.');
        break;
    case 'king':
        console.log('King. 1 adjacent square.');
        break;
    default:
        console.log('ERROR');
}


// if (lowerCaseName == 'bishop' || lowerCaseName == 'rook' || lowerCaseName == 'pawn' || lowerCaseName == 'knight' || lowerCaseName == 'queen' || lowerCaseName == 'king') {
    
// }
// else {
//     console.log(lowerCaseName);
// }
