import Component from './Component'
import TWEEN from '@tweenjs/tween.js'

export default class TNode {
    private component: Component;
    private parent: TNode | null = null;
    private children: Array<TNode> = [];
    private static margin: {x: number, y: number} = {x: 100, y: 50}; 
    
    constructor (component: Component) {
        this.component = component;
    }

    traverse(callback: (component: Component) => void): void {
        callback(this.component);
        this.children.map(child => child.traverse(callback));
    }    

    addChild(child: TNode) : void {
        child.parent = this;
        
        this.children = [...this.children, child];

        this.component.connectTo(child.component);
    }
    
    getLayout () : any {
        return ({
            x: this.component.boundingBox.left,
            y: this.component.boundingBox.top,
            size: [
                this.component.boundingBox.width + TNode.margin.x,
                this.component.boundingBox.height + TNode.margin.y
            ],
            children: this.children.map(c => c.getLayout())
        });
    }
    
    setLayout (layout : any) : any {
        new TWEEN.Tween(this.component).to({ left: layout.x, top: layout.y }, 1000).start();

        //this.component.position = {x: layout.x, y: layout.y};      
          
        this.children.forEach( (child,i) => {
            child.setLayout(layout.children[i]);
        });
    }      
}