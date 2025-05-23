// binding 
// this 함수가 실행 컨텍스트 만들어질 때 결정 -> 동적으로 결정 -> 어디서 호출되냐 따라서 this가 달라짐
// 전역함수 this시 -> 브라우저 윈도우을 가르킴

// 일반함수
var obj = {
  outer: function(){
    console.log("outer:"+this);
    var innerFunc = () => {
      console.log(this);
    };
    innerFunc();
  },
};
obj.outer();
console.log()
// 화살표 함수
var obj = {
  outer: function(){
    console.log(this);
    var innerFunc = () => {
      console.log(this);
    };
    innerFunc();
  },
};
obj.outer();
//

var func = function (a,b,c){
  console.log(this, a,b,c);
};
func(1,2,3);

func.call({x:'num'},4,5,6);

// 호출되는 시점에 따라서 전역인지 아닌지 결정된다. 지금은 아래인 전역에서 호출되므로 this는 전역이 된다

function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}
function Student(name, gender, school) {
	Person.call(this, name, gender); // 여기서 this는 student 인스턴스!
	this.school = school;
}
function Employee(name, gender, company) {
	Person.apply(this, [name, gender]); // 여기서 this는 employee 인스턴스! 어플라이 배열 위에거랑은 동작방식 같음
	this.company = company;
}
var kd = new Student('길동', 'male', '서울대');
var ks = new Employee('길순', 'female', '삼성');
// this를 쓰는 이유는 누구의 것인지 구별하기위해 쓴다.

var func = function (a, b, c, d) {
	console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // window객체

// 함수에 this 미리 적용
var bindFunc1 = func.bind({ x: 1 }); // 바로 호출되지는 않아요! 그 외에는 같아요.
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// 부분 적용 함수 구현
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9
//바인딩을 쓰는 이유 -> this가 계속 바뀌기 때문에 바인딩을 사용한다 -> this는 계속 바뀌지 않음
// 지금은 화살표 함수를 많이 쓴다. 하기 싫다 -> 일일이 다 알아야 한다. -> 하지만 면접에서 간혹 가다 물어볼 수 있어서 알긴 해야한다.
// 실무에서 화살표를 많이씀 -> 이론은 다 아는게 좋다

// 오늘 한거 최종족으로 화살표 함수를 서라(this가 달라짐),  호이스팅 
// 집가서 정리할거 동기, 비동기, 화살표 함수, 호이스팅 정리
// 함수 정리할거

// 자바스크립트는 싱글 스레드 언어 하나의 프로그램은 한번에 하나만 실행
// 블로킹 : 느리게 수행
// 싱글 스레드느 여러개를 사용하지 않음 하나의 스레드가 끝나고  수행하는 절차적으로 진행함 
// 비동기 실행과정: 비동기인 부분을 따로 빼놓고 다른코드를 실행하고 실행이 끝나면 그 때 비동기 실행