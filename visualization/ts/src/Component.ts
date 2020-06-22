import Point from './Point'
import { IEvent  } from "../node_modules/strongly-typed-events/dist/index";
import Connector from './Connector';

export default abstract class Component {
    protected _innerComponents: Array<Component> = [];
    protected _parent: Component | null = null;
    
    protected _connectors: Array<Connector> = [];

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

    connectTo (component: Component): void {
        this._connectors = [...this._connectors, new Connector(this, component)];
    }
    
    abstract draw (context: CanvasRenderingContext2D): void;
    
    abstract isInPath(context: CanvasRenderingContext2D, p: Point): boolean;
}
