import Point from './Point'
import { IEvent  } from "../node_modules/strongly-typed-events/dist/index";
import Connector from './Connector';
import FixContainer from './FixContainer';

export default abstract class Component {
    protected _parent: FixContainer | null = null;
    
    protected _connectors: Array<Connector> = [];

    abstract position: Point;  
    abstract left: Number;
    abstract top: Number;

    get parent(): FixContainer | null {
        return this._parent;
    }
    set parent(newParent: FixContainer | null){
        if (this._parent){
            this._parent.removeComponent(this);
        }
        if(newParent){
            newParent!.addComponent(this);
        }
        this._parent = newParent;    
    }

    abstract boundingBox: {
        left: number,
        top: number,
        width: number,
        height: number
    };

    abstract onClick: IEvent<Component>;    

    connectTo (component: Component): void {
        this._connectors = [...this._connectors, new Connector(this, component)];
    }
        
    abstract isInPath(context: CanvasRenderingContext2D, p: Point): boolean;
    abstract draw (context: CanvasRenderingContext2D): void;
}