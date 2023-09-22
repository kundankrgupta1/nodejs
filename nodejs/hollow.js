let n = 5;
for(let i = 0; i<=n; i++){
    let bag = "";
    for(let j = 0; j<=n; j++){
        if(i==0 || j==0 || i==n || j==n){
            bag = bag + "*" + " ";
        }
        else{
            bag = bag + "  " ;
        }
    }
    console.log(bag);
}