import React from 'react';
import Sketch from 'react-p5';

export default function CounterRotate() {
  const radius1 = 37.5;
  const radius2 = 50;

  const setup = (p5, parent) => {
    p5.createCanvas(600, 600).parent(parent);
    p5.background(255, 165, 0);
    p5.ellipseMode(p5.CORNER);
    p5.frameRate(30);
    p5.noStroke();
  };

  const draw = p5 => {
    p5.background(255, 100, 0);
    p5.fill(0);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.push();
    p5.rotate(-p5.radians(p5.frameCount / 180.0) * 25);
    for(let i = -p5.width * .75; i < p5.width * .75; i += radius1) {
      for(let j = -p5.height * .75; j < p5.height * .75; j += radius1){
        p5.ellipse(i, j, radius1, radius1);
      }
    }
    p5.pop();
    p5.push();
    p5.rotate(p5.radians(p5.frameCount / 180.0) * 100);
    p5.fill(0, 0, 255);
    for(let i = -p5.width * .75; i < p5.width * .75; i += radius2) {
      for(let j = -p5.height * .75; j < p5.height * .75; j += radius2){
        p5.ellipse(i, j, radius2, radius2);
      }
    }
    p5.pop();
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
