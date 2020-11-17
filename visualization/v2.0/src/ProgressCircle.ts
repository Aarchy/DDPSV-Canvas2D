import Component from './Component'
import Point from './Point';
import { EventDispatcher, IEvent } from "../node_modules/strongly-typed-events/dist/index";
import BoundingBox from './BoundingBox';

export default class ProgressCircle extends Component {
    private _position: Point = {x:0, y:0};
    private _radius: number;
    private _progress: number;
    private _path: Path2D;
    private _boundingBox: BoundingBox;

    private _firstText : string = "";
    private _secondText : string = "";
    private _thirdText : string = "";


    constructor (radius: number, progress: number, firstText : string, secondText : string, thirdText : string) {     
        super();
        this._onClick = new EventDispatcher<ProgressCircle>();
        this._radius    = radius;  
        this._progress  = progress;  

        this._boundingBox = {
            left: this._position.x - this._radius,
            top: this._position.y - this._radius,
            width: 2 * this._radius,
            height: 2 * this._radius
        };
        this._path = new Path2D;
        this._path.arc(this._position.x, this._position.y, this._radius, 0, 2 * Math.PI);

        this._firstText = firstText;
        this._secondText = secondText;
        this._thirdText = thirdText;
    }   


    get left() : number {
        return this._boundingBox.left;
    }
    set left(value: number) {
        this._position.x = value + this._radius;
        this.updateBoundingBox();
        this.updatePath();
    }

    get top() : number {
        return this._boundingBox.top;
    }
    set top(value: number) {
        this._position.y = value + this._radius;
        this.updateBoundingBox();
        this.updatePath();
    }

    get progress(): number {
        return this._progress;
    }
    set progress(value: number) {
        this._progress = value;
    }

    get boundingBox(): BoundingBox {
        return this._boundingBox;
    }
   

    get onClick(): IEvent<ProgressCircle> {
        return this._onClick.asEvent();
    }

    updatePath (): void {
        this._path = new Path2D;
        this._path.arc(this._position.x, this._position.y, this._radius, 0, 2 * Math.PI);
    }
    
    updateBoundingBox(): void {
        this._boundingBox.left = this._position.x - this._radius;
        this._boundingBox.top = this._position.y - this._radius;
        this._boundingBox.width = 2 * this._radius;
        this._boundingBox.height = 2 * this._radius;
    }
    
    drawThis (context: CanvasRenderingContext2D, drawSimple: Boolean = false): void {
        context.beginPath();
        //context.arc(this._position.x, this._position.y, this._radius, 0, 2 * Math.PI)
        context.arc(this._radius, this._radius, this._radius, 0, 2 * Math.PI)
        context.stroke();

        context.beginPath();
        //context.arc(this._position.x, this._position.y, this._radius - 10, 0, 2 * Math.PI) // todo: replace -10 constant 
        context.arc(this._radius, this._radius, this._radius - 10, 0, 2 * Math.PI) // todo: replace -10 constant 
        context.stroke();

        context.beginPath();
        let oldStroke = context.strokeStyle;
        let oldWidth = context.lineWidth;
        let oldTextStyle = context.font; 

        if (this.progress < 0.35){
            context.strokeStyle = 'red';
        } else if (this.progress < 0.7) {
            context.strokeStyle = 'orange';
        } else {
            context.strokeStyle = 'green';
        }
        context.lineWidth = 10 - oldWidth;
        context.arc(this._radius, this._radius, this._radius - 5, 0, this._progress * 2 * Math.PI)
        context.stroke();

        context.font = '10px sans-serif';
        let _firstTextMetrics = context.measureText(this._firstText);
        let _secondTextMetrics = context.measureText(this._secondText);
        let _thirdTextMetrics = context.measureText(this._thirdText);
        if (drawSimple) {
            let savedFillStyle = context.fillStyle;
            context.fillStyle = 'lightblue';

            context.fillRect(
                this._radius - (_firstTextMetrics.width / 2.0), 
                this._radius - 18 - _firstTextMetrics.actualBoundingBoxAscent,
                _firstTextMetrics.width,
                _firstTextMetrics.actualBoundingBoxAscent + _firstTextMetrics.actualBoundingBoxDescent
            );

            context.fillRect(
                this._radius - (_secondTextMetrics.width / 2.0), 
                this._radius - _secondTextMetrics.actualBoundingBoxAscent,
                _secondTextMetrics.width,
                _secondTextMetrics.actualBoundingBoxAscent + _secondTextMetrics.actualBoundingBoxDescent
            );

            context.fillRect(
                this._radius - (_thirdTextMetrics.width / 2.0), 
                this._radius + 18 - _thirdTextMetrics.actualBoundingBoxAscent,
                _thirdTextMetrics.width,
                _thirdTextMetrics.actualBoundingBoxAscent + _thirdTextMetrics.actualBoundingBoxDescent
            );

            context.fillStyle = savedFillStyle;
        } else {
            context.fillText(
                this._firstText, 
                this._radius - (_firstTextMetrics.width / 2.0), 
                this._radius - 18
            );

            context.fillText(
                this._secondText, 
                this._radius - (_secondTextMetrics.width / 2.0), 
                this._radius
            );

            context.fillText(this._thirdText, 
                this._radius - (_thirdTextMetrics.width / 2.0), 
                this._radius + 18
            );
        }

        context.strokeStyle = oldStroke;
        context.lineWidth = oldWidth;
        context.font = oldTextStyle;
    }

    isInPath (context: CanvasRenderingContext2D, p: Point): boolean {
        if (context.isPointInPath(this._path, p.x, p.y)){
            return true;
        }
        return false;
    }
}