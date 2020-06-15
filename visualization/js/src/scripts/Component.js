export default class Component {
  
  /**
    * Create a Component.
    * @param {Point} position
  */  
  constructor () {
    this.innerComponents = []
    this.boundingBox = {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }
  }
  
  draw (context) { }

  update () {}
  
  setPosition(position) { }

  addComponent (child) {
    child.parent = this;
    
    this.innerComponents = [...this.innerComponents, child]
  }

  isInPath(context, x, y, callback){}
}
