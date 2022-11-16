// Array == ArrayList
let fruits = ["apple", "banana", "orange", "mellon"];
let numbers = [1, 2, 3, 4, 5];
// Array변수의 초기화
let fruits_init = new Array();
fruits_init = [];

// object == HashMap
let objects = { name: "Tom", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "mellon"]; // 자료형 상관 없이 배열에 삽입 가능
let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }]; // object도 삽입 가능
let mixins_thrid = [1, 2, 3, "banana", objects]; // object를 변수 이름으로 삽입 가능
let mixins_fourth = [fruits, numbers];
// 하지만 같은 자료형끼리 넣는게 다루기 

const mixins_array = [
    ["apple", "banana"],
    ["orange", "mellon"],
    ["berry", "strawberry"]
  ];
  
let first = ["apple", "banana"];
let second = ["orange", "mellon"];
let third = ["berry", "strawberry"];

let mixins_list = [first, second, thrid];

console.log();