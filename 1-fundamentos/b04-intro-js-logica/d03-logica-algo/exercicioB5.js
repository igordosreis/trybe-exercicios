let base = 7;
let heightAndMid = (base + 1) / 2
let right = heightAndMid;
let left = heightAndMid;

for (i = 1 ; i <= heightAndMid ; i += 1) {
    let lines = '';
    for (ii = 1 ; ii <= base ; ii += 1) {
        if (ii == left || ii == right || i == heightAndMid) {
            lines = lines + '*';
        } else {
            lines = lines + ' ';
        }
    }
    console.log(lines);
    right += 1;
    left -= 1;
}
