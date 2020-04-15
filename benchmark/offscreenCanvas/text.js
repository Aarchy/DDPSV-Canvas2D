let ctx = null;
let canvas = null;


let m_canvas = document.createElement('canvas');
m_canvas.width = 250;
m_canvas.height = 100;
let m_context = m_canvas.getContext('2d');
m_context.font = '25px sans-serif';
m_context.fillText('123456789 123456789', 0, 20);
let N = 10000;

const init = () => {
    let params = (new URL(document.location)).searchParams;
    if (params.has('n')) {
        N = parseInt(params.get('n'));
        if(N == NaN) {
            N = 10000;
        }
    }

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
        ctx.drawImage(m_canvas,0,0);
    }
    window.requestAnimationFrame(draw);
  }
  
  window.addEventListener('load', init, false)
