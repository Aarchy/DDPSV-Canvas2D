var ctx = null;
var canvas = null;
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
        window.requestAnimationFrame(drawWithoutTransforms);
    }
}

function resize() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
}

function drawWithTransforms() {

    for (let index = 0; index < N; index++) {     
        ctx.setTransform(1, 0, 0, 1, 50, 50);
  
        ctx.strokeRect(0,0,100,100);
        ctx.strokeRect(0,0,100,100);

    }
    window.requestAnimationFrame(drawWithTransforms);

}

function drawWithoutTransforms() {
    for (let index = 0; index < N; index++) {        
        ctx.strokeRect(50,50,100,100);
        ctx.strokeRect(50,50,100,100);

    }
    window.requestAnimationFrame(drawWithoutTransforms);

}

window.addEventListener('load', init, false)
