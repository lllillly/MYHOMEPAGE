// script.js

// 초기 아이콘 색상 저장을 위한 객체
var iconColors = {};

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

// 기술 아이콘들 그리기
var canvas = document.getElementById("techCanvas");
var ctx = canvas.getContext("2d");

// 아이콘 간격과 시작 좌표 설정
var iconSpacing = 200;
var startX = 50;
var startY = 50;

// 텍스트 크기 및 정렬 설정
ctx.font = "bold 20px Arial";
ctx.textAlign = "center";

// 아이콘들 그리기 및 초기 색상 저장
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

// 아이콘 그리는 함수
function drawIcon(text, color, x, y) {
  // 초기 아이콘 색상 저장
  iconColors[text] = color;

  function draw() {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 150, 150);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(text, x + 75, y + 85);
  }

  // 아이콘에 호버 효과 추가
  canvas.addEventListener("mousemove", function (event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    if (mouseX >= x && mouseX <= x + 150 && mouseY >= y && mouseY <= y + 150) {
      ctx.clearRect(x, y, 150, 150);
      ctx.fillStyle = "#FFDF71"; // 호버 시 색상 변경
      ctx.fillRect(x, y, 150, 150);
      ctx.fillStyle = "#333333";
      ctx.fillText(text, x + 75, y + 85);
    } else {
      ctx.clearRect(x, y, 150, 150);
      draw();
    }
  });

  // 초기 아이콘 그리기
  draw();
}

const content = "안녕하세요 풀스택 개발자 방효진입니다 :)";
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

//
AOS.init();
