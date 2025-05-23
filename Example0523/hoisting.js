function exmaple(x){
  console.log(x);
  var x;
  console.log(x);
  var x=2;
  console.log(x);
}
exmaple(1);

function test(){
  console.log(b);
  var b = 'bbb';
  console.log(b);
  function b(){
    
  }
  console.log(b);
}
test();

// 곱하기는 아직 구현 단계를 몰라서 실행이 안됨
// 함수 선언은 전체가 올라가서 선언이 되지만
// 변수로 선언하면 초기화가 정의 안됨으로 되서 오류남
// 변수 = 함수도 똑같이 오류남 
// console.log(sum(1,2));
// console.log(multiply(3,4));

// function sum(a,b){
//   return a+b;
// }

// var multiply =function (a,b){
//   return a*b;
// }

function sum(a,b){
  return a+b
}

var multiply = function (a,b){
  return a*b;
}


console.log(sum(1,2));
console.log(multiply(3,4));
// 면접때 호이스팅 많이 물어봄 설명할때 기본정의도 좋지만 실행 로직을 설명하는게 좋다
// 지금부터 익명함수표현식 또는 기명 함수 표현식으로 쓰는게 좋다
// 정리 함수선언 방식은 전체, 변수는 변수만 사용