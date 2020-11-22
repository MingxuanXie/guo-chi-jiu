// var x = document.getElementById("voice"); 
// var z = document.getElementById("npc");
var a = document.getElementById("startbutton");
// var d = document.getElementById("replay");
var e = true;
var n1 = document.getElementById("g1");
var n2 = document.getElementById("g2");
var n3 = document.getElementById("g3");
var n4 = document.getElementById("g4");
var n5 = document.getElementById("g5");
document.getElementById("a-loader").addEventListener("loaded", activateStartButton);
function activateStartButton() {
  a.style.display = "block";
}
function activateScene(foo) {    
    n1.setAttribute('animation-mixer', {timeScale: 1});
    n2.setAttribute('animation-mixer', {timeScale: 1});
    n3.setAttribute('animation-mixer', {timeScale: 1});
    n4.setAttribute('animation-mixer', {timeScale: 1});
    n5.setAttribute('animation-mixer', {timeScale: 1});
    a.style.display = "none";
}