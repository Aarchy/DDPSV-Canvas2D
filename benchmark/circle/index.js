let ctx = null;
let canvas = null;
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
        ctx.beginPath();
        ctx.arc(150, 150, 105, 0, Math.PI * 2, false);
        ctx.stroke();
    }
    window.requestAnimationFrame(draw);
  }
  
  window.addEventListener('load', init, false)
