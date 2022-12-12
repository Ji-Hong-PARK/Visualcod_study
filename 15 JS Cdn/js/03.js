
new Swiper('.second-banner>.inner>.swiper',{
  direction:'horizontal', //수평 슬라이드(기본)
  autoplay:{            //시작시 바로 재생 여부
      delay:3000,
      disableOnInteraction:false //사용자의 action에 따른 슬라이드 동작 정지여부
  },
  loop:true, //무한재생

  slidesPerView:3,   //한번에 보여주는 슬라이드 갯수(3개)
  spaceBetween:5,   // 슬라이드 마다 간격(px)
  centereSlides:true,








  // navigation 
  navigation:{
    prevEl:'.second-banner>.inner>.swiper>.swiper-button-prev',
    nextEl:'.second-banner>.inner>.swiper>.swiper-button-next'
  },
  
  // //pagenation
  // pagenation:{
  //   el:'section>.main-banner>.inner>.swiper>.swiper-pagination', //'selector'대신 주소를 붙여넣는다.
  //   type:'fraction', //bullets,progressbar,fraction
  //   clickable:'true'
  // } ,


  // // 마우스 휠 효과
  // mousewheel : true,
  // effect : 'fade',
  // speed : 3000,  //3초간격으로 변환.


  // // 스크롤바
  // scrollbar:{
  //   el:'.main-banner .swiper-scrollbar',    //'selector',
  //   draggable : true
  // }



});