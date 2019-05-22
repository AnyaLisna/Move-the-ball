'use strict';

const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', function(event) {
  
  // координаты внешней части поля
  const fieldCoord = field.getBoundingClientRect();

  // координаты внутреней части поля
  const fieldX = fieldCoord.left + field.clientLeft;
  const fieldY = fieldCoord.top + field.clientTop;

  //координаты мяча 
  let ballX = event.clientX - fieldX - ball.clientWidth/2;
  let ballY = event.clientY - fieldY  - ball.clientHeight/2;
  
  // верхняя граница
  if (ballY < 0) {
    ballY = 0;
  }

  // левая граница
  if (ballX  < 0) {
    ballX = 0;
  }

  // правая граница
  if (ballX + ball.clientWidth > field.clientWidth) {
    ballX  = field.clientWidth - ball.clientWidth;
  }

  // нижняя граница
  if (ballY + ball.clientHeight > field.clientHeight) {
    ballY = field.clientHeight - ball.clientHeight;
  }

 ball.style.cssText = `top: ${ballY + 'px'};
 left: ${ballX + 'px'}`;
})


