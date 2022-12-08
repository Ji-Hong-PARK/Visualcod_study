// 스타트함수랑 스탑함수를 만들어보자.
// const 자바에서 파이널리와 같은값 
const ballEl = document.querySelector('.box>#ball');
const start = () => {
  ballEl.style.animationPlayState='running';
}

const stop = () => {
  ballEl.style.animationPlayState='paused';
}