

function setup() {
    createCanvas(1000, 1000);
    background(100);
    var x = random(0, 1000);
    var y = random(0, 1000);
    strokeWeight(7); 
    quad(70, y, 10, y, x, 50, x, y);
    frameRate(20);
}


function draw(){
    
   if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
        print(pmouseX + ' -> ' + mouseX)

    }
    

}