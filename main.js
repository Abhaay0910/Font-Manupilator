difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(500,450);
    canvas.position(700,80);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('Posenet is Initialized!');
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
    }
}
function draw(){
    background('#969A97');

    document.getElementById("font_size").innerHTML="Font Size of the Text Will Be = "+ difference + "px";
    textSize(difference);
    fill('#F90093');
    stroke('#F90093');
    text('Abhaay',50,400);
}