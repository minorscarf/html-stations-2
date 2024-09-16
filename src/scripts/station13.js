function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if(box.checked){
    backColor.style.backgroundColor = 'red';
    console.log('チェック');
  }
  else if(!box.checked){
    backColor.style.backgroundColor = '';
    console.log('解除');
  }
}

let box = document.getElementById('check');
let backColor = document.getElementById('text');
box.checked = false;

box.addEventListener('click', changeBackgroundColor);