// 링크
// https://www.acmicpc.net/problem/10807

// 문제
// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 정수가 공백으로 구분되어져있다. 셋째 줄에는 찾으려고 하는 정수 v가 주어진다. 입력으로 주어지는 정수와 v는 -100보다 크거나 같으며, 100보다 작거나 같다.

// 출력
// 첫째 줄에 입력으로 주어진 N개의 정수 중에 v가 몇 개인지 출력한다.


// 코드
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/baekjoon/step4/10807.txt";
let inputs = fs.readFileSync(filepath).toString().split("\n");

let num = Number(inputs[2]);
let list = inputs[1].split(" ").map(Number);
let count = 0;

for(let i = 0; i<Number(inputs[0]);i++){
    if(list[i] == num) count++;
}
console.log(count);

console.log();

// 제출 링크
// https://www.acmicpc.net/source/51809831