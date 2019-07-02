function reverse(input) {
  // return input.split('').reverse().join('')
  // return [...input].reduce((prev,next)=>next+prev)

  let data = input.split('');
  let output='';
  for(let i=data.length-1; i>=0; i--) {
    output+=data[i];
  }
  return output;
}

console.log(reverse('I am BTPN employee'))