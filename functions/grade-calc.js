const calcGrade = function(studentScore, possibleScore) {
  const scorePercent = (studentScore / possibleScore) * 100;
  let studentGrade;
  if (scorePercent >= 90) studentGrade = 'A';
  else if (scorePercent >= 80) studentGrade = 'B';
  else if (scorePercent >= 70) studentGrade = 'C';
  else if (scorePercent >= 60) studentGrade = 'D';
  else studentGrade = 'E';

  return `You got a ${studentGrade} (${scorePercent}%)!`;
};

const result = calcGrade(63, 100);
console.log(result);
