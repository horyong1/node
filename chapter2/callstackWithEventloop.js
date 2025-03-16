// 실행 할때 콜스텍이 적제 되서 실행되나 setTimeout은 api 이기 때문에 
// 테스크 큐에 적제 되었다가 이벤트 루프의 단계를 거쳐 다시 콜스택에 적제 되므로
// 실행 순서는 1 -> 3 -> 2로 실행
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");