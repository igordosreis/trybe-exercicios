let arr = ['amanda', 'alexandre', 'igor', 'gabriel' , 'alberto'];
let x = null;
let busca ='igor';
for (index = 0; index < arr.length; index +=1) {
    if ( busca == arr[index] ) {
        x = index;
    }
}
if ( x == null) {
    console.log('elemento não encontrado')
} else {
    console.log(x);
}
