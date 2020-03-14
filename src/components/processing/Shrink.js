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
      this.rad -= 1;
    }
  }

  const setup = (p5, parent) => {
    p5.createCanvas(400, 400).parent(parent);
    p5.noStroke();
    p5.ellipseMode(p5.CENTER);
  };

  let circleList = [];

  const draw = p5 => {
    p5.background(0);
    if(circleList.length < 225) {
      circleList.push(new Circle(p5.color(randomInt(255), randomInt(255), randomInt(255)), randomInt(400), randomInt(400), 100));
      // circleList.append(circleList[-1])
      // circleList[-1].c = (255) 
    }
    circleList.forEach(circle => {
      circle.display(p5);
      if(circle.rad >= -1) {
        circle.shrink();
      } else {
        //Ew, mutations
        circleList = circleList.filter(circle => circle.rad > -1);
      }
    });     
  };

  const randomInt = (max, min = 0) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
