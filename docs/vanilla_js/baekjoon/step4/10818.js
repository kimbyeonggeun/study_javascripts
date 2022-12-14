// 링크
// https://www.acmicpc.net/problem/10818

// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.


// 코드
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/baekjoon/step4/10818.txt";
let inputs = fs.readFileSync(filepath).toString().split("\n");

let count = inputs[0];
let arr = inputs[1].split(" ").map(Number);
let min = arr[0];
let max = arr[0];

for(let i = 0; i<count;i++){
    if(min > arr[i]) min = arr[i];
    if(max < arr[i]) max = arr[i];
}

let str = min + " "+ max;
console.log(str);

// 제출 링크
// https://www.acmicpc.net/source/51836719