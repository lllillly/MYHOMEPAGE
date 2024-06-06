function showImage(imageNumber) {
  // 테크 이미지
  document.querySelectorAll(".tech-images img").forEach((image) => {
    image.style.display = "none";
  });

  const selectedImage = document.querySelector(`.img${imageNumber}`);
  selectedImage.style.display = "block";
  selectedImage.style.margin = "auto";
}

document.addEventListener("DOMContentLoaded", function () {
  // 오디오
  var audio = document.getElementById("background-music");
  var clickMessage = document.getElementById("click-message");
  audio.volume = 0.3;
  document.body.addEventListener(
    "click",
    function () {
      audio.play();
    },
    { once: true }
  );

  document.body.addEventListener("click", function () {
    audio.play();
    clickMessage.style.display = "none";
  });
});

// 새로고침
window.onload = function () {
  window.scrollTo(0, 0); // 스크롤 맨 위
};

// 새 창 열기
document.getElementById("git_btn").addEventListener("click", function () {
  window.open("https://github.com/lllillly/MYHOMEPAGE");
});

// 현재 시간
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

var iconColors = {};
// 캔버스 아이콘
var canvas = document.getElementById("techCanvas");
var ctx = canvas.getContext("2d");

var iconSpacing = 200;
var startX = 50;
var startY = 50;

ctx.font = "bold 20px Arial";
ctx.textAlign = "center";

drawIcon("React Native", "#C84630", startX, startY);
drawIcon("Spring", "#CE736C", startX + iconSpacing, startY);
drawIcon("React", "#D4A0A7", startX + iconSpacing * 2, startY);
drawIcon("JavaScript", "#DCC2C5", startX + iconSpacing * 3, startY);
drawIcon("MySQL", "#EDD3D6", startX + iconSpacing * 4, startY);
drawIcon("MongoDB", "#B6B6B6", startX, startY + 200);
drawIcon("Node.js", "#898989", startX + iconSpacing, startY + 200);
drawIcon("Python", "#73967D", startX + iconSpacing * 2, startY + 200);
drawIcon("Vue.js", "#689C77", startX + iconSpacing * 3, startY + 200);
drawIcon("TypeScript", "#5DA271", startX + iconSpacing * 4, startY + 200);

function drawIcon(text, color, x, y) {
  iconColors[text] = color;

  function draw() {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 150, 150);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(text, x + 75, y + 85);
  }
  // 아이콘 마우스
  canvas.addEventListener("mousemove", function (event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    if (mouseX >= x && mouseX <= x + 150 && mouseY >= y && mouseY <= y + 150) {
      ctx.clearRect(x, y, 150, 150);
      ctx.fillStyle = "#FFDF71";
      ctx.fillRect(x, y, 150, 150);
      ctx.fillStyle = "#333333";
      ctx.fillText(text, x + 75, y + 85);
    } else {
      ctx.clearRect(x, y, 150, 150);
      draw();
    }
  });

  draw();
}

//타이핑효과
const content = "안녕하세요 개발자 방효진입니다 :)";
const hometext = document.querySelector(".home_text");
let i = 0;

function typing() {
  let txt = content[i++];
  hometext.innerHTML += txt;
  if (i > content.length) {
    hometext.textContent = "";
    i = 0;
  }
}
setInterval(typing, 250);

// aos 페이드
AOS.init();

// scroll 배경
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax-bg");
  let scrollPosition = window.pageYOffset;
  parallax.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
});
