const costValue = 10;
const sellValue = 12.5;

if (costValue < 0 || sellValue < 0) {
    console.log('ERROR')
}
else {
    let costTotal = costValue * 1.2;
    let profit = ((sellValue - costTotal) * 1000);
    console.log(profit)
}


