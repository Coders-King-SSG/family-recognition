function preload() {
    //empty
}

function setup() {
    var canvas = createCanvas(600, 400);
    canvas.parent("cam_div");
    video = createCapture(VIDEO);
    video.size(400, 600);
    video.hide();
}

function saveimg() {
    var vl = prompt('What file name do you want to save in?');
    if (vl != null) {
        save(vl + '.png');
    }
}

function draw() {
    image(video, 0, 0, 640, 400);
}

function gotPoses(results) {
    console.log(results);
}

function modelLoaded() {
    console.log('PoseNet Loaded!')
}
