const marina = 110;
const silvia = 20;
const iza = 10;

if (marina <= silvia && marina <= iza) {
    console.log('Marina é a pessoa mais jovem e possui ' + marina + ' anos de idade.');
}
else if (silvia <= iza) {
    console.log('Silvia é a pessoa mais jovem e possui ' + silvia + ' anos de idade.');
}
else {
    console.log('Iza é a pessoa mais jovem e possui ' + iza + ' anos de idade.');
}