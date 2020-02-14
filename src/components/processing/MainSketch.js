import React from 'react';
import Sketch from 'react-p5';

export default function MainSketch() {

  // const x = 70;
  // const y = 70;

  const setup = (p5) => {
    // let cnv = p5.createCanvas(500, 500);
    p5.createCanvas(500, 500);
    p5.fill(255);
    p5.stroke(0);
    p5.background(255);
  };

  const draw = p5 => {
    p5.ellipse(p5.mouseX, p5.mouseY, 70, 70);
    //p5.noLoop();
    // p5.mouseClick(clearCanvas);
    
  };

  function clearCanvas(p5) {
    p5.background(255);
  }

  return (
    <Sketch setup={setup} draw={draw} mousePressed={clearCanvas}/>
  );
}
