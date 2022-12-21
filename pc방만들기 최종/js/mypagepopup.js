function openWin() {
	var url = "mypage.html";
	var title = "나의정보";
	var prop = "top=200px, left=600px, width=495px, height=481.5px";
	window.open(url, title, prop);
}

    // const updateBtnEl = document.querySelector('#updateinfo');
    // updateBtnEl.addEventListener('click',function(){
    //   alert("TEST");
    //   window.close();
    // })

function closeWin(){
  alert("정보수정완료!!");
  window.close();
}


