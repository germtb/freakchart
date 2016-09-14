// import {
//   sum,
//   times,
// } from '../Vector2';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

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
  console.log("Draw x axis tics");
}

function drawYAxisTics() {
  console.log("Draw y axis tics");
}

function drawPoint(position, radius) {
  const screenCoordinates = worldToScreen(position);
  ctx.beginPath();
  ctx.arc(screenCoordinates.x, screenCoordinates.y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

// function worldToScreen(point) {
//   return sum(sum(times(point, scale), translation), {x: paddingLeft, y: paddingTop});
// }

function draw() {
  drawXAxis();
  drawYAxis();
  drawXAxisTics();
  drawYAxisTics();
}

draw();
// drawPoint({x: 0, y: 0}, 10);
// drawPoint({x: 10, y: 0}, 10);
// drawPoint({x: 20, y: 0}, 10);
// drawPoint({x: 30, y: 0}, 10);
// drawPoint({x: 40, y: 0}, 10);
// drawPoint({x: 50, y: 0}, 10);
