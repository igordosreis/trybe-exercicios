let word = 'tryber';
let inverse = '';

for (i = word.length - 1; i >= 0 ; i -= 1) {
    inverse += word[i];
}

console.log(inverse);
