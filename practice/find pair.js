function pair(arr, x) {
  for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if(arr[i]+arr[j] == x) {
        console.log(arr[i]+'+'+arr[j])
      }
    } 
  }
}

let arr = [1, 4, 2, 3, 7, 0, 5];
let x = 7;
pair(arr, x)
