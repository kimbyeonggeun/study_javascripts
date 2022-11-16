// 링크
// https://www.acmicpc.net/problem/10951

// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 A+B를 출력한다

// 코드
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
const inputs = fs.readFileSync(filepath).toString().split("\n");

for (let i = 0; i < inputs.length; i++) {
  let arr = inputs[i].split(" ").map((x) => Number(x));
  let output = arr[0] + arr[1];
  if (arr[0] != 0 && arr[1] != 0) console.log(`${output}`);
}

// 제출 링크
// https://www.acmicpc.net/source/51768284
