var cameraView;
var ua = window.navigator.userAgent.toLowerCase(); // for Wechat detection
var constraints = {
    audio: false,
    video: {
        facingMode: "environment",
    }
};
// Access the device camera and stream to cameraView
function cameraStart() {
  // Detect if Wechat
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      alert("AR体验暂不支持微信\n请用原生浏览器（如Safari）打开页面并允许使用设备相机");
  }
  cameraView = document.querySelector("#webcam");
  navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(stream) {
      cameraView.srcObject = stream;
  })
  .catch(function(error) {
      // console.error("Oops. Something is broken.", error);
      alert("当前浏览器不支持AR\n请用原生浏览器（如Safari）打开页面并允许使用设备相机");
  });
}
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);
