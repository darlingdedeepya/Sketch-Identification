function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    background("white");
    synth=window.speechSynthesis;
    //canvas.mouseReleased(classifyCanvas); 
}

function clearCanvas(){
    background("white");
}

function draw(){
    strokeWeight(10);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}