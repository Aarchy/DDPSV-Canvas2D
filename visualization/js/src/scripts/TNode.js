import './Component'

export default class TNode {
    /**
    * 
    * @param {Component}    component 
    * @param {TNode}        parent
    * @param {[TNode]}      children
    */
    constructor (component) {
        this.component = component;
        this.parent = null;
        this.children = [];
    }
    
    
    /**
    * 
    * @param {function(Component)} callback 
    */
    traverse(callback) {
        callback(this.component);
        this.children.map(child => child.traverse(callback));
    }
    
    /**
    * 
    * @param {TNode} child 
    */
    addChild(child){
        child.parent = this;
        
        this.children = [...this.children, child];
    }
    
    getLayout () {
        return ({
            x: this.component.boundingBox.left,
            y: this.component.boundingBox.top,
            size: [
                this.component.boundingBox.width + 150,
                this.component.boundingBox.height + 10
            ],
            children: this.children.map(c => c.getLayout())
        });
    }
    
    setLayout (layout) {
        this.component.setPosition(layout.x, layout.y);      
          
        this.children.forEach( (child,i) => {
            child.setLayout(layout.children[i]);
        });
    }      
}