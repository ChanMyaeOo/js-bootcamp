let isValidPassword = function(password) {
  return password.length >= 8 && !password.includes('password');
};
console.log(isValidPassword('asdf'));
console.log(isValidPassword('asdf123!@#'));
console.log(isValidPassword('asdf123passwordgg'));
