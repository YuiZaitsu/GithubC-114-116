nosex=0;
nosey=0
function preload(){
mustage_pic=loadImage("https://i.postimg.cc/y8qB5kY3/m.png")
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function takesnapshot(){
   save("Mypicture.png");
}

function draw(){
   image(video,0,0,300,300);
   image(mustage_pic,nosex,nosey,60,60);
}

function modelloaded(){
   console.log("posenet model is loaded");
}

function gotposes(results){
   if(results.length>0)
{
   nosex=results[0].pose.nose.x-30;

   nosey=results[0].pose.nose.y-15;

   console.log("NoseX= "+nosex);
   console.log("NoseY= "+nosey);
}

}