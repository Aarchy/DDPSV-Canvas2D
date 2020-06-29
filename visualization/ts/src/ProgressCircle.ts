import Component from './Component'
import Point from './Point';
import { EventDispatcher, IEvent } from "../node_modules/strongly-typed-events/dist/index";

export default class ProgressCircle extends Component {     
    private _onClick : EventDispatcher<ProgressCircle> = new EventDispatcher<ProgressCircle>();

    private _position: Point = {x:0, y:0};
    private _radius: number;
    private _progress: number;
    private _path: Path2D;
    private _boundingBox: {
        left: number,
        top: number,
        width: number,
        height: number 
    };

    constructor (radius: number, progress: number) {     
        super();
        
        this._radius    = radius;  
        this._progress  = progress;  

        this._boundingBox = {
            left: this.position.x - this._radius,
            top: this.position.y - this._radius,
            width: 2 * this._radius,
            height: 2 * this._radius
        };
        this._path = new Path2D;
        this._path.arc(this.position.x, this.position.y, this._radius, 0, 2 * Math.PI);
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
        return this.position.x - this._radius;;
    }
    set left(value: number) {
        this.position.x = value + this._radius;
        this.updateBoundingBox();
        this.updatePath();
    }

    get top(): number {
        return this.position.y - this._radius;
    }
    set top(value: number) {
        this.position.y = value + this._radius;
        this.updateBoundingBox();
        this.updatePath();
    }
    get radius(): number {
        return this._radius;
    }
    set radius(value: number) {
        this._radius = value;
        this.updateBoundingBox();
        this.updatePath();
    }

    get progress(): number {
        return this._progress;
    }
    set progress(value: number) {
        this._progress = value;
    }

    get boundingBox(): {
        left: number,
        top: number,
        width: number,
        height: number
    } {
        return this._boundingBox;
    }

    get onClick(): IEvent<ProgressCircle> {
        return this._onClick.asEvent();
    }
    
    updatePath (): void {
        this._path = new Path2D;
        this._path.arc(this.position.x, this.position.y, this._radius, 0, 2 * Math.PI);
    }
    
    updateBoundingBox(): void {
        this._boundingBox.left = this.position.x - this._radius;
        this._boundingBox.top = this.position.y - this._radius;
        this._boundingBox.width = 2 * this._radius;
        this._boundingBox.height = 2 * this._radius;
    }
    
    draw (context: CanvasRenderingContext2D): void {
        this._connectors.forEach(connector => connector.draw(context));
        
        context.beginPath();
        context.arc(this.position.x, this.position.y, this._radius, 0, 2 * Math.PI)
        context.stroke();

        context.beginPath();
        context.arc(this.position.x, this.position.y, this._radius - 10, 0, 2 * Math.PI) // todo: replace -10 constant 
        context.stroke();

        context.beginPath();
        let oldStroke = context.strokeStyle;
        let oldWidth = context.lineWidth;

        if (this.progress < 0.35){
            context.strokeStyle = 'red';
        } else if (this.progress < 0.7) {
            context.strokeStyle = 'orange';
        } else {
            context.strokeStyle = 'green';
        }
        context.lineWidth = 10 - oldWidth;
        context.arc(this.position.x, this.position.y, this._radius - 5, 0, this._progress * 2 * Math.PI)
        context.stroke();
        context.strokeStyle = oldStroke;
        context.lineWidth = oldWidth;

    }
    
    isInPath (context: CanvasRenderingContext2D, p: Point): boolean {
        if (context.isPointInPath(this._path, p.x, p.y)){
            //this._onClick.dispatch(this);
            return true;
        }
        return false;
    }
}