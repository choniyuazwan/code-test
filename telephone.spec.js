function format(str){
  if (!str) {
    throw new Error('String kosong')
  }

  let data = str.split('')
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

  return result;
}


describe('Test Phone Format with Jasmine', ()=>{
    it('text kosong = String kosong', ()=>{
        const text = "";
        const expected = "String kosong";
        expect(()=>{
            format(text)
        }).toThrowError(expected);
    });

    it('text null = String kosong', ()=>{
        const text = undefined;
        const expected = "String kosong";
        expect(()=>{
            format(text)
        }).toThrowError(expected);
    });

    it('text 7521752 = "752-17-52"', ()=>{
        const text = "7521752";
        const expected = "752-17-52";
        expect(format(text)).toBe(expected);
    });

    it('text 087785464240 = 087-785-464-240', ()=>{
        const text = "087785464240";
        const expected = "087-785-464-240";
        expect(format(text)).toBe(expected);
    });

    it('text 08-12 706-706 = 081-270-67-06', ()=>{
        const text = "08-12 706-706";
        const expected = "081-270-67-06";
        expect(format(text)).toBe(expected);
    });

});

