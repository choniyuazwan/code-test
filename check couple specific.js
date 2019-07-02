function check(s) {
  let data = s.split('')
  let checkAgain = true;

  while(checkAgain) {
    checkAgain = false;
    for (let i = 0; i < data.length - 1; i++) {
      if((data[i] == 'X' && data[i+1] == 'X') || (data[i] == 'Y' && data[i+1] == 'Y') || (data[i] == 'Z' && data[i+1] == 'Z')) {
        data.splice(i, 2);
        checkAgain = true;
      }
    }
  }
  console.log(data.join(''));
}

check('XXYYZZ')