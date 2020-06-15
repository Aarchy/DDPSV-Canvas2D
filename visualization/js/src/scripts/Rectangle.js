import Component from './Component.js'

export default class Rectangle extends Component {
  /**
   * Create a rectangle.
   *
   * @param {Point} position
   *
   * @param {Number} width
   * @param {Number} height
   */
  constructor (position, width, height) {
    super();

    this.position = position;
    this.width = width;
    this.height = height;
    this.updateBoundingBox();
    this.updatePath();
  }


  updatePath () {
    this.path = new Path2D;
    this.path.rect(this.position.x, this.position.y, this.width, this.height);
  }

  updateBoundingBox() {
    this.boundingBox.left = this.position.x;
    this.boundingBox.top = this.position.y;
    this.boundingBox.width = this.width;
    this.boundingBox.height = this.height;
  }

  setPosition(x, y){
    this.position.x = x;
    this.position.y = y;

    this.updateBoundingBox();
    this.updatePath();
  }

  setWidth(width){
    this.width = width;
    this.updateBoundingBox();
    this.updatePath();
  }

  setHeight(height) {
    this.height = height;
    this.updateBoundingBox();
    this.updatePath();
  }

  draw (context) {
    context.strokeRect(this.position.x + 0.5, this.position.y + 0.5, this.width, this.height);
  }

  /**
   * 
   * @param {CanvasRenderingContext2D} context 
   * @param {Number} x 
   * @param {Number} y 
   * @param {function} callback 
   */
  isInPath(context, x, y, callback){
    callback = callback || (() => {});
    if (context.isPointInPath(this.path, x, y)){
      console.log(this);
      callback (this);
      return true;
    }
    return false;
  }
  
}