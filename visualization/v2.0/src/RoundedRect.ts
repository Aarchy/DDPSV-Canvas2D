import Component from './Component'
import Point from './Point';
import { EventDispatcher, IEvent } from "../node_modules/strongly-typed-events/dist/index";
import BoundingBox from './BoundingBox';

export default class RoundedRect extends Component {
    private _position: Point = {x:0, y:0};
    private _stages: Array<string>; 
    private _path: Path2D;
    private _boundingBox: BoundingBox;
    private _origWidth: number;

    private _visibleWidth: number = 1.0;

    constructor (width: number, height: number, stages: Array<string>) {     
        super();
        this._onClick = new EventDispatcher<RoundedRect>();
        this._stages    = stages;  
        this._origWidth = width;
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
    }   


    get visibleWidth() : number {
        return this._visibleWidth;
    }
    set visibleWidth(value: number) {
        this._visibleWidth = value;
        this.updateBoundingBox();
        this.updatePath();
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

    get boundingBox(): BoundingBox {
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
        this._boundingBox.left  = this._position.x;
        this._boundingBox.top   = this._position.y;
        this._boundingBox.width   = this._origWidth * this._visibleWidth;
    }
    
    drawThis (context: CanvasRenderingContext2D, drawSimple: Boolean = false): void {
        let oldTextStyle = context.font; 
        let oldfillStyle = context.fillStyle;

        let radius : number = this.boundingBox.height / 2;

        context.font = '10px serif';
        let unitWidth : number = this._origWidth / 13;
        let topPos : number = this.boundingBox.height / 3;
        this._stages.forEach((stage,i) => {
            let left = 0 + ((1 + i * 4) * unitWidth);
            context.strokeRect(left, 0 + topPos, 3 * unitWidth, topPos);

            if (drawSimple) {
                let stageTextMetrics = context.measureText(stage);
                let savedFillStyle = context.fillStyle;
                context.fillStyle = 'lightblue';
                context.fillRect(
                    left + (3 * unitWidth / 5), 
                    0 + 5 * topPos / 3 - stageTextMetrics.actualBoundingBoxAscent,
                    stageTextMetrics.width,
                    stageTextMetrics.actualBoundingBoxAscent + stageTextMetrics.actualBoundingBoxDescent
                );    
                context.fillStyle = savedFillStyle;
            } else{
                context.fillText(stage, 
                    left + (3 * unitWidth / 5), 
                    0 + 5 * topPos / 3
                );
            }
        })

        if(this.visibleWidth < 1.0) {
            let region = new Path2D();
            region.arc(
                0 + this.boundingBox.width - radius, 
                0 + radius, 
                radius,  
                3 * Math.PI / 2,  Math.PI / 2);    
            region.lineTo(
                0 + this._origWidth,
                0 + this.boundingBox.height)
            region.lineTo(
                0 + this._origWidth,
                0)
            region.lineTo(
                0 + this.boundingBox.width - radius,
                0)
            region.closePath();

            context.fillStyle = 'white';
            context.fill(region, 'evenodd');
        }

        context.beginPath();
        context.arc(0 + radius, 0 + radius, radius, Math.PI / 2,  3 * Math.PI / 2);
        context.arc(0 + this.boundingBox.width - radius, 0 + radius, radius,  3 * Math.PI / 2,  Math.PI / 2);
        context.lineTo(0 + radius, 0 + this.boundingBox.height);
        context.stroke();
    }

    isInPath (context: CanvasRenderingContext2D, p: Point): boolean {
        if (context.isPointInPath(this._path, p.x, p.y)){
            return true;
        }
        return false;
    }
}