'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function getMaxLessThanK(n, k){
    let a;
    let b;
    let aAndB;
    let max = -Infinity;
    if(n == 2) return 0
    else{
        for(let i = 1; i < n; i++){
            for(let j = i + 1; j <= n; j++){
                a = i
                b = j
                aAndB = a & b
                if(aAndB < k  && max < aAndB){
                    max = aAndB
                }
            }
        }
        return max

    }
}


function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}