// Map: 모든 자료형을 키로 사용할 수 있다. 키-값 쌍인집합-> 키는 오직 하나만 존재
// 집합의 유일성, 기본적으로 키를 포함하지 않는다 -> 우리가 직접 정의 해줘야함
// 키는 모든 값(하무, 객체 또는 원시값이 포함)
// 키 순서 단순하고 직관적인 방식으로 정렬 -> 반복할때 삽입 순선대로 함 
const testMap = new Map();
testMap.set('key', 'value');
console.log(testMap.get('key'));
console.log();
// const myMap = new Map();
// myMap.set('name', 'Alice');
// myMap.set(1, 'number');
// myMap.set(true, 'boolean');

// console.log(myMap.get('name'));
// console.log(myMap.get(1));
// console.log(myMap.size);

//Map (for of) -> 맵을 쓰는 이유 반복문 때문에 -> 유사배열로 나타남 이 문제를 해결하기 위해 반복문 씀
// 자유롭게 동작 가능 컨티뉴, 브레이크 사용 가능
const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

for(const k of myMap.keys()){
  console.log(`k value: ${k}`);
}

for(const ke of myMap.values()){
  console.log(`ke valye: ${ke}`);
}

// entries()메서드는 [키, 값]을 맵으로 사용하여 반복자 객체를 반환합니다.
// entries()메서드 원 래값을 변경하지 않는다.
for(const [key, value] of myMap.entries()){
  console.log(`${key}:  ${value}`)
}