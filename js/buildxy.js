var x = document.getElementById("voice"); 
var z = document.getElementById("npc");
var a = document.getElementById("startbutton");
var b = document.getElementById("opponent");
var c = document.getElementById("game");
var d = document.getElementById("replay");
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var dice3 = document.getElementById("dice3");
var dice4 = document.getElementById("dice4");
var dice5 = document.getElementById("dice5");
var e = true;
document.getElementById("a-loader").addEventListener("loaded", activateStartButton);
function activateStartButton() {
  a.style.display = "block";
}
function activateScene(foo) {    
    z.components.sound.playSound();    
    z.setAttribute('animation-mixer', {timeScale: 1});
    a.style.display = "none";
    setTimeout(function(){
      b.object3D.visible = true;
      c.style.display = "block";
    }, foo);
    setTimeout(function(){
      z.setAttribute('sound', {src: '#loop-sound', loop: true});
      z.components.sound.playSound();
      z.setAttribute('animation-mixer', {timeScale: -1, loop: 'repeat'});
      e = true;
      setInterval(function(){
        if (e){
          z.setAttribute('animation-mixer', {timeScale: 1});
          e = false;
        } else {
          z.setAttribute('animation-mixer', {timeScale: -1});
          e = true;
        }
      }, 2400);
    }, 29000);

}
function activateGame() { 
  dice1.components.hyperrotate.pause();
  dice2.components.hyperrotate.pause();
  dice3.components.hyperrotate.pause();
  dice4.components.hyperrotate.pause();
  dice5.components.hyperrotate.pause();
  c.style.display = "none";
  d.style.display = "block";
}
function activateReplay() { 
  dice1.components.hyperrotate.play();
  dice2.components.hyperrotate.play();
  dice3.components.hyperrotate.play();
  dice4.components.hyperrotate.play();
  dice5.components.hyperrotate.play();
  c.style.display = "block";
  d.style.display = "none";
}