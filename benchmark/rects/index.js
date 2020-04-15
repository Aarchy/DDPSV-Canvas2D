let ctx = null;
let canvas = null;
let N = 10000;
let M = 0;

const init = () => {
    let params = (new URL(document.location)).searchParams;
    if (params.has('n')) {
        N = parseInt(params.get('n'));
        if(N == NaN) {
            N = 10000;
        }
    }

    if (params.has('m')) {
        M = parseInt(params.get('m'));
        if(M == NaN || M < 0 || M > 3) {
            M = 0;
        }
    }

    canvas = document.getElementById('testCanvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        resize();

        if (M == 0){
            window.requestAnimationFrame(draw);
        } else if (M == 1) {
            window.requestAnimationFrame(drawPath);
        } else if (M == 2) {
            window.requestAnimationFrame(drawLineTo);
        } else if (M == 3) {
            window.requestAnimationFrame(drawLineToPath);
        }
    }
}

function resize() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < N; i++){
        ctx.strokeRect(50,50,100,100);
    }
    window.requestAnimationFrame(draw);
}    

let  rectPath = new Path2D;
rectPath.rect(50,50,100,100);
function drawPath() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < N; i++){
        ctx.stroke(rectPath);
    }
    window.requestAnimationFrame(drawPath);
}

function drawLineTo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < N; i++){
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(50, 150);
        ctx.lineTo(150, 150);
        ctx.lineTo(150, 50);
        ctx.lineTo(50, 50);
        ctx.stroke();
    }
    window.requestAnimationFrame(drawLineTo);
}


let  lineToPath = new Path2D;
lineToPath.moveTo(50, 50);
lineToPath.lineTo(50, 150);
lineToPath.lineTo(150, 150);
lineToPath.lineTo(150, 50);
lineToPath.lineTo(50, 50);
function drawLineToPath() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < N; i++){
        ctx.stroke(lineToPath);
    }
    window.requestAnimationFrame(drawLineToPath);
}


window.addEventListener('load', init, false)
