// 통계쪽 완성 못함
// 시간될때 할것

let questions_list = [
  {
    questions_uid: "Q1",
    questions: "해당 매장을 방문시 매장은 청결 하였습니까?",
    orders: 1,
  },
  {
    questions_uid: "Q4",
    questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    orders: 4,
  },
  {
    questions_uid: "Q2",
    questions: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    orders: 2,
  },
  {
    questions_uid: "Q5",
    questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    orders: 5,
  },
  {
    questions_uid: "Q3",
    questions: "주문시 직원은 고객님께 친절 하였습니까?",
    orders: 3,
  },
];

let example_list = [
  { example_uid: "E5", example: "매우 그렇다", orders: 5 },
  { example_uid: "E1", example: "전혀 아니다", orders: 1 },
  { example_uid: "E4", example: "그렇다", orders: 4 },
  { example_uid: "E2", example: "아니다", orders: 2 },
  { example_uid: "E3", example: "보통이다", orders: 3 },
];

const answers = [
  // Q1
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  //   { questions_uid: "Q1", example_uid: "E3" },
  // Q2
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  //   { questions_uid: "Q2", example_uid: "E4" },
  // Q3
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  // Q4
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  // Q5
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];

let statistics = [];

// 정렬
questions_list.sort((a, b) => a["orders"] - b["orders"]);
example_list.sort((a, b) => a["orders"] - b["orders"]);

let clickCount = 0; // 클릭 횟수
let count = 0; // 답항 갯수

let queryQuestion = document.querySelector("#question");
let queryAnswer = document.querySelector("#answers");
let queryStatistics = document.querySelector("#statistics");
// 첫 설문 출력
print1stSurvey();

let clickNext = document.querySelector("#next");
clickNext.addEventListener("click", nextSurvey);

let clickPrev = document.querySelector("#prev");
clickPrev.addEventListener("click", prevSurvey);

// Next 버튼
function nextSurvey() {
  // 통계 안보이게 하기
  let input = ``;
  queryStatistics.innerHTML = input;

  clickCount++;
  // 문항이 끝까지 가면 마지막 문항 고정
  if (clickCount > 4) {
    clickCount = 5;
    return;
  }

  // 문항 출력
  printQuestion();

  // 답항 출력
  printAnswer();
}

// 첫 설문 출력
function print1stSurvey() {
  // 문항 출력
  printQuestion();

  // 답항 출력
  printAnswer();
}

// Prev 버튼
function prevSurvey() {
  // 통계 안보이게 하기
  let input = ``;
  queryStatistics.innerHTML = input;

  clickCount--;
  // 문항이 처음까지 가면 첫 문항 고정
  if (clickCount < 0) {
    clickCount = 0;
    return;
  }

  // 문항 출력
  printQuestion();

  // 답항 출력
  printAnswer();
}
// 문항 출력
function printQuestion() {
  let question = `<div class="question">${questions_list[clickCount]["orders"]}. ${questions_list[clickCount]["questions"]}</div>`;
  queryQuestion.innerHTML = question;
}

// 답항 출력
function printAnswer() {
  // 답항 갯수 구하기
  count = 0;
  for (let i = 0; i < answers.length; i++) {
    if (
      answers[i].questions_uid === questions_list[clickCount]["questions_uid"]
    ) {
      count++;
    }
  }

  // 답항 출력
  let answer = ``;
  for (let i = 0; i < count; i++) {
    answer += `<div id="answers"><label><input type="radio" id = "id${i}"onclick = "changeStatistics(${i})" name="answer" class="answers">(${example_list[i]["orders"]}) ${example_list[i]["example"]}</label></div>`;
  }
  queryAnswer.innerHTML = answer;
}

// let question_compare;
// let idx;
// for (idx = 0; idx < answers.length; idx++) {
//   if (question_compare == answers[idx]["questions_uid"]) {
//     console.log(
//       `== : ${answers[idx]["questions_uid"]}, ${answers[idx]["example_uid"]}`
//     );
//   } else {
//     console.log(
//       `!= : ${answers[idx]["questions_uid"]}, ${answers[idx]["example_uid"]}`
//     );
//   }

//   question_compare = answers[idx]["questions_uid"];
// }
// console.log(`${answers.length}, ${idx}`);
