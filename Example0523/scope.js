//scope:어떤 변수에 접근할 수 있는지 결정하는 유효한 범위
// 자바스크립트에서 렉시컬 스코프 방식으로 사용
// 동작 방식은 안에서부터 찾는다 -> 전역변수라 해도 안에 함수들이 해당 전역변수가 있으면 출력을 한다.
// 방식은 inner -> outer -> global 순으로 탐색
const x =1;
function outer(){
  const y = 2;
  function inner(){
    const z = 3;
    console.log(x,y,z);
  }
  inner();
   console.log(x,y);
}
outer();
console.log(x);


// x는 전역변수 -> 최상위로 선언한 변수
// y는 outer 함수 스코프
// z는 inner 함수 스코프