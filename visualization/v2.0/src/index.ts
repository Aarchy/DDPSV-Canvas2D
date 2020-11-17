import DrawingManager from './DrawingManager';

const drawingManager = new DrawingManager();
document.getElementById('placeholder')!.replaceWith(drawingManager.canvas);
drawingManager.start();