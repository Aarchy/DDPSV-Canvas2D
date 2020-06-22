import Component from './Component'
import Point from './Point';
import { EventDispatcher, IEvent } from "../node_modules/strongly-typed-events/dist/index";

export default class Rectangle extends Component {     
    private _onClick : EventDispatcher<Rectangle> = new EventDispatcher<Rectangle>();

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

    constructor (width: number, height: number) {     
        super();
        
        this._width      = width;  
        this._height     = height; 
        this._boundingBox = {
            left: this.position.x,
            top: this.position.y,
            width: this.width,
            height: this.height
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

    get x(): number {
        return this._position.x;
    }
    set x(value: number) {
        this._position.x = value;
        this.updateBoundingBox();
        this.updatePath();
    }

    get y(): number {
        return this._position.y;
    }
    set y(value: number) {
        this._position.y = value;
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

    get onClick(): IEvent<Rectangle> {
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
    
    draw (context: CanvasRenderingContext2D): void {
        this._connectors.forEach(connector => connector.draw(context));
        
        context.strokeRect(this.position.x + 0.5, this.position.y + 0.5, this.width, this.height);
    }
    
    isInPath (context: CanvasRenderingContext2D, p: Point): boolean {
        if (context.isPointInPath(this._path, p.x, p.y)){
            this._onClick.dispatch(this);
            return true;
        }
        return false;
    }
}