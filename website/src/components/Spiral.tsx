import { ReactP5Wrapper } from "react-p5-wrapper";
import type p5 from "p5";

const Sketch = (p: p5) => {
  let totalPoints = 550;      
  let angleIncrement = 3;    
  let radiusIncrement = 0.3;
  let canvasSize = totalPoints * radiusIncrement + 200; 

  p.setup = () => {
    const cnv = p.createCanvas(canvasSize, canvasSize);
    cnv.addClass("canvas-class");
    p.angleMode(p.DEGREES);
    p.stroke(255);
    p.noFill();
  };

  p.draw = () => {
    p.background("#1D201F");

    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.rotate(p.frameCount * 0.4);
    p.scale(0.9);

    drawSpiral();
    p.pop();
  };

  function drawSpiral() {
    let angle = 0;
    let radius = 0;

    p.beginShape();
    for (let i = 0; i < totalPoints; i++) {
      const offset = 0.05 * radius * p.sin(p.frameCount * 0.05 + i * 0.1);
 
      const x = radius * p.cos(angle);
      const y = radius * p.sin(angle);

      p.vertex(x + offset, y + offset);

      angle += angleIncrement;
      radius += radiusIncrement;
    }
    p.endShape();
  }
};

const Spiral = () => {
  return (
    <div
      id="spiral-animation"
      className="flex justify-center items-center"
    >
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  );
};

export default Spiral;







// import { ReactP5Wrapper } from "react-p5-wrapper";
// import type p5 from "p5";

// const Sketch = (p: p5) => {
//   let bloomProgress = 0;
//   let maxBloom = 100;
//   let petals = 8;
//   let autoAnimate = true;

//   p.setup = () => {
//     const cnv = p.createCanvas(400, 400);
//     cnv.addClass("canvas-class");
//     p.angleMode(p.DEGREES);
//     p.colorMode(p.HSB, 360, 100, 100, 1);
//   };

//   p.draw = () => {
//     p.background("#1D201F");
    
//     p.translate(p.width / 2, p.height / 2);
    
//     if (autoAnimate) {
//       bloomProgress = p.min(bloomProgress + 0.5, maxBloom);
      
//       if (bloomProgress >= maxBloom) {
//         setTimeout(() => {
//           bloomProgress = 0;
//         }, 2000);
//       }
//     }
    
//     drawFlower(bloomProgress);
//   };
  
//   p.mousePressed = () => {
//     bloomProgress = 0;
//   };

//   function drawFlower(progress: number) {
//     p.stroke(120, 80, 60);
//     p.strokeWeight(2);
//     p.line(0, 0, 0, 100);
    
//     const bloomFactor = progress / maxBloom;
//     const petalSize = 30 * bloomFactor;
//     const hue = p.map(bloomFactor, 0, 1, 300, 330);
    
//     p.noStroke();
//     p.fill(hue, 80, 90, 0.9);
    
//     for (let i = 0; i < petals; i++) {
//       p.push();
//       p.rotate(i * 360 / petals);
//       p.translate(0, -20 * bloomFactor);
//       p.ellipse(0, 0, petalSize, petalSize * 1.5);
//       p.pop();
//     }
    
//     p.fill(50, 80, 90);
//     p.ellipse(0, 0, 15 * bloomFactor);
//   }
// };

// const FlowerAnimation = () => {
//   return (
//     <div
//       id="flower-animation"
//       className="flex justify-center items-center"
//     >
//       <ReactP5Wrapper sketch={Sketch} />
//     </div>
//   );
// };

// export default FlowerAnimation;
