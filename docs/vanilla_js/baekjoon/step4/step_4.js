// 문제
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// 출력
// 시험 성적을 출력한다.

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

if (inputs >= 90 && inputs <= 100) {
  console.log("A");
} else if (inputs >= 80 && inputs <= 89) {
  console.log("B");
} else if (inputs >= 70 && inputs <= 79) {
  console.log("C");
} else if (inputs >= 60 && inputs <= 69) {
  console.log("D");
} else {
  console.log("F");
}

// https://www.acmicpc.net/source/51729381


// ============================================================================================


// 문제
// 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
// 예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

// 입력
// 첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.

// 출력
// 첫째 줄에 윤년이면 1, 아니면 0을 출력한다.

const fs = require("fs");

const filepath2 =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs2 = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

if (
  (inputs2 % 4 == 0 && inputs2 % 100 != 0) ||
  (inputs2 % 4 == 0 && inputs2 % 400 == 0)
) {
  console.log("1");
} else {
  console.log("0");
}

// https://www.acmicpc.net/source/51729624
