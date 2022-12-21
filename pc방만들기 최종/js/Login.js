// 로그인 <-> 회원가입 버튼슬라이드 이벤트
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

// 로그인패널 이벤트
console.log("fighting!");
console.log(document); // html 태그 전체를 콘솔에 띄워주자.

var signinButton = document.getElementById("signinButton") // 버튼을 만들고.
signinButton.addEventListener('click', signinFunc) // 'click'이란 id의 버튼을 누르면 signinFunc 함수를 실행.

function signinFunc() {
  var userid = document.getElementById("userid").value; // userid 의 값을 받아와 넣음.
  var userpw = document.getElementById("userpw").value; // userpw 의 값을 받아와 넣음.

// 로그인 아이디와  비번  
  if (userid == "kpc12@naver.com" && userpw == "kpc!@1234") {
    alert("어서오세요! KoreaPC입니다!");
    console.log("로그인 성공했습니다.");
    location.href='mainmenu.html'
  } else {
    alert("ID나 Password가 틀렸습니다.");
    console.log("로그인 실패했습니다.");
    
  }


}