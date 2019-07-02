function teller(n) {
  let t=0;
  for(let i=1; i<=n; i++) {
    if(n%1==0) {
      t++
    } else if(n%2==0) {
      t+=2
    } else if(n%3==0) {
      t+=3
    }
  }
  console.log(t)
}

teller(4)