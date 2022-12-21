
// 네비게이션 슬라이드
new Swiper('nav>.leftmenu>.swiper',{
  direction:'vertical',
  autoplay:true, //3000m/s 기본
  lopp:true
})

//메인메뉴 오른쪽 수평 슬라이드
new Swiper('.sub-contents>.banner>.inner>.swiper',{
  direction:'horizontal', //수평 슬라이드(기본)
  autoplay:true,
  loop:true, //무한재생
  //pagination
  pagination:{
    el:'.sub-contents .swiper-pagination',
    type:'bullets', //bullets,progressbar,fraction
    clickable:'true'
  },
});