function difference(arr1, arr2) {
  // let same = false;
  // for(let i=0; i<a.length; i++) {
  //   for(let j=0; j<a.length; j++) {

  //   }  
  // }

  let n = arr1.length;
  let m = arr2.length;
  let i = 0, j = 0, output=[];
  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      output.push(arr2[j]);
      j++;
    } else {
      i++;
      j++;
    }

  }
  console.log(output)
}

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

difference(arr1, arr2)
