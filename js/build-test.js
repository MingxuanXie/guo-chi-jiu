var x = document.getElementById("voice"); 
var z = document.getElementById("npc");
var a = document.getElementById("startbutton");
var b = document.getElementById("opponent");
var c = document.getElementById("game");
var d = document.getElementById("replay");
var e = true;
var f = document.getElementById('intro-sound');
var g = document.getElementById('loop-sound');

document.getElementById("a-loader").addEventListener("loaded", activateStartButton);
function activateStartButton() {
  a.style.display = "block";
}
function activateScene(foo) {    
    // z.components.sound.playSound();
    f.play();    
    z.setAttribute('animation-mixer', {timeScale: 1});
    a.style.display = "none";
    setTimeout(function(){
      b.object3D.visible = true;
      c.style.display = "block";
      z.setAttribute('sound', {src: '#loop-sound', loop: true});
      // z.components.sound.playSound();
      g.play();
    }, foo);
    setTimeout(function(){
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
  b.components.gif.togglePlayback();
  c.style.display = "none";
  d.style.display = "block";
}
function activateReplay() { 
  b.components.gif.togglePlayback();
  c.style.display = "block";
  d.style.display = "none";
}
// Audio

// if (window.WeixinJSBridge) {
// 	WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
// 		oAudio.play();
// 	}, false);
// } else {
// 	document.addEventListener("WeixinJSBridgeReady", function () {
// 		WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
// 			oAudio.play();
// 		});
//     }, false);
// }
// oAudio.play();