import React from 'react';
import Sketch from 'react-p5';

export default function Polaris() {
  //refactor these into state for controllers
  const numCircles = 100;
  const pullToTarget = 1;
  const pullToAvgPoint = 3;
  const recalculateThreshold = 10;

  const circles = [];
  let allCirclesAvgPoint = [0, 0];
  let previousAllCirclesAvgPoint = [0, 0];

  class Circle{
    constructor(allCirclesAvgPoint, pullToTarget, pullToAvgPoint, recalculateThreshold, p5) {
      this.currentPos = [randomInt(p5.width), randomInt(p5.height)];
      this.lastTarget = this.currentPos;
      this.nextTarget = [randomInt(p5.width), randomInt(p5.height)];
      this.allCirclesAvgPoint = allCirclesAvgPoint;
      this.pullToTarget = pullToTarget;
      this.pullToAvgPoint = pullToAvgPoint;
      this.recalculateThreshold = recalculateThreshold;
    }

    //global refers to the average point of all circles in the circle array
    updateCurrentGlobalAvgPoint(circlesAvgPointGlobally, p5) {
      this.allCirclesAvgPoint =  circlesAvgPointGlobally;
      //If circle is close enough to target, get a new target
      if(p5.dist(this.currentPos[0], this.currentPos[1], this.nextTarget[0], this.nextTarget[1]) < recalculateThreshold){
        this.lastTarget = this.nextTarget;
        this.nextTarget = [randomInt(p5.width), randomInt(p5.height)];
        console.log('next target', this.nextTarget);
      }
    }

    display(p5) {    
      p5.ellipse(this.currentPos[0], this.currentPos[1], 10, 10);
    }

    move(p5) {
      const vectorMain = p5.createVector(this.nextTarget[0], this.nextTarget[1]);
      vectorMain.setMag(this.pullToTarget);
    
      const vectorAvgPnt = p5.createVector(this.allCirclesAvgPoint[0], this.allCirclesAvgPoint[1]);

      vectorAvgPnt.setMag(this.pullToAvgPnt);

      const resultVector = vectorMain.add(vectorAvgPnt);

      if(this.currentPos[0] > this.nextTarget[0]){
        this.currentPos[0] -= resultVector.x;
      }
      if(this.currentPos[0] < this.nextTarget[0]){
        this.currentPos[0] += resultVector.x;
      }
      if(this.currentPos[1] > this.nextTarget[1]){
        this.currentPos[1] -= resultVector.y;
      }
      if(this.currentPos[1] < this.nextTarget[1]){
        this.currentPos[1] += resultVector.y;
      }
      //self.currentPos += [resultVector.x, resultVector.y]
    }

    displayLine(allCirclesAvgPoint, p5){
      p5.line(this.currentPos[0], this.currentPos[1], allCirclesAvgPoint[0], allCirclesAvgPoint[1]);
    }

    // moveVec(){
    //   const newVel = vel;
    //   const newPos = pos;
    // }
  }

  const randomInt = (max, min = 0) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const updateAvg = (circles, previousAllCirclesAvgPoint, p5) => {
    let x = 0;
    let y = 0;
    circles.forEach(circle => {
      x += circle.currentPos[0];
      y += circle.currentPos[1];
    });
    x = Math.round(x / circles.length);
    y = Math.round(y / circles.length);
    const avgPnt = [x, y];
    //If the avgerage didn't move, reset list
    if(previousAllCirclesAvgPoint === avgPnt) {
      circles = [];
      for(let i = 0; i < numCircles; i++) {
        circles.push(new Circle(allCirclesAvgPoint, pullToTarget, pullToAvgPoint, recalculateThreshold, p5));
        return updateAvg(circles, 0);
      }
    }
    return avgPnt;
  };


  const setup = p5 => {
    p5.createCanvas(600, 600);
    p5.ellipseMode(p5.CENTER);
    p5.noFill();
    p5.frameRate(30);
    p5.stroke(0);
    for(let i = 0; i < numCircles; i++) {
      circles.push(new Circle(allCirclesAvgPoint, pullToTarget, pullToAvgPoint, recalculateThreshold, p5));
      circles[i].display(p5);
    }
  };

  const draw = p5 => {
    p5.background(255);
    //update average point of all circles
    previousAllCirclesAvgPoint = allCirclesAvgPoint;
    allCirclesAvgPoint = updateAvg(circles, previousAllCirclesAvgPoint, p5);
    circles.forEach(item => {
      //update location and path to average
      item.updateCurrentGlobalAvgPoint(allCirclesAvgPoint, p5);
      //move to final target, taking into consideration pull
      item.move(p5);
      //display circle after moving to new location
      item.display(p5);
      item.displayLine(allCirclesAvgPoint, p5);
    });
    //draw circle around the average point of all circles
    p5.ellipse(allCirclesAvgPoint[0], allCirclesAvgPoint[1], 20, 20);
    // if(p5.frameCount > 1) {
    //   p5.noLoop();
    // }
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
