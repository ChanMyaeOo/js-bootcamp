function isValid(str) {
  //   if (str.length >= 8 && !str.includes('password')) {
  //     return true;
  //   }
  //   return false;
  return str.length >= 8 && !str.includes('password');
}

console.log(isValid('1234ab'));
console.log(isValid('hello123'));
console.log(isValid('asdf12345password'));
