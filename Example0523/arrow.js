// basic
const sum = function add(a, b){
  return a+b;
}

const sumArrow= (a,b) => a+b;
console.log(sumArrow(1,2));
console.log();

// 배열이다 하면 map함수를 많이씀 -> 배열은 많은 양의 데이터르 순회 해야함 -> 반복문 -> 맵이 그런 역할을함
const arr = [1,2,3];
const doubled = arr.map(x => x*2);
console.log(doubled);
console.log();

document.getElementById('btn').addEventListener('click', ()=> {
  alert('clicked!');
})