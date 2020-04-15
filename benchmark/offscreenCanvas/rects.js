let ctx = null;
let canvas = null;

let m_canvas = document.createElement('canvas');
m_canvas.width = 64;
m_canvas.height = 64;
let m_context = m_canvas.getContext('2d');
m_context.strokeRect(0,0,10,10);

const init = () => {
    canvas = document.getElementById('testCanvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        resize();
        //ctx.fillRect(25, 25, 100, 100);
        window.requestAnimationFrame(draw);
    }
}

function resize() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < N; i++){
        ctx.drawImage(m_canvas,50,50);
    }
    window.requestAnimationFrame(draw);
  }
  
  window.addEventListener('load', init, false)
