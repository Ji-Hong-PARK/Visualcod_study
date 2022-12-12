
new Swiper('section>.main-banner>.inner>.swiper',{
  direction:'horizontal', //수평 슬라이드(기본)
  autoplay:{            //시작시 바로 재생 여부
      delay:3000,
      disableOnInteraction:false //사용자의 action에 따른 슬라이드 동작 정지여부
  },
  loop:true, //무한재생

  // navigation 
  navigation:{
    prevEl:'section>.main-banner>.inner>.swiper>.swiper-button-prev',
    nextEl:'section>.main-banner>.inner>.swiper>.swiper-button-next'
  },
  
  //pagenation
  pagenation:{
    el:'section>.main-banner>.inner>.swiper>.swiper-pagination', //'selector'대신 주소를 붙여넣는다.
    type:'fraction', //bullets,progressbar,fraction
    clickable:'true'
  } ,


  // 마우스 휠 효과
  mousewheel : true,
  effect : 'fade',
  speed : 3000,  //3초간격으로 변환.


  // 스크롤바
  scrollbar:{
    el:'.main-banner .swiper-scrollbar',    //'selector',
    draggable : true
  }



});