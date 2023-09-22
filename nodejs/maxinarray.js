// find out maximum number in given array
// o/p should be 44

let arr = [10, 12, 13, 44, 5];
let n = arr.length;
console.log(n);

let max = arr[0];
for(let i = 1; i<=n; i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(max);