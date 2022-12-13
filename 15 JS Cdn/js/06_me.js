const spyEls = document.querySelectorAll('section.scroll-spy'); //(section.scroll-spy)띄워쓰기하면안됨
spyEls.forEach(function(spyEl){
 //.      //.({셀렉터 주소를 넣어준다.})어느시점에서 스크롤 이벤트를 넣어줄것인지  //.  스크롤 감시대상
  new ScrollMagic           //객체생성    
  .Scene({
    triggerElement : spyEl, //감시할 요소 선택
    triggerHook : 0.85,      //스크린에서의 스크롤 위치 선택부분 (0.5가 화면의 반이라고 생각 0.7 = 70%라고생각) 소수점 앞에 0은 생략가능.
  })
  .setClassToggle(spyEl,'show') //show라는 클래스가 부여
  .addTo(new ScrollMagic.Controller()); //쇼라는 클래스가 부여되는것과 동시에 컨트롤러라는 객체를 생성했다. 


});