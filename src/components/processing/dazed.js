import React from 'react';
import Sketch from 'react-p5';

export default function Dazed() {
  const maxSprites = 250;

  class Sprite {
    constructor(color, xpos, ypos, xspeed) {
      this.color = color;
      this.xpos = xpos;
      this.ypos = ypos;
      this.xspeed = xspeed;
    }

    display(p5) {
      p5.fill(this.color);
      p5.ellipseMode(p5.RADIUS);
      p5.ellipse(this.xpos, this.ypos, 30, 30);
    }
        
    move(p5) {
      this.xpos = this.xpos + this.xspeed;
      if(this.xpos > p5.width) {
        this.ypos = this.ypos + 61;
        if(this.ypos > p5.height) {
          this.ypos = Math.abs(this.ypos - p5.height);
        }
        this.xpos = 0;
      }
    }
  }
  
  const setup = (p5, parent) => {
    p5.createCanvas(500, 500).parent(parent);
    p5.noStroke();
    p5.background(255);
  };
  
  let n = 0;
  const spriteList = [];

  const draw = p5 => {
    if(n < maxSprites) {
      spriteList.push(new Sprite(p5.color(randomInt(255), randomInt(255), randomInt(255), 50), randomInt(p5.width), randomInt(p5.height), randomInt(7, 17)));
      n += 1;
    }
    spriteList.forEach(sprite => {
      sprite.display(p5);
      sprite.move(p5);
    });
  };

  const randomInt = (max, min = 0) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
