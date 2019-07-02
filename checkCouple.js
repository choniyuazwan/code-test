function check(s) {
  let data = s.split('')
  let checkAgain = true;

  while(checkAgain) {
    checkAgain = false;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i] == data[i + 1]) {
        data.splice(i, 2);
        checkAgain = true;
      }
    }
  }
  console.log(data);
}

check('xyxxyaaxzyyz')