paddle1 = 10;
paddle2 = 10;

paddle1X = 10;

paddle1Y = '';
paddle2Y = 685;

paddle1Height = 110;
paddle2Height = 70;

score1 = 0;
score2 = 0;

playerscore = 0;
pcscore = 0;

//ball: x, y, raio, velocidade em x e velocidade em y
ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}

rightWristY = 0;
rightWristX = 0;
scoreRightWrist = 0;

gameStatus = "";

 function preload() {
  ballTouchPaddel = loadSound("ball_touch_paddel.wav");
  missed = loadSound("missed.wav");
}

function setup(){
canvas =  createCanvas(700,550);
canvas.parent('canvas');

video = createCapture(VIDEO);
video.size(700, 550);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose, gotPoses');
}

function modelLoaded() {
  console.log(poseNet Is Initialized);
}

function gotPoses(results)
{
  if(results.length > 0)
{

  rightWristY = results[0].pose.rightWrist.y;
  rightWristX = results[0].pose.rightWrist.y;
  scoreRightWrist = results[0].pose.keypoints[10].score;
  console.log(scoreRightWrist);
  }
}

function startGame() {
  gameStatus = "start";
}