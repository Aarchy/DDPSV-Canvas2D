import Component from './Component'
import Point from './Point';
import { EventDispatcher, IEvent } from "../node_modules/strongly-typed-events/dist/index";

export default class RoundedRect extends Component {
    private _offScreenCanvas: OffscreenCanvas = new OffscreenCanvas(220, 90);
    private _offScreenContext: OffscreenCanvasRenderingContext2D;

    get offScreenCanvas() : OffscreenCanvas {
        return this._offScreenCanvas;
    }
    get offScreenContext() : OffscreenCanvasRenderingContext2D {
        return this._offScreenContext;
    }

    private _position: Point = {x:0, y:0};
    private _stages: Array<string>; 
    private _path: Path2D;
    private _boundingBox: {
        left: number,
        top: number,
        width: number,
        height: number 
    };

    private _visibleWidth: number = 1.0;

    constructor (width: number, height: number, stages: Array<string>) {     
        super();
        this._onClick = new EventDispatcher<RoundedRect>();
        this._stages    = stages;  

        this._boundingBox = {
            left: this._position.x,
            top: this._position.y,
            width: width,
            height: height
        };

        let radius : number = this.boundingBox.height / 2;
        this._path = new Path2D;
        this._path.arc(this._position.x + radius, this._position.y + radius, radius, Math.PI / 2,  3 * Math.PI / 2);
        this._path.arc(this._position.x + this.boundingBox.width - radius, this._position.y + radius, radius,  3 * Math.PI / 2,  Math.PI / 2);
        this._path.lineTo(this._position.x + radius, this._position.y + this.boundingBox.height);

        this._offScreenContext = this._offScreenCanvas.getContext("2d")!;
    }   


    get visibleWidth() : number {
        return this._visibleWidth;
    }
    set visibleWidth(value: number) {
        this._visibleWidth = value;
    }

    get left() : number {
        return this._boundingBox.left;
    }
    set left(value: number) {
        this._position.x = value;
        this.updateBoundingBox();
        this.updatePath();
    }

    get top() : number {
        return this._boundingBox.top;
    }
    set top(value: number) {
        this._position.y = value;
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
   

    get onClick(): IEvent<RoundedRect> {
        return this._onClick.asEvent();
    }

    updatePath (): void {
        let radius : number = this.boundingBox.height / 2;
        this._path = new Path2D;
        this._path.arc(this._position.x + radius, this._position.y + radius, radius, Math.PI / 2,  3 * Math.PI / 2);
        this._path.arc(this._position.x + this.boundingBox.width - radius, this._position.y + radius, radius,  3 * Math.PI / 2,  Math.PI / 2);
        this._path.lineTo(this._position.x + radius, this._position.y + this.boundingBox.height);
    }
    
    updateBoundingBox(): void {
        this._boundingBox.left = this._position.x;
        this._boundingBox.top = this._position.y;
    }
    
    drawThis (context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void {
        let oldTextStyle = context.font; 
        let oldfillStyle = context.fillStyle;

        let radius : number = this.boundingBox.height / 2;

        context.font = '10px serif';
        let unitWidth : number = this.boundingBox.width / 13;
        let topPos : number = this.boundingBox.height / 3;
        this._stages.forEach((stage,i) => {
            let left = 0 + ((1 + i * 4) * unitWidth);
            context.strokeRect(left, 0 + topPos, 3 * unitWidth, topPos);
            context.fillText(stage, 
                left + (3 * unitWidth / 5), 
                0 + 5 * topPos / 3
            );    
        })

        if(this.visibleWidth < 1.0) {
            let region = new Path2D();
            region.arc(
                0 + radius + (this.boundingBox.width - 2 * radius) * this._visibleWidth, 
                0 + radius, 
                radius,  
                3 * Math.PI / 2,  Math.PI / 2);    
            region.lineTo(
                0 + this.boundingBox.width,
                0 + this.boundingBox.height)
            region.lineTo(
                0 + this.boundingBox.width,
                0)
            region.lineTo(
                0 + radius + (this.boundingBox.width - 2 * radius) * this._visibleWidth,
                0)
            region.closePath();

            context.fillStyle = 'white';
            context.fill(region, 'evenodd');
        }

        context.beginPath();
        context.arc(0 + radius, 0 + radius, radius, Math.PI / 2,  3 * Math.PI / 2);
        context.arc(0 + radius + (this.boundingBox.width - 2 * radius) * this._visibleWidth, 0 + radius, radius,  3 * Math.PI / 2,  Math.PI / 2);
        context.lineTo(0 + radius, 0 + this.boundingBox.height);
        context.stroke();

        context.font        = oldTextStyle;
        context.fillStyle   = oldfillStyle;
    }

    isInPath (context: CanvasRenderingContext2D, p: Point): boolean {
        if (context.isPointInPath(this._path, p.x, p.y)){
            return true;
        }
        return false;
    }
}