// LikeLion 백준 문제풀이
// 10869. 사칙연산
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.
// 멋대 10기 이동령
let input = require("fs").readFileSync("dev/stdin").toString().split(" ");

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(Math.floor(num1 / num2));
console.log(num1 % num2);
