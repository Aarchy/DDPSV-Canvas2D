import DrawingManager from './scripts/DrawingManager';

const drawingManager = new DrawingManager();
document.getElementById('placeholder').replaceWith(drawingManager.canvas);
drawingManager.start();
window.drawingManager = drawingManager;
