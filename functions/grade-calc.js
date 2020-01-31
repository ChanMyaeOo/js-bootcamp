let calcGrade = (totalScore, possibleScore) => {
  let percent = (totalScore / possibleScore) * 100;
  let letterGrade = '';

  if (percent >= 90) letterGrade = 'A';
  else if (percent >= 80) letterGrade = 'B';
  else if (percent >= 70) letterGrade = 'C';
  else if (percent >= 60) letterGrade = 'D';
  else letterGrade = 'F';

  return `You got a ${letterGrade} (${percent}%) !`;
};

let result = calcGrade(50, 100);
console.log(result);
