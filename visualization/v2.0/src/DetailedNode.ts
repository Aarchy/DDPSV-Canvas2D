import Component from './Component'
import Point from './Point';
import { EventDispatcher, IEvent } from "../node_modules/strongly-typed-events/dist/index";
import BoundingBox from './BoundingBox';

export default class DetailedNode extends Component {
    private _position: Point = {x:0, y:0};
    private _path: Path2D;
    private _boundingBox: BoundingBox;

    constructor (width: number, height: number) {     
        super();
        this._onClick = new EventDispatcher<DetailedNode>();
        this._boundingBox = {
            left: this._position.x,
            top: this._position.y,
            width: width,
            height: height
        };

        this._path = new Path2D;
		this._path.rect(this._position.x, this._position.y, width, height);
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

    get onClick(): IEvent<DetailedNode> {
        return this._onClick.asEvent();
    }

    updatePath (): void {
        this._path = new Path2D;
		this._path.rect(this._position.x, this._position.y, this._boundingBox.width, this._boundingBox.height);
    }
    
    updateBoundingBox(): void {
        this._boundingBox.left  = this._position.x;
        this._boundingBox.top   = this._position.y;
    }
    
    drawThis (context: CanvasRenderingContext2D, drawSimple: Boolean = false): void {
		context.lineWidth = 4;
		context.lineJoin = 'round';
		context.strokeStyle = 'gray';
		context.strokeRect (0, 0, this.boundingBox.width, this.boundingBox.height);

		//Draw little rects
		context.lineJoin = 'miter';
		context.lineWidth = 2;
		let littleRectHeight = this.boundingBox.height / 8;
		let littleRectWidth = this.boundingBox.width / 6;
		for(let i = 0; i < 5; ++i) {
			context.strokeRect (0, i * littleRectHeight, littleRectWidth, littleRectHeight);
			context.strokeRect (5 * littleRectWidth, i * littleRectHeight, littleRectWidth, littleRectHeight);
		}

		//Draw wide rects
		context.fillStyle = 'darkred';
		context.fillRect (0, 5* littleRectHeight, this.boundingBox.width, 3 * littleRectHeight);
		context.fillStyle = 'white';
		context.strokeStyle = 'white';
		context.lineJoin = 'round';
		for(let i = 0; i < 3; ++i) {
			context.strokeRect (3, (5 + i) * littleRectHeight + 3, this.boundingBox.width - 6, littleRectHeight - 6);
			context.fillRect (3, (5 + i) * littleRectHeight + 3, this.boundingBox.width - 6, littleRectHeight - 6);
		}

    }

    isInPath (context: CanvasRenderingContext2D, p: Point): boolean {
        if (context.isPointInPath(this._path, p.x, p.y)){
            return true;
        }
        return false;
    }

}