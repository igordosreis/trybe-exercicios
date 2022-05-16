// let n = 5;
// let fix;

// if (n % 2 == 1) {
//     fix = 1;
// } else {
//     fix = 0;
// }

// for (i = fix ; i <= n ; i += 2) {
//     let spaceTotal = Math.ceil(n / 2) - i/2;
//     let astesriskTotal = i;
//     let line = '';
//     for (ii = 1 ; ii <= spaceTotal ; ii += 1) { 
//         line = line + ' ';
//     } 
//     for (iii = 1 ; iii <= astesriskTotal ; iii += 1) {
//         line = line + '*';
//     }
//     console.log(line);
// }

let n = 5;
let fix;

if (n % 2 == 1) {
    fix = 1;
} else {
    fix = 0;
}

for (i = fix ; i <= n ; i += 2) {
    let spaceTotal = (n - i) /2;
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

let base = 5;
let heightAndMid = (base + 1) / 2
let right = heightAndMid;
let left = heightAndMid;

for (i = 1 ; i <= heightAndMid ; i += 1) {
    let lines = '';
    for (ii = 1 ; ii <= base ; ii += 1) {
        if (ii >= left && ii <= right) {
            lines = lines + '*';
        } else {
            lines = lines + ' ';
        }
    }
    console.log(lines);
    right += 1;
    left -= 1;
}
