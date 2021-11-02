let canvasHeight = innerHeight -30;
let canvasWidth = innerWidth -30;
let sewerslvt;
let amp;
let myLevels = [];
let started = false;
let loaded = false;
let particles = [];

function setLoaded (){
    loaded = true;
}

function preload() {
    console.log (loaded);
    sewerslvt = loadSound('sewerslvt.mp3', setLoaded);
}

// setup
function setup() {
//  background(1);
 createCanvas(canvasWidth, canvasHeight);
//  background(0,0,0, 250);
 angleMode(DEGREES);
 background (10);
//  stroke(0);
 amp = new p5.Amplitude();


}

function drawStartScreen (){
    // fill(0, 0, 0);
    textSize(30);
    text('click screen to start sound', 10 ,100);
}

// draw
function draw() {
    background(5, 5, 5, 5)
    if(!started){
        drawStartScreen();
    } else {
        if(loaded){
            //drawAmplitude();
            let vol = amp.getLevel();
        // let diam = map(vol, 0, 1, 10, 1000);
            let r = map(vol, 0, 1, 10, canvasHeight);
            particles.push(new Particle(r))
            translate(canvasWidth / 2, canvasHeight/2);
            particles.forEach((particle, i) => {
                particle.render(i)
                particle.makeDisappear()

            })

        }
    }
}


function mousePressed (){
    started = true;
    loaded = true;
    sewerslvt.play();
}