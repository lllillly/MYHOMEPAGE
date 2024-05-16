window.onload = function () {
  window.scrollTo(0, 0);
};

function updateTime() {
  var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("current-time").innerText =
    "현재시각 : " + hours + "시 " + minutes + "분 " + seconds + "초";
}

setInterval(updateTime, 1000);
