import React from 'react';
import Sketch from 'react-p5';

export default function Polaris() {
  //refactor these into state for controllers
  const numCircles = 100;
  const pullToTarget = 1;
  const pullToAvgPoint = 3;
  const recalculateThreshold = 10;

  const circles = [];
  const allCirclesAvgPoint = [0, 0];
  const previousAllCirclesAvgPoint = [0, 0];

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
        this.nextTarget = (randomInt(p5.width), randomInt(p5.height));
      }
    }

    display(p5) {    
      p5.ellipse(this.currentPos[0], this.currentPos[1], 10, 10);
    }

    move(p5) {
      const vectorMain = p5.PVector(this.nextTarget[0], this.nextTarget[1]);
      vectorMain.setMag(this.pullToTarget);
    
      const vectorAvgPnt = p5.PVector(this.allCirclesAvgPoint[0], this.allCirclesAvgPoint[1]);
      vectorAvgPnt.setMag(this.pullToAvgPnt);

      const resultVector = p5.PVector.add(vectorMain, vectorAvgPnt);
    
      if(this.currentPos[0] > this.nextTarget[0]){
        this.currentPos[0] -= resultVector.x;
      }
      if(this.currentPos[0] < this.nextTarget[0]){
        this.currentPos[0] += resultVector.x;
      }
      if(this.currentPos[1] > this.nextTarget[1]){
        this.currentPos[1] -= resultVector.y;
      }
      if(self.currentPos[1] < self.nextTarget[1]){
        self.currentPos[1] += resultVector.y;
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


  const setup = p5 => {
    p5.createCanvas(600, 600);
    p5.ellipseMode(p5.CENTER);
    p5.noFill();
    p5.frameRate(30);
    p5.stroke(0);
    for(let i = 0; i < numCircles; i++) {
      circles.push(new Circle(allCirclesAvgPoint, pullToTarget, pullToAvgPoint, recalculateThreshold, p5));
      circles[i].display();
    }
  };

  const draw = p5 => {
    
  };

  console.log('registered the draw loop');
  
  return (
    <Sketch setup={setup} draw={draw} />
  );
}


// #Favorite numbers: 3, 100
// numCircles = 100
// allCirclesAvgPoint = [0,0]
// #In Development under updateAvg; switch PTT and PTAP
// PTT = 1
// PTAP = 3
// thresh = 10
// circles = []
// previousAllCirclesAvgPoint = [0, 0]; = [0,0]

// def setup():
//     size(600, 600)
//     ellipseMode(CENTER)
//     noFill()
//     frameRate(30)
//     stroke(0)
//     for i in range (numCircles):
//         circles.append(circle(allCirclesAvgPoint, PTT, PTAP, thresh))
//         circles[i].display()
    
        

// def draw():
//     global allCirclesAvgPoint
//     background(255)
//     #update average point of all circles
//     previousAllCirclesAvgPoint = [0, 0]; = allCirclesAvgPoint
//     allCirclesAvgPoint = updateAvg(circles, previousAllCirclesAvgPoint = [0, 0];)
//     #update location and path to average
//     for c in circles:
//         c.update(allCirclesAvgPoint)
//         #move to final target with pull from average via arc
//         c.move()
//         #display circle after moving to new location
//         c.display()
//         c.displayLine(allCirclesAvgPoint)
//     ellipse(allCirclesAvgPoint[0], allCirclesAvgPoint[1], 20, 20)

// def updateAvg(circles, previousAllCirclesAvgPoint = [0, 0];):
//     x = 0
//     y = 0
//     for c in circles:
//         x += c.currentPos[0]
//         y += c.currentPos[1]
//     x = x/len(circles)
//     y = y/len(circles)
//     avgPnt = [x,y]
//     # If the avgerage didn't move, reset list
//     if previousAllCirclesAvgPoint = [0, 0]; == avgPnt:
//         circles = []
//         for i in range (numCircles):
//             circles.append(circle(allCirclesAvgPoint, PTT, PTAP, thresh))
//             return updateAvg(circles, 0)
//     return avgPnt
        
// class circle:
//     def __init__(self, allCirAvgPnt, pullToTarget, pullToAvgPnt, thresh):
//         self.currentPos = [random(width), random(height)]
//         self.lastTarget = self.currentPos
//         self.nextTarget = [random(width), random(height)]
//         self.allCirAvgPnt = allCirAvgPnt
//         self.pullToTarget = pullToTarget
//         self.pullToAvgPnt = pullToAvgPnt
//         self.thresh = thresh
//     def update(self, allCirclesAvgPoint):
//         self.allCirAvgPnt = allCirclesAvgPoint
//         #If circle is close enough to target, get a new target
//         if (p5.(self.currentPos[0], self.currentPos[1], self.nextTarget[0], self.nextTarget[1]) < thresh:)
//             self.lastTarget = self.nextTarget
//             self.nextTarget = (random(width), random(height))
//     def move(self):
//         vectorMain = PVector(self.nextTarget[0], self.nextTarget[1])
//         #print vectorMain
//         vectorMain.setMag(self.pullToTarget)
//         vectorAvgPnt = PVector(self.allCirAvgPnt[0], self.allCirAvgPnt[1])
//         vectorAvgPnt.setMag(self.pullToAvgPnt)
//         resultVector = PVector.add(vectorMain, vectorAvgPnt)
//         #print resultVector
//         if self.currentPos[0] > self.nextTarget[0]:
//             self.currentPos[0] -= resultVector.x
//         if self.currentPos[0] < self.nextTarget[0]:
//             self.currentPos[0] += resultVector.x
//         if self.currentPos[1] > self.nextTarget[1]:
//             self.currentPos[1] -= resultVector.y
//         if self.currentPos[1] < self.nextTarget[1]:
//             self.currentPos[1] += resultVector.y
//         #self.currentPos += [resultVector.x, resultVector.y]
//     def moveVec(self):
//         newVel = vel
//         newPos = pos
//     def display(self):
//         ellipse(self.currentPos[0], self.currentPos[1], 10, 10)
//     def displayLine(self, allCirclesAvgPoint):
//         line(self.currentPos[0], self.currentPos[1], allCirclesAvgPoint[0], allCirclesAvgPoint[1])
    
        
// #         if self.currentPos[0] > self.nextTarget[0]:
// #             self.currentPos[0] -= 
    
        
// #     #arcToTarget
// #     #arcToAvgPnt
// #     display
// #     
// # currentPos
// # pullToTarget
// # pullToAvgPnt
// # lastTarget
// # nextTarget
// # allCirAvgPnt
// # update
// # move