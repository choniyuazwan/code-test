function smallest(arr) {
  let res = 1;
  for (let i = 0; i < arr.length && arr[i] <= res; i++) {
      res = res + arr[i];
  }
  
  console.log(res);
}

smallest([1, 3, 6, 10, 11, 15])