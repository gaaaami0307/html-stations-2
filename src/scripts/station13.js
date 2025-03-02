function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  var chb=document.getElementById("check");
  var txt=document.getElementById("text");
  if(chb.checked==true){
    txt.style.backgroundColor="Red";
  }else{
    txt.style.backgroundColor="White";
  }
}
