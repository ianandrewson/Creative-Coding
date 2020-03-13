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
    p5.noLoop();
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
