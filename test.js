// const sum = (num1, num2) => num1 + num2;
// console.log(sum(1, 2));
// console.log(sum(1, 200));
// console.log(sum(1, 201));

// sum(1, 2); => sum(1)(2) => 求 1 和任意一个数字的和

const sum = (fixedNum) => (randomNum) => fixedNum + randomNum;
sum(1)(103);