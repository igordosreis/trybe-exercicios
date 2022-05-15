const a = 90;
const b = 60;
const c = 331;

if (a + b + c === 180) {
    console.log(true);
}
else if (a >= 180 || b >= 180 || c >= 180 || a <= 0 || b <=0 || c <= 0) {
    console.log('ERROR')
}
else {
    console.log(false);
}