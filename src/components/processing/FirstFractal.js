import React from 'react';
import Sketch from 'react-p5';

export default function FirstFractal() {

  const deg_to_rad = Math.PI / 180.0;
  let depth = 14;
  let blue = 1;

  // function drawLine(x1, y1, x2, y2, p5){
  //   p5.moveTo(x1, y1);
  //   p5.lineTo(x2, y2);
  // }

  function drawTree(p5, x1, y1, angle, depth){
    if(depth !== 0){
      p5.stroke(105, 0, blue);
      let x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 7.0);
      let y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 7.0);
      p5.line(x1, y1, x2, y2);
      blue += 1;
      setTimeout(() => {
        drawTree(p5, x2, y2, angle - 20, depth - 1);
        //hue -= 1;
        setTimeout(() => {
          drawTree(p5, x2, y2, angle + 20, depth - 1);
        }, 100);
      }, 50);
    }
  }

  const setup = (p5, parent) => {
    p5.createCanvas(1100, 725).parent(parent);
    p5.background(0);
    p5.stroke(0);
    p5.colorMode(p5.RGB);
    // p5.frameRate(1);
  };

  const draw = p5 => {
    drawTree(p5, p5.width / 2, p5.height, -90, depth);
    p5.noLoop();
  };

  // const redrawCallback = p5 => {
  //   p5.redraw();
  // };

  return (
    <>
      <Sketch setup={setup} draw={draw}/>
    </>
  );

}
