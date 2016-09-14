import {
  sum,
  times,
} from './Vector2';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.addEventListener('touchmove', function(event) {
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    translation.x += touch.pageX / 200;
    translation.y -= touch.pageY / 200;
  }
}, false);

let mouseDown = false;

canvas.addEventListener('mousedown', function(event){
  console.log("Mouse DOWN");
  mouseDown = true;
}, false);

window.addEventListener('mouseup', function(event){
  console.log("Mouse up");
  mouseDown = false;
}, false);

window.addEventListener('onmouseout', function(event){
  console.log("Mouse out");
  mouseDown = false;
}, false);

window.addEventListener('mousemove',function(event){
  if (!mouseDown) {
    return;
  }
  translation.x += event.movementX / scale.x;
  // translation.y -= event.movementY / scale.y;
}, false);

const data = [];

let translation = {x: 0, y: 0};
let scale = {x: 1, y: 1};

const canvasHeight = canvas.height;
const canvasWidth = canvas.width;
const xAxisHeight = 1;
const yAxisWidth = 1;
const paddingLeft = 10;
const paddingTop = 10;

function drawXAxis() {
  const xAxisTop = canvasHeight - paddingTop;
  const xAxisWidth = canvasWidth - 2 * paddingLeft;
  ctx.fillRect(paddingLeft, xAxisTop, xAxisWidth, xAxisHeight);
}

function drawYAxis() {
  const yAxisHeight = canvasHeight - 2 * paddingTop;
  ctx.fillRect(paddingLeft, paddingTop, yAxisWidth, yAxisHeight);
}

function drawXAxisTics() {
  // console.log("Draw x axis tics");
}

function drawYAxisTics() {
  // console.log("Draw y axis tics");
}

function worldToScreen(point) {
  const scaledCoordinates = times(point, scale);
  const screenCoordinates = sum(scaledCoordinates, translation);
  const leftPadding = paddingLeft + xAxisHeight / 2;
  const topPadding = canvasHeight - paddingTop;
  const paddedCoordinates = sum({x: screenCoordinates.x, y: -screenCoordinates.y}, {x: leftPadding, y: topPadding});
  return paddedCoordinates;
}

function drawPoint(position, radius) {
  const screenCoordinates = worldToScreen(position);
  ctx.beginPath();
  ctx.arc(screenCoordinates.x, screenCoordinates.y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawXAxis();
  drawYAxis();
  drawXAxisTics();
  drawYAxisTics();
  for (let i = 0; i < 50; i++) {
    drawPoint({x: 10 * i, y: 20 * (i % 6)}, 5);
  }
}

setInterval(() => {
  draw();
}, 15);
