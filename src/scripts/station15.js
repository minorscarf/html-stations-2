let divElemenet = document.getElementById("fruits");
let btn         = document.getElementById("button");
divElemenet.innerHTML = "<p>リンゴ</p><p>イチゴ</p><p>ブドウ</p>";

function displayList(){
    divElemenet.innerHTML ="<ul><li>リンゴ</li><li>イチゴ</li><li>ブドウ</li></ul>";
}