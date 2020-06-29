import Point from './Point';
import { EventDispatcher, IEvent } from "../node_modules/strongly-typed-events/dist/index";
import Component from './Component';

export default class Text extends Component {     
    private _onClick : EventDispatcher<Text> = new EventDispatcher<Text>();

    private _position: Point = {x:0, y:0};
    private _path: Path2D;
    private _string: string;
    private _metrics: TextMetrics;
    private _height: number;

    private _boundingBox: {
        left: number,
        top: number,
        width: number,
        height: number 
    };

    constructor (str : string, context: CanvasRenderingContext2D) {     
        super();
        
        this._string = str;

        this._metrics = context.measureText(str);
        this._height =  (this._metrics.actualBoundingBoxAscent + this._metrics.actualBoundingBoxDescent)
        this._boundingBox = {
            left: this.position.x,
            top: this.position.y - this._height,
            width: this._metrics.width,
            height: this._height
        };
        this._path = new Path2D;
        this._path.rect(this._boundingBox.left, this._boundingBox.top, this._boundingBox.width, this._boundingBox.height);
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
        this.updateBoundingBox();
        this.updatePath();
    }

    get top(): number {
        return this.position.y - this._height;
    }
    set top(value: number) {
        this.position.y = value + this._height;
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

    get onClick(): IEvent<Text> {
        return this._onClick.asEvent();
    }
    
    updatePath (): void {
        this._path = new Path2D;
        this._path.rect(this._boundingBox.left, this._boundingBox.top, this._boundingBox.width, this._boundingBox.height);
    }
    
    updateBoundingBox(): void {
        this._boundingBox.left = this.position.x;
        this._boundingBox.top = this.position.y - this._height;
    }
    
    draw (context: CanvasRenderingContext2D): void {
        this._connectors.forEach(connector => connector.draw(context));
        
        context.fillText(this._string, this.position.x, this.position.y);
    }
    
    isInPath (context: CanvasRenderingContext2D, p: Point): boolean {
        if (context.isPointInPath(this._path, p.x, p.y)){
            //this._onClick.dispatch(this);
            return true;
        }
        return false;
    }
}