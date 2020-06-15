import Point from './Point'
import { IEvent  } from "../node_modules/strongly-typed-events/dist/index";

export default abstract class Component {
    private _innerComponents: Array<Component> = [];
    private _parent: Component | null = null;
    
    abstract position: Point;
    abstract x: number;
    abstract y: number;
    abstract boundingBox: {
        left: number,
        top: number,
        width: number,
        height: number
    };

    abstract onClick: IEvent<Component>;
    
    addComponent (child: Component): void {
        child._parent = this;
        
        this._innerComponents = [...this._innerComponents, child];
    }
    
    abstract draw (context: CanvasRenderingContext2D): void;
    
    abstract isInPath(context: CanvasRenderingContext2D, p: Point): boolean;
}
