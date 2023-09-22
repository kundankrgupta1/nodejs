/* output like
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
*/

let n = 4;
let count = 1;
for(let i=1; i<=n; i++){
    let bag = "";
    for(let j=1; j<=n; j++){
        bag = bag + count + " ";
        count = count + 1;
    }
    console.log(bag);
}
