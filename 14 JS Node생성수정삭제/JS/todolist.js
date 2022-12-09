//Todo <-> Done 전환 버튼 이벤트

// TodoBtnEl를 설정하기위해 버튼 TodoBtn을 찾을것이다.
const TodoBtnEl = document.querySelector('.btn--Todo');
// TodoBtnEl를 설정하기위해 버튼 DoneBtn을 찾을것이다.
const DonedoBtnEl = document.querySelector('.btn--Done');


// body부분에 있는 Todo를 찾아 블럭 처리로된것을 TodoBlockEl로 지정.
const TodoBlockEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do');
// body부분에 있는 Done를 찾아 블럭 처리로된것을 DoneBlockEl로 지정.
const DoneBlockEl = document.querySelector('.TodoContainer>.Todo__body>.body__Done');

// -----------------------------------------------------------------------------

// Done 버튼처리 이벤트처리.
DonedoBtnEl.addEventListener('click', function () {
  // 클릭을 했다면 펑션처리
  DoneBlockEl.classList.remove('hidden');
  DoneBlockEl.classList.add('active');

  TodoBlockEl.classList.remove('active');
  TodoBlockEl.classList.add('hidden');

  TodoBlockEl.style.animationName = 'ToDone';
  TodoBlockEl.style.animationName = '.4s';
})

// Todo버튼을 눌렀을때 이벤트처리.
TodoBtnEl.addEventListener('click', function () {
  // 클릭을 했다면 펑션처리
  TodoBlockEl.classList.remove('hidden');
  TodoBlockEl.classList.add('active');

  DoneBlockEl.classList.remove('active');
  DoneBlockEl.classList.add('hidden');

  TodoBlockEl.style.animationName = 'DoneTo';
  TodoBlockEl.style.animationName = '.4s';
})

// Item -> TodoListBlock add
const InputEl = document.querySelector('.TodoContainer>.Todo__header>input');
const TodoListsEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul');

const appendTodo = () => {

  // 비어있을때에는 추가X
  // 체크박스를 누르면 메세지창 띄우기
  if (InputEl.value == '') {
    alert("할 일을 적어주세여..");
    return;
  }

  const liEl = document.createElement('li');
  let code = '';
  code += '<div><button class="btnicon" onclick = "ToDoneList(this)"><i class="bi bi-check2-square"></i></button>';
  code += '</div><div><span>' + InputEl.value + '</span></div>';
  code += '<div>';
  code += '<button class="btnicon" onclick = "prev(this)"><i class="bi bi-caret-up-square"></i></button>';
  code += '<button class="btnicon" onclick = "next(this)"><i class="bi bi-caret-down-square"></i></button>';
  code += ' </div>';
  code += '';

  liEl.innerHTML = code;
  TodoListsEl.append(liEl);
  InputEl.value = '';

};


// 엔터키에 대한 이벤트
InputEl.addEventListener('keydown', function () {
  // console.log(event.keyCode)
  if (event.keyCode == 13) {
    appendTodo();
  }
})


// -----------------------------------------------------------------------
// 아래꺼가 안됨..
// Todo -> Done Move 투두에서 던으로 이동하는 이벤트
const ToDoneList = function (El) {
  // alert("CLICKED");
  // alert(El);                                         //button태그
  // alert(El.parentNode); //부모찾기                    //div 태그
  // alert(El.parentNode.parentNode); //부모의 부모찾기  // li태그
  const liEl = El.parentNode.parentNode;

  // 1, 3 icon(아이콘) 변경
  // liEl.children[0]; // li안의 1번째 div 태그 찾기

  const childEl1 = liEl.children[0]; // li안의 1번째 div 태그(아이콘)
  const childEl2 = liEl.children[1]; // li안의 1번째 div 태그(내용)
  const childEl3 = liEl.children[2]; // li안의 1번째 div 태그(아이콘)

  childEl1.children[0].remove(); // 1번째 div태그 안의 첫번째 자식 제거.
  childEl1.innerHTML = '<button class="btnicon onclick = "ToTodoList(this)"><i class="bi bi-dash-square"></i></button>';

  childEl3.children[0].remove(); // 3번째 div 태그 안의 첫번째 자식 제거
  childEl1.innerHTML = '<button class="btnicon" onclick="removieLi(this)"><i class="bi bi-trash"></i></button>';

  // TodoListUl -> DoneListUl로 li옮기기
  const DoneListEl = document.querySelector('.TodoContainer>.Todo__body>.body__Done>ul');
  DoneListUlEl.append(liEl);

}

// DoneList -> TodoList li move
const ToTodoList = function (El) {
  // alert("clicked!");
  const liEl = El.parentNode.parentNode; //li태그
  // 1, 3 icon 변경
  const childEl1 = liEl.children[0]; // li안의 1번째 div 태그(아이콘)
  const childEl2 = liEl.children[1]; // li안의 1번째 div 태그(내용)
  const childEl3 = liEl.children[2]; // li안의 1번째 div 태그(아이콘)

  childEl1.children[0].remove(); // 1번째 div태그 안의 첫번째 자식 제거.
  childEl1.innerHTML = '<button class="btnicon" onclick="ToTodoList(this)"><i class="bi bi-dash-square"></i></button>';

  childEl3.children[0].remove(); // 3번째 div 태그 안의 첫번째 자식 제거
  childEl3.innerHTML = '<button class="btnicon" onclick = "prev(this)"><i class="bi bi-caret-up-square"></i></button>';
  childEl3.innerHTML += '<button class="btnicon" onclick = "next(this)"><i class="bi bi-caret-down-square"></i></button>';

  // DoneListUl -> TodoListUl로 li옮기기
  const TodoListUlEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul');
  TodoListUlEl.append(liEl);
}
// 이게  안되네,.  todo에서 쓴게 done로 가지는게.. 안되.
//---------------------------------------------------------------------------------------

// // 선생님 코드
// // Todo->Done Move
// const ToDoneList=function(El){
//   // alert("CLICKED");
//   // alert(El);                         //button
//   // alert(El.parentNode);              //div
//   // alert(El.parentNode.parentNode);   //li
//   const liEl=El.parentNode.parentNode;
//   // 1,3 icon 변경
//   const childEl1 = liEl.children[0]; //li안의 1번째 div태그(아이콘)
//   const childEl2 = liEl.children[1]; //li안의 2번째 div태그(내용)
//   const childEl3 = liEl.children[2]; //li안의 3번째 div태그(아이콘)
//   childEl1.children[0].remove(); //1번째 div태그 안의 첫번째 자식 제거
//   childEl1.innerHTML='<button class="btnicon" onclick="ToTodoList(this)"><i class="bi bi-dash-square"></i></button>';
//   childEl3.children[0].remove(); //3번째 div태그 안의 첫번째 자식 제거
//   childEl3.innerHTML='<button class="btnicon"><i class="bi bi-trash"></i></button>';
//   // TodoListUl -> DoneListUl로 li옮기기
//   const DoneListUlEl=document.querySelector('.TodoContainer>.Todo__body>.body__Done>ul');
//   DoneListUlEl.append(liEl);
// }
// // DoneList->TodoList li move
// const ToTodoList=function(El){
//   // alert("clicked!!");
//   const liEl=El.parentNode.parentNode;  //li 태그
//   // 1,3 icon 변경
//   const childEl1 = liEl.children[0]; //li안의 1번째 div태그(아이콘)
//   const childEl2 = liEl.children[1]; //li안의 2번째 div태그(내용)
//   const childEl3 = liEl.children[2]; //li안의 3번째 div태그(아이콘)
//   childEl1.children[0].remove(); //1번째 div태그 안의 첫번째 자식 제거
//   childEl1.innerHTML='<button class="btnicon" onclick="ToDoneList(this)"><i class="bi bi-check-square"></i></button>';
//   childEl3.children[0].remove(); //3번째 div태그 안의 첫번째 자식 제거
//  childEl3.innerHTML='<button class="btnicon"><i class="bi bi-caret-up-square"></i></button>';
//  childEl3.innerHTML+='<button class="btnicon"><i class="bi bi-caret-down-square"></i></button>'; 
//   // DoneListUl -> TodoListUl  로 li옮기기
//   const TodoListUlEl=document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul');
//   TodoListUlEl.append(liEl);
// }
// --------------------------------------------------------------------------



//  휴지통 버리기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const removeLi = function (El) {
  // alert("remove!!!");
  // alert(El.parentNode.parentNode);
  const liEl = El.parentNode.parentNode;
  let isremove = confirm('정말 삭제 하실껀가요?');
  if (isremove) {
    liEl.remove();
  }

};


// prev next 함수 생성
const prev = function (El) {
  // alert("Prev");
  const liEl = El.parentNode.parentNode;
  const prevliEl = liEl.previousSibling; // Null 리턴
  liEl.after(prevliEl);

  if (prevliEl.value === undefined){
    alert("최상위입니다.");
      return;
  }
  else
    liEl.after(prevliEl);
  
}

const next = function (El) {
  // alert("Prev");
  const liEl = El.parentNode.parentNode;
  const nextliEl = liEl.nextSibling; // Null 리턴
  liEl.after(nextliEl);

  if (nextliEl === null){
    alert("최하위입니다.");
      return;
  }
  else
    liEl.after(nextliEl);
  
}