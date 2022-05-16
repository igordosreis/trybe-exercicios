let n = 6;

for (i = 1 ; i <= n ; i += 1) {
    let spaceTotal = n - i;
    let astesriskTotal = i;
    let line = '';
    for (ii = 1 ; ii <= spaceTotal ; ii += 1) { 
        line = line + ' ';
    } 
    for (iii = 1 ; iii <= astesriskTotal ; iii += 1) {
        line = line + '*';
    }
    console.log(line);
}
