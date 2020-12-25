var a = document.getElementById("startbutton");
var b = document.getElementById("npc")
var n1 = document.getElementById("g1");
var n3 = document.getElementById("g3");
var n4 = document.getElementById("g4");
var n5 = document.getElementById("g5");
var n6 = document.getElementById("g6");
var n7 = document.getElementById("g7");
// var n8 = document.getElementById("g8");
document.getElementById("a-loader").addEventListener("loaded", activateStartButton);
function activateStartButton() {
  a.style.display = "block";
}
function activateScene(foo) {   
    b.components.sound.playSound();     
    n1.setAttribute('animation-mixer', {timeScale: 1});
    n3.setAttribute('animation-mixer', {timeScale: 1});
    n4.setAttribute('animation-mixer', {timeScale: 1});
    n5.setAttribute('animation-mixer', {timeScale: 1});
    n6.setAttribute('animation-mixer', {timeScale: 1});
    n7.setAttribute('animation-mixer', {timeScale: 1});
    // n8.setAttribute('animation-mixer', {timeScale: 1});
    a.style.display = "none";
}
