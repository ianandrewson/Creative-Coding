import React from 'react';
import Sketch from 'react-p5';

export default function CounterRotate() {
  const radius1 = 50;
  const radius2 = 50;

  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  }

  const setup = p5 => {
    p5.createCanvas(600, 600);
    p5.background(255, 165, 0);
    p5.ellipseMode(p5.CORNER);
    p5.frameRate(30);
    p5.noStroke();
  };

  const draw = p5 => {
    p5.background(255, 100, 0);
    const circleList = [];
    p5.fill(0);
    p5.noLoop();
    p5.translate(p5.width / 2, p5.height / 2);
    p5.push();
    p5.rotate(-p5.radians(p5.frameCount / 180.0) * 25);
    for(let i = -p5.width * .75; i < p5.width * .75; i += radius1) {
      for(let j = -p5.height * .75; j < p5.height * .75; j += radius1){
        p5.ellipse(i, j, radius1, radius1);
      }
    }
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
