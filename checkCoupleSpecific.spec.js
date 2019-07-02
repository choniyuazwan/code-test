function eliminate(str) {
  if (!str || /\s/.test(str)) {
    throw new Error('String kosong')
  }

  let data = str.split('')
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

  return data.join('');
}

describe('Test String Eliminator with Jasmine', ()=>{
  it('text kosong = String kosong', ()=>{
      const text = "";
      const expected = "String kosong";
      expect(()=>{
          eliminate(text)
      }).toThrowError(expected);
  });

  it('text null = String kosong', ()=>{
      const text = undefined;
      const expected = "String kosong";
      expect(()=>{
          eliminate(text)
      }).toThrowError(expected);
  });

  it('text XXYYZZ = ""', ()=>{
      const text = "XXYYZZ";
      const expected = "";
      expect(eliminate(text)).toBe(expected);
  });

  it('text XYXYYZZ = XYX', ()=>{
      const text = "XYXYYZZ";
      const expected = "XYX";
      expect(eliminate(text)).toBe(expected);
  });

  it('text XYXYYZZ = ""', ()=>{
      const text = "XXYAAYZZ";
      const expected = "YAAY";
      expect(eliminate(text)).toBe(expected);
  });

  it('text long = ""', ()=>{
      const text = "XXYAAYZZXXXXXXXTTTTTYYYYY";
      const expected = "YAAYXTTTTTY";
      expect(eliminate(text)).toBe(expected);
  });

});
