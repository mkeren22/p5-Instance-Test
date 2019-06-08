// sketches for p5-instance-tests website

// Sketch One
var s1 = function ( sketch ) {

  var x = 100;
  var y = 100;

  sketch.setup = function() {
    sketch.createCanvas(400, 400);
  };

  sketch.draw = function() {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(sketch.mouseX,sketch.mouseY,50,50);
    // rectangle that follows your mouse
  };
};
var myp5Sketch1 = new p5(s1, 'sketch1');


// Sketch Two
var s2 = function ( sketch ) {

  var x = 100;
  var y = 100;

  sketch.setup = function() {
    sketch.createCanvas(400, 400);
  };

  sketch.draw = function() {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(sketch.mouseY,sketch.mouseX,50,50);
    // rectangle that switches x and y movements of mouse
  };
};
var myp5Sketch2 = new p5(s2, 'sketch2');
