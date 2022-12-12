const badgeEl = document.querySelector('section>.sticky-banner');

// window.addEventListener('scroll', function(){
//   // console.log('scroll!!');
//   console.log(window.scrollY);
// })

//.throttle(함수, 지연시간) 0.3초단위로 실행될수있게 한다.
window.addEventListener('scroll',_.throttle(function(){
  console.log('scroll!!');
  if(window.scrollY > 700){
    //배지 숨기기
    badgeEl.Style.display='neno';
    badgeEl.Style.animationName='bgdown';
    badgeEl.Style.animationDuration='1s';
  }else{
    //배지 표시하기
    badgeEl.Style.display='block';
    badgeEl.Style.animationName='bgup';
    badgeEl.Style.animationDuration='1s';
  }


},300));