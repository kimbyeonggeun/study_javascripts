// 링크
// https://www.acmicpc.net/problem/10871

// 문제
// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

// 둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

// 출력
// X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

// 코드
const fs = require("fs");

const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/baekjoon/step4/10871.txt";
let inputs = fs.readFileSync(filepath).toString().split("\n");

let list = inputs[0].split(" ").map(Number);
let num_list = inputs[1].split(" ").map(Number);
let count = list[0];
let num = list[1];
let arr = [];

for (let i = 0; i < count; i++) {
  if (num_list[i] < num) arr.push(num_list[i]);
}
arr.push(" ");

let str = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] == " ") {
    break;
  }
  str = str + " " + arr[i];
}

console.log(str);

console.log();

// 제출 링크
// https://www.acmicpc.net/source/51836647
