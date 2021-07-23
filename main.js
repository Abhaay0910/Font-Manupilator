function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(500,450);
    canvas.position(700,80);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#969A97')
}
function modelLoaded() {
    console.log('Posenet is Initialized!');
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
    }
}