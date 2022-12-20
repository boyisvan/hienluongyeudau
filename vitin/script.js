
function submit() {
    alert("hello");
}

   
var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' ';
var time = today.getHours() + ":" + today.getMinutes() ;
document.getElementById("time").innerHTML=date+time;
var a = document.getElementById("tentaikhoannguon").value;
function hien(){
    alert(a+"xin chào   ");
}
// document.getElementById("nametaikhoannguon").innerHTML =