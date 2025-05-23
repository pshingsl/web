class Person{
  constructor(name, age){
    // 생성자: constructor()-> 한번만 실행 
    // 입력값이 없을때 생략가능
    this.name = name;
    this.age = age;
  }
  // method = function , field = variable
  
  // this는 고유값을 나타냄 
  sayHello(){
    console.log(`Hi, i am ${this.name}, ${this.age} year old.`)
  }
}

const p1 = new Person("123", 39); // -> p1 = person{name, age}
const p2 = new Person('n', 27);

// 객체라고 부르며 주소값은 항상 다르다
p1.sayHello();
p2.sayHello();

// 클래스를 쓰는 이유: 남의 자기것을 컨트롤 하지 못하게 하려고