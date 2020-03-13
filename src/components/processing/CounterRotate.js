import React from 'react';
import Sketch from 'react-p5';

export default function CounterRotate() {

  const setup = p5 => {
    p5.createCanvas(800, 800);
  };

  const draw = p5 => {
    p5.noLoop();
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
