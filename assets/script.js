// Elemans
var homeBtn = document.querySelector("#hbtn");
var homeImg = document.querySelector("#icon");
var callBtn = document.querySelector("#cbtn");

// functions
homeBtn.addEventListener("click", home);
homeImg.addEventListener("click", home);
callBtn.addEventListener("click", call);
function home(){
    window.location = "index.html"
}
function call(){
    window.location = "call.html"
}