import Component from "./Component";
import Point from "./Point";
import { EventDispatcher, IEvent } from "../node_modules/strongly-typed-events/dist/index";

class FixElement {
    public component : Component;
    public x : number;
    public y : number;
    constructor(component : Component, x: number, y: number){
        this.component = component;
        this.x = x;
        this.y = y;
    }
}

export default class FixContainer extends Component {
    protected _elements: Array<FixElement> = [];
    private _position: Point = {x:0, y:0};
    private _width: number;
    private _height: number;
    private _path: Path2D;
    private _boundingBox: {
        left: number,
        top: number,
        width: number,
        height: number 
    };
    private _onClick : EventDispatcher<FixContainer> = new EventDispatcher<FixContainer>();

    constructor (width: number, height: number) {     
        super();
        
        this._width      = width;  
        this._height     = height; 
        this._boundingBox = {
            left: this.position.x,
            top: this.position.y,
            width: this._width,
            height: this._height
        };
        this._path = new Path2D;
        this._path.rect(this.position.x, this.position.y, this.width, this.height);
    }   

    get position(): Point {
        return this._position;
    }
    set position(value: Point) {
        this._position = value;
        this.updateBoundingBox();
        this.updatePath();
    }

    get left(): number {
        return this.position.x;
    }
    set left(value: number) {
        this.position.x = value;
        this._elements.forEach((element) => element.component.left = value + element.x);
        this.updateBoundingBox();
        this.updatePath();
    }

    get top(): number {
        return this.position.y;
    }
    set top(value: number) {
        this.position.y = value;
        this._elements.forEach((element) => element.component.top = value + element.y);
        this.updateBoundingBox();
        this.updatePath();
    }
    
    get height(): number {
        return this._height;
    }
    set height(value: number) {
        this._height = value;
        this.updateBoundingBox();
        this.updatePath();
    }

    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
        this.updateBoundingBox();
        this.updatePath();
    }

    get boundingBox(): {
        left: number,
        top: number,
        width: number,
        height: number
    } {
        return this._boundingBox;
    }
    
    get onClick(): IEvent<FixContainer> {
        return this._onClick.asEvent();
    }

    updatePath (): void {
        this._path = new Path2D;
        this._path.rect(this.position.x, this.position.y, this.width, this.height);
    }
    
    updateBoundingBox(): void {
        this._boundingBox.left = this.position.x;
        this._boundingBox.top = this.position.y;
        this._boundingBox.width = this.width;
        this._boundingBox.height = this.height;
    }

    isInPath (context: CanvasRenderingContext2D, p: Point): boolean {
        if (context.isPointInPath(this._path, p.x, p.y)){
            return true;
        }
        return false;
    }

    addComponent (child: Component, x: number, y: number): void {
        let newElement = new FixElement(child, x, y);
        newElement.component.top = this.top + newElement.y;
        newElement.component.left = this.left + newElement.x;
        this._elements = [...this._elements, newElement];
    }

    removeComponent (child: Component): void {
        const index = this._elements.findIndex((element) => element.component == child);
        if (index > -1) {
            this._elements.splice(index, 1);
        }
    }

    draw (context: CanvasRenderingContext2D): void {
        this._connectors.forEach(connector => connector.draw(context));        
        this._elements.forEach(element => element.component.draw(context));
    }

    manageClick (context: CanvasRenderingContext2D, p: Point): void {
        if (context.isPointInPath(this._path, p.x, p.y)){
            this._onClick.dispatch(this);
            this._elements.forEach(element => element.component.manageClick(context, p));
        }
    }
}
