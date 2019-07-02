function check(s) {
  let data = s.split('')
  let number = []

  for (let i = 0; i < data.length; i++) {
    if (data[i] != '-' && data[i] != ' ') {
      number.push(data[i])
    }
  }

  let last1 = '', last2 = '', newNumber='';

  if (number.length % 3 == 1) {
    last1 = number[number.length - 4] + number[number.length - 3]
    last2 = number[number.length - 2] + number[number.length - 1]

    for (let i = 0; i < number.length - 4; i++) {
      newNumber += number[i];
      if ((i + 1) % 3 == 0) {
        newNumber += '-';
      }
    }

    result = newNumber + last1 + '-' + last2;
  } else {
    for (let i = 0; i < number.length; i++) {
      newNumber += number[i];
      if (((i + 1) % 3 == 0) && i != number.length-1) {
        newNumber += '-';
      }
    }

    result = newNumber;
  }

  // console.log(number.join(''));
  // console.log(last1);
  // console.log(last2);
  // console.log(newNumber);
  console.log(result);
}

check('1234')
check('12345')
check('12-34 56')
check('12-345-67')
check('12-34 56 78')
check('123-45 6789')