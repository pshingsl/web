// callBack: 다른함수의 인자로 전달되어 호출되는 함수
// 함수안에 특정 작업이 완료후 나중에 호출 -> 예시)마우스 클릭시 그 다음에 실행
// 주로 비동기 작업, 이벤트 처리 등을 상화에서 사용 함수형 프로그래밍

//쓰는 이유
// 함수의 순서를 조정하고 싶어서
// 서버에서 데이터 받아오고 나서 화면에 표시
// 버튼 클릭, 입력창 변경 등 사용자 이벤트 처리 -> 조건
// 반복 작업 중 특정 조건에서 사용 -> 조건, 반복
// function greet(name){
//   console.log(`Hello ${name}`);
// }

// function proecessUserInput(callback){
//   const name = "Hyuk";
//   callback(name);
// }

// proecessUserInput(greet);
// console.log();

// // ex2
// function cal(a, b, operation){
//   return operation(a, b);
// }

// function add(x, y){
//   return x+y;
// }

// function subract(x, y){
//   return x-y;
// }
// console.log(cal(5,3 ,add));
// console.log(cal(5,3,subract));
// console.log()

// 제에권
// 자바스크립트에서 콜백 함수는 단순히 전달되는 함수가 아님
// 함수를 호출할 권한을 넘긴다
// 개발자의 의도가 들어갈 수 없다.

var newArr =[10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
})
console.log()

let wrongArr = [10, 20, 30].map(function (index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5;
});
console.log()
console.log(newArr)
console.log(wrongArr);
console.log()