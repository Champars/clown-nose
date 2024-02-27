NoseX = 0;
NoseY = 0;

function preload() {
    clownnose = loadImage("clownnose.png");
}

function setup() {
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 400);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded() {
    console.log("Posenet Is Loaded");
}

function draw() {
    image(video, 0, 0, 450, 400);

    image(clownnose, NoseX, NoseY, 60, 60);
}

function apply_filter() {
    save('Clown Nose.png');
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
        NoseX = results[0].pose.nose.x - 20;
        NoseY = results[0].pose.nose.y - 15;
    }
}