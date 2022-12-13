//gnbSecondEl(2번쨰)  //이미 해놨으니 주석처리를 하자!
// const gnbSecondEl = document.querySelector('header>.inner>.gnb-second');

//gnbEl(3번쨰)
const gnbEl = document.querySelector('header>.inner>.gnb');

//body
const bodyEl = document.querySelector('body')

window.addEventListener('scroll', _.throttle(function(){

  console.log(window.scrollY);
  if(window.scrollY > 700){
    //gnbSecondEl 숨기기
    gnbSecondEl.style.marginTop = "-86px"
    //gnbE1 올리기
    gnbEl.style.marginTop = "-86px"
    //bodyEl 올리기
    bodyEl.style.paddingTop = '108px';
  }else{
    //gnbSecondEl 숨기기
    gnbSecondEl.style.marginTop = "0px"
    //gnbE1 올리기
    gnbEl.style.marginTop = "0px"
    //bodyEl 올리기
    bodyEl.style.paddingTop = '190px';
  }

}, 300));