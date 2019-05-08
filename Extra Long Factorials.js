function extraLongFactorials(n) {
    // // methode 1
    // let result = BigInt(1);
    // for (let i = BigInt(2); i <= n; i++) {
    //     result = result * i;
    // }
    // console.log(result.toString());

    // method 2
    let result = BigInt(n);
    for (let i = BigInt(n-1); i >= 2; i--) {
        result = result * i;
    }
    console.log(result.toString());
}

for(let i=1; i<=100; i++) [
    extraLongFactorials(i)
]