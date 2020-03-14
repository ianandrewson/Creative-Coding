import React from 'react';
import Sketch from 'react-p5';

export default function Boxer() {

  class ColorPicker {
    constructor() {
      this.rMin = 0;
      this.rMax = 0;
      this.gMin = 0;
      this.gMax = 0;
      this.bMin = 0;
      this.bMax = 0;
      this. palette = this.newPalette();
    }

    newPalette() {
      const dominantChannel = randomInt(1, 4);
      switch(dominantChannel) {
        case 1:
          this.rMin = randomInt(1, 101);
          this.rMax = this.rMin + randomInt(50, 156);
          this.gMin = randomInt(201);
          this.gMax = this.gMin + randomInt(20, 56);
          this.bMin = randomInt(201);
          this.bMax = this.bMin + randomInt(20, 56);
          break;
        case 2:
          this.rMin = randomInt(201);
          this.rMax = this.rMin + randomInt(20, 56);
          this.gMin = randomInt(1, 101);
          this.gMax = this.gMin + randomInt(50, 156);
          this.bMin = randomInt(201);
          this.bMax = this.bMin + randomInt(20, 56);
          break;
        case 3:
          this.rMin = randomInt(201);
          this.rMax = this.rMin + randomInt(20, 56);
          this.gMin = randomInt(201);
          this.gMax = this.gMin + randomInt(20, 56);
          this.bMin = randomInt(1, 101);
          this.bMax = this.bMin + randomInt(50, 156);
          break;
      }
    }

    getColorFromPalette() {
      return ([randomInt(this.rMin, this.rMax), randomInt(this.gMin, this.gMax), randomInt(this.bMin, this.bMax), randomInt(40, 100)]);
    }
  }

  const randomInt = (max, min = 0) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const palette = new ColorPicker;

  const setup = (p5, parent) => {
    p5.createCanvas(600, 600).parent(parent);
    p5.strokeWeight(2);
  };

  const draw = p5 => {
    const boxColor = palette.getColorFromPalette();
    p5.fill(...boxColor);
    p5.rect(randomInt(p5.width, -50), randomInt(p5.height, -50), randomInt(p5.width), randomInt(p5.height));
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
