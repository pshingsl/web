const testSet = new Set();
testSet.add('value1');
testSet.add('value2');
console.log(testSet)
console.log(testSet.has('value1'));
console.log()

const mySet = new Set();
mySet.add('apple');
mySet.add(123);
mySet.add('banana');
mySet.add(123);

console.log(mySet.has(123)); // 값이 있는지 검사
console.log(mySet.size); // apple, 123, banana, 123 -> 중복제거
console.log();

// 반복
const fruits = new Set(['apple', 'banana', 'cherry']);
const dele = fruits.delete('apple');
console.log(dele)

const clear = fruits.clear();
console.log(clear)

for(const f of fruits){
  console.log(f);

}