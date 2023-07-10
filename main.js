noseX = '';
noseY = '';

function preload() {
	world_start = loadSound("world_start.wav");
	coin_sound = loadSound("coin.wav");
	gameover_sound = loadSound("gameover.wav");
	jump_sound = loadSound("jump.wav");
	kick_sound = loadSound("kick.wav");
	dead_sound = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");

	initializeInSetup(mario);

	video = createCapture(VIDEO);
	video.parent(webcam);
	video.size(485, 250);
	video.position(425, 1390);

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log("model Loaded");
}

function gotPoses(result) {
	if (result.length > 0) {
		noseX = (result[0].pose.nose.x).toFixed(2);
		noseY = (result[0].pose.nose.y).toFixed(2);
	}

}

function draw() {
	game();
}






