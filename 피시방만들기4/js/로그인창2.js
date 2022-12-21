const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

const signinBlockEl=document.querySelector('.container--signin');
const signupBlockEl=document.querySelector('.container--signup');

// signInBtn.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });

// signUpBtn.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

signInBtn.addEventListener('click',function(){

  signinBlockEl.classList.add("show");
  signupBlockEl.classList.add("hide");
});
