function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
function takesnapshot(){
   save("Mypicture.png");
}
}

function modelloaded(){
   console.log("posenet model is loaded");
}

function gotposes(results){
   if(results.length>0)
{
   console.log(results);
   console.log("NoseX= "+results[0].pose.nose.x);
   console.log("NoseY= "+results[0].pose.nose.y);
}

   

}