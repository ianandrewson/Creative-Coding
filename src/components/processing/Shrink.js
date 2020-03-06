import React from 'react';
import Sketch from 'react-p5';

export default function Shrink() {
  
  class Circle {
    constructor(color, xpos, ypos, rad) {
      this.color = color;
      this.xpos = xpos;
      this.ypos = ypos;
      this.rad = rad;
    }
        
    display(p5) {
      p5.fill(this.color);
      p5.ellipse(this.xpos, this.ypos, this.rad, this.rad);
    }
        
    shrink() {
      self.rad -= 1;
    }
  }

  const setup = p5 => {

  };

  const draw = p5 => {

  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
