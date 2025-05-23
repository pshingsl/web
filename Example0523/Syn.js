// 싱글 스레드(Single Thread)-> 오직 하나만 처리 -> 위에서 아래로 순차적으로 진행
// 동기-> 현재 실행중인 코드가 끝나야 다음꺼 수행  가능

//비동기 -> 현재 실행중인 코드 완료 여부 상관없이 다음 코드가 실행 -> 1 2 3이 있으면 2번이 완료 하든 말든 3번으로 넘어감 1-3-2 순으로
// 요청, 실행대기, 보류
// console.log('1');
// setTimeout(() => console.log('2'), 1000); // 1초뒤에 실행
// console.log('3');

//fetch 웹 브라우저 환경에서 http를 보내기 위한 내장함수
// 서버로부터 데이터를 받는게 일반적이다 -> Promise를 반환하기 떄문에 비동기식으로 동작한다.
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('error:', error))

//promise 비동기 작업을 깔금하고 예측 가능한 방식으로 처리 -> 단어 뜻 그대로 반드시 응답
// 펜딩:로딩

// 기본 선언후 함수에서 1초후 promisse.then(result => console.log(result)); 실행
// const promisse = new Promise((resolve, resject) => {
//   setTimeout(()=>{
//     resolve('claer!');
//   }, 1000);
// });

// promisse.then(result => console.log(result));
// resolve가 실행되야 프로미즈 실행

// const promise = new Promise((resolve, resject) => {
//   setTimeout(()=>{
//     resject('fail');
//   }, 1000);
// });
// promise.catch(error => console.log(error));
// console.log();

// function fetchData(){
//   return new Promise(resoleve=> {
//     setTimeout(()=> resoleve(10), 1000);
//   });
// }

// fetchData()
// .then(data => data+5)
// .then(result => console.log(result));

// const p1 = new Promise(resoleve => setTimeout(() => resoleve('1번완료'),1000))
// const p2 = new Promise(resoleve => setTimeout(() => resoleve('2번완료'),1500))
// const p3 = new Promise(resoleve => setTimeout(() => resoleve('3번완료'),500))

// // 3개를 각각 다르게 비동기를 처리 -> 3개중에서 가장 긴놈이 리턴되면 그때 실행 -> 하나라도 실패하면 fetch로 넘어감 -> 안전한 애들 사용할때 사용
// Promise.all([p1, p2, p3])
// .then(results => {
//   console.log(results);
// })
// .catch(err => console.log('error:', error))

// aysnc /await Promise 기반 코드를 동기 코드처럼 보이게 만들어준다
// 순서 상관없이 비동기는 기다림
function delay(){
  return new Promise(resolve => setTimeout(() => resolve('clear'), 1000));
}

async function  start() {
  const result = await delay();
  console.log(result);
}

start();

function fail() {
  return new Promise((_, reject) => setTimeout(()=> reject('error'), 1000));
}

async function excute() {
  try{
    await fail();
  }catch (err){
    console.log(err);
  }
}

excute();

// function fetchUser(){
//   return new Promise(resolve => setTimeout(()=> resolve('user'),1000));
// }
// function fetchPosts(){
//   return new Promise(resolve => setTimeout(()=> resolve('posts'),1000));
// }

// async function loadPage() {
//   const user = await fetchUser();
//   const posts = await fetchPosts();
//   console.log(user, posts);
// }
// loadPage();
