let finishline = 370;
let start = false;
let gameStart = false;
let gameOver = false;
let duckImg;
let duckImg2;
let poolImg;
let winImg;
let startImg;
let winnerMessage = "";

//Duck 1 Pink//
let myduck = {
  x : 75,
  y : 120,
  s : 100,
  increment : 5,
  win : false,
  
  display : function() {  
    image(duckImg, this.x, this.y, this.s, this.s); 
  },

updatePos : function(){
  this.x = this.x + this.increment;
}
};

//Duck 2 Yellow//
let myduck2 = {
  x : 75,
  y : 140,
  s : 100,
  increment : 5,
  win: false,

  display : function() {
  image(duckImg2, this.x, this.y, this.s, this.s); 
},

  updatePos : function(){
    this.x = this.x + this.increment;
  }
};

//images//
function preload() {
  poolImg = loadImage("pool.png"); 
  duckImg = loadImage("Rubber Duck2.png"); 
  duckImg2 = loadImage("Rubber duck.png");
  winImg = loadImage("YOU WIN!.png");
  startImg = loadImage("TitlePage.png");
}

function setup() {
  createCanvas(500, 300);
}

function draw() {
  if (!gameStart) {
    showInstructions();
  } else {
    background(poolImg);
    myduck.display();
    myduck2.display();
  }
   checkWinner();
   if (gameOver){
    showWinnerwinner(Message);
   }
  }

  //START PAGE//
function showInstructions(){
    background(startImg);
}
  //check winner//
function checkWinner() {
  if (myduck.x > finishline && !gameOver){
    gameOver = true;
    showWinner("Pink Duck Wins!");
  } else if (myduck2.x > finishline && !gameOver) {
    myduck2.win = true;
    gameOver = true;
    showWinner("Yellow Duck Wins!");
  }
}

//winner screen//
function showWinner(message) {
  fill(255, 0, 0);
  textSize(25);
  textAlign(CENTER);
  text(message, width / 2, 30);

  let winWidth = 450;
  let winHeight = 320;
  let winX = width / 2 - winWidth /2;
  let winY = height / 2 - winHeight / 2;
  image(winImg, winX, winY, winWidth, winHeight);
}

//controls//
function keyPressed() {
  if (keyCode === ENTER && !gameStart) {
    gameStart = true; 
  }

  if (gameStart && !gameOver) {
    if (key.toLowerCase() === "a") {
      myduck.updatePos();
    } else if (key.toLowerCase() === "l") {
      myduck2.updatePos();
    }
  }
}