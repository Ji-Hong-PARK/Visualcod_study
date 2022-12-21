// 시간충전메뉴 버튼이벤트
window.onload = function () {
  var el = document.getElementsByClassName("item");
  el.onclick = timebutton;
}
function timebutton()  {
if(confirm('선택한시간으로 충전하시겠습니까?')){
  return false;
}
}

// 관리자호출 버튼이벤트
window.onload = function() {
  var el = document.getElementsByClassName("managercall");
  el.onclick = macbutton;
}
function macbutton(){
  alert("호출중입니다.. 잠시만 기다려주세요!")
}
