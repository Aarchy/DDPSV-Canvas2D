import Point from './Point'
import TWEEN from '@tweenjs/tween.js'
import { EventDispatcher, IEvent } from "../node_modules/strongly-typed-events/dist/index";
import Camera from './Camera';
import BoundingBox from './BoundingBox';

export default abstract class Component {
    private static margin: {x: number, y: number} = {x: 50, y: 50}; 
    
    private parent: Component | null = null;
    private children: Array<Component> = [];
    
    abstract left: number;
    abstract top: number;
    abstract boundingBox: BoundingBox;
    
    protected   _onClick: EventDispatcher<Component>;
    abstract    onClick: IEvent<Component>;
    
    abstract drawThis (context: CanvasRenderingContext2D, drawSimple: Boolean): void;
    abstract isInPath (context: CanvasRenderingContext2D, p: Point): boolean;
        
    draw (context: CanvasRenderingContext2D, camera : Camera): void {
        if(camera.isVisible(this)) {
            context.save();
            context.translate(this.left, this.top);
            this.drawThis(context, camera.distance > 1000);
            context.restore();
        }

        this.children.forEach( child => {
            child.draw(context, camera);
        });
    }
    
    addChild (newChild: Component) : void {
        this.children.push(newChild);
        newChild.parent = this;
    }
    
    getLayout () : any {
        return ({
            x: this.boundingBox.left,
            y: this.boundingBox.top,
            size: [
                this.boundingBox.width + Component.margin.x,
                this.boundingBox.height + Component.margin.y
            ],
            children: this.children.map(c => c.getLayout())
        });
    }
    
    setLayout (layout : any) : void {
        new TWEEN.Tween(this).to({ left: layout.x, top: layout.y }, 1000).start();
        
        this.children.forEach( (child,i) => {
            child.setLayout(layout.children[i]);
        });
    }      
    
    click(context: CanvasRenderingContext2D, coords: Point){
        if (this.isInPath(context, coords)){
            this._onClick.dispatch(this);
        }
        
        this.children.forEach( child => {
            child.click(context, coords);
        });
    }
}
