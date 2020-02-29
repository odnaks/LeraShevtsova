let one;
let random_paleete;
let widthButton;
let heightButton;
let isMobile;

function isMobileFunc(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = 1; 
    }
    else {
      isMobile = 0;
    }
};
window.onload = isMobileFunc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  heightButton = windowHeight / 10;
  widthButton = heightButton * 3;
  uxNoFill();
  uxNoStroke();
  one = uxRect(windowWidth / 2 - widthButton / 2, windowHeight / 2 - heightButton / 2, widthButton, heightButton);
  one.uxEvent('click', trigger);
  two = uxRect(windowWidth / 2 - widthButton / 2, windowHeight / 2 - heightButton / 2, widthButton, heightButton);
  two.uxEvent('hover', hover);
  random_paleete = round(Math.random() * 5);
}

function sleep(ms) {
  ms += new Date().getTime();
  while (new Date() < ms){}
}

var color_rect = 0;
var color_inst = 255;
var times = 0;
var random_x_inst;
var random_y_inst;
var color_button;
let colors = [
        ['#333333',  '#ffffff', '#202020', '#706c61', '#e1f4f3'],
        ['#B8D8D8', '#7A9E9F', '#4F6367',  '#EEF5DB', '#FE5F55'],
        ['#39B54A', '#006494', '#E40066', '#FF1B1C',  '#F1C40F'],
        ['#2E2D4D', '#048BA8', '#A62639',  '#99C24D', '#F18F01'],
        ['#eaeaea',  '#a1dd70', '#FF5E5B', '#8559a5', '#00bdaa'],
        [ "#00178C", "#2C00E0", "#9000FF", "#EE00FF", "#FF87AF"]
];

function draw() {
  if (mouseIsPressed) {
    // fill(0);
  } else {
    let random_color = round(Math.random() * 4);
    fill(colors[int(random_paleete)][int(random_color)]);
    color_button = colors[int(random_paleete)][4];
    size_random = Math.random() * 50;
    textSize(size_random);
    let random_style = round(Math.random() * 3);
    switch (random_style) {
      case 0:
        textStyle(ITALIC);
        break;
      case 1:
        textStyle(BOLD);
        break;
      case 2:
        textStyle(BOLDITALIC);
        break;
      default:
        textStyle(NORMAL);
    }
    if (isMobile == 1){
      let random_x = round(Math.random() * windowWidth);
      let random_y = round(Math.random() * windowHeight);
      text("LERA SHEVTSOVA", random_x, random_y);
    }
    else{
      text("LERA SHEVTSOVA", mouseX, mouseY);
    }
    fill(color_rect);
    color_rect = 0;
    rect(windowWidth / 2 - widthButton / 2, windowHeight / 2 - heightButton / 2, widthButton, heightButton);
    fill(color_inst);
    color_inst = 255;
    stroke(0);
    textSize(heightButton / 5);
    textStyle(BOLD);
    let lableName = "FACEBOOK";
    let labenWidth = textWidth(lableName);
    text('FACEBOOK', windowWidth / 2 - labenWidth / 2, windowHeight / 2 + heightButton / 10);
    random_x_inst = round(Math.random() * 220) + 580;
    random_y_inst = round(Math.random() * 70) + 410;
    sleep(50);
  }
}

function trigger() {
  location.href = "https://www.facebook.com/foggliar";
}

function hover() {
  color_rect = color_button;
  color_inst = 0;
}
