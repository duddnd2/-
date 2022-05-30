function filter(){

    var value, name, pic, i;

    value = document.getElementById("value").value;
    pic = document.getElementsByClassName("pic");

    for(i=0;i<pic.length;i++){
      name = pic[i].getElementsByClassName("name");
      if(name[0].innerHTML.indexOf(value) > -1){
        pic[i].style.display = "flex";
      }else{
        pic[i].style.display = "none";
      }
    }
  }
  /*https://thisisspear.tistory.com/40*/


var menu, tag, pic, i;


document.getElementById("long1").addEventListener('click',long1);
function long1(){
  pic = document.getElementsByClassName("llong1");
  for(i=0;i<pic.length;i++){
    pic[i].style.display = "flex";
}
}