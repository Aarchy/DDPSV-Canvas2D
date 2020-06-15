import Rectangle from './scripts/Rectangle.js'
const flextree = require('d3-flextree').flextree;

var canvas = document.getElementById('testCanvas');
const tree = new Rectangle({ x: 10, y: 10}, 100, 100);
tree.addChild(new Rectangle({ x: 10, y: 10}, 50, 50));
tree.addChild(new Rectangle({ x: 30, y: 30}, 25, 50));
var ctx = document.getElementById('testCanvas').getContext('2d');

const init = () => {
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    //ctx.fillRect(25, 25, 100, 100);
    window.requestAnimationFrame(draw);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // const rootLayout = tree.getLayout();

  // const flextreeLayout = flextree({ spacing: 10 })
  // const flxtree = flextreeLayout.hierarchy(rootLayout);
  // flextreeLayout(flxtree);
  // console.log(flextreeLayout.dump(flxtree));
  

  // tree.setLayout(flxtree)
  // tree.draw(ctx);

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.strokeRect(10,10,20,20);
  ctx.setTransform(1, 0, 0, 1, 50, 50);
  ctx.strokeRect(0,0,20,20);
  window.requestAnimationFrame(draw);
}

function resize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
  window.requestAnimationFrame(draw);
}

window.onresize = function() {
  resize();
}

window.addEventListener('load', init, false)
