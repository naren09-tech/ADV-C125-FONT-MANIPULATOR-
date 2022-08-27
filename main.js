var difference=10;
function setup(){
    canvas=createCanvas(500,300);
    canvas.position(400,100);
    video=createCapture(VIDEO);
    video.size(350,300);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftW=results[0].pose.leftWrist.x;
        rightW=results[0].pose.rightWrist.x;
        difference=Math.floor(leftW-rightW);
        console.log(leftW);
        console.log(rightW);
        console.log(difference);
    }
}
function draw(){
    background("red");
    textSize(difference);
    fill("black");
    text("Naren",30,200);
}