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
		context.fillStyle = 'lightgray';
		context.strokeStyle = 'lightgray';
		context.lineJoin = 'round';
		for(let i = 0; i < 3; ++i) {
			context.strokeRect (3, (5 + i) * littleRectHeight + 3, this.boundingBox.width - 6, littleRectHeight - 6);
			context.fillRect (3, (5 + i) * littleRectHeight + 3, this.boundingBox.width - 6, littleRectHeight - 6);
		}

		//Draw middle rect
		context.fillStyle = 'lightblue';
		context.fillRect (littleRectWidth + 1, 2, this.boundingBox.width - 2 * littleRectWidth - 2, 5 * littleRectHeight - 2);

		//Draw circles
		context.strokeStyle = 'black';
		for(let i = 0; i < 8; ++i) {
			context.beginPath();
			context.arc (-4, (i+1) * littleRectHeight - littleRectHeight / 2, 2, 0, 2 * Math.PI);
			context.stroke();
			context.beginPath();
			context.arc (this.boundingBox.width + 4, (i+1) * littleRectHeight - littleRectHeight / 2, 2, 0, 2 * Math.PI);
			context.stroke();
		}

		//Draw success
		{
		context.fillStyle = 'green';
		context.fillRect (0, 0, littleRectWidth, littleRectHeight / 2);
		context.fillStyle = 'lightgreen';
		context.fillRect (0, littleRectHeight / 2, littleRectWidth, littleRectHeight / 2);

		context.fillStyle = 'green';
		context.fillRect (this.boundingBox.width - littleRectWidth, 0, littleRectWidth, littleRectHeight / 2);
		context.fillStyle = 'lightgreen';
		context.fillRect (this.boundingBox.width - littleRectWidth, littleRectHeight / 2, littleRectWidth, littleRectHeight / 2);
	
		context.fillStyle = 'white';
		context.font = '8px sans-serif';
		let successMetrics = context.measureText("Success");
		context.fillText("Success", littleRectWidth / 2 - successMetrics.width / 2, 
		littleRectHeight / 4 - 5 + successMetrics.actualBoundingBoxAscent);
		
		context.fillStyle = 'black';
		let s20Metrics = context.measureText("20");
		context.fillText("20", littleRectWidth / 2 - s20Metrics.width / 2, 
		littleRectHeight / 2 + littleRectHeight / 4 - 5 + s20Metrics.actualBoundingBoxAscent);

		context.fillStyle = 'white';
		successMetrics = context.measureText("Success");
		context.fillText("Success", 5 * littleRectWidth + littleRectWidth / 2 - successMetrics.width / 2, 
		littleRectHeight / 4 - 5 + successMetrics.actualBoundingBoxAscent);

		context.fillStyle = 'black';
		s20Metrics = context.measureText("20");
		context.fillText("20", 5 * littleRectWidth + littleRectWidth / 2 - s20Metrics.width / 2, 
		littleRectHeight / 2 + littleRectHeight / 4 - 5 + s20Metrics.actualBoundingBoxAscent);
		}
	
		//Draw minavg
		{
			context.fillStyle = 'black';
			context.fillText("Min", 2 * littleRectWidth,
			3 * littleRectHeight);
			context.fillText("Avg", 3 * littleRectWidth, 
			3 * littleRectHeight);
			context.fillText("Max", 4 * littleRectWidth, 
			3 * littleRectHeight);

			context.fillStyle = 'red';
			context.fillText("675ms", 2 * littleRectWidth,
			3 * littleRectHeight + 15);
			context.fillText("900ms", 3 * littleRectWidth, 
			3 * littleRectHeight + 15);
			context.fillText("1.43s", 4 * littleRectWidth, 
			3 * littleRectHeight + 15);

			context.fillStyle = 'blue';
			context.fillText("0b", 2 * littleRectWidth,
			3 * littleRectHeight + 30);
			context.fillText("0b", 3 * littleRectWidth, 
			3 * littleRectHeight + 30);
			context.fillText("0b", 4 * littleRectWidth, 
			3 * littleRectHeight + 30);

			context.fillStyle = 'green';
			context.fillText("0", 2 * littleRectWidth,
			3 * littleRectHeight + 45);
			context.fillText("0", 3 * littleRectWidth, 
			3 * littleRectHeight + 45);
			context.fillText("0", 4 * littleRectWidth, 
			3 * littleRectHeight + 45);
		}

		//Draw bottom text
 		{
			let t1 = "1.43s";
			let t2 = "0b";
			let t3 = "# 0";
			let t4 = "Executor id: driver";

			let t1Metrics = context.measureText(t1);
			let t2Metrics = context.measureText(t2);
			let t3Metrics = context.measureText(t3);
			let t4Metrics = context.measureText(t4);

			let t1Pos = {x : 10, 
				y: 2 + 5 * littleRectHeight + 3 + t1Metrics.actualBoundingBoxAscent};
			let t2Pos = {x : 20 + t1Metrics.width, 
				y: 2 + 5 * littleRectHeight + 3 + t2Metrics.actualBoundingBoxAscent};
			let t3Pos = {x : 30 + t1Metrics.width + t2Metrics.width, 
				y: 2 + 5 * littleRectHeight + 3 + t3Metrics.actualBoundingBoxAscent};
			let t4Pos = {x : 10, 
				y: 4 + 5 * littleRectHeight + 3 + t4Metrics.actualBoundingBoxAscent + t1Metrics.actualBoundingBoxAscent + t1Metrics.actualBoundingBoxDescent};

			context.fillStyle = "darkred";
			context.fillRect(t1Pos.x - 1, t1Pos.y - t1Metrics.actualBoundingBoxAscent - 1, t1Metrics.width + 2,  t1Metrics.actualBoundingBoxAscent + t1Metrics.actualBoundingBoxDescent + 2);
			context.fillRect(t2Pos.x - 1, t2Pos.y - t2Metrics.actualBoundingBoxAscent - 1, t2Metrics.width + 2,  t2Metrics.actualBoundingBoxAscent + t2Metrics.actualBoundingBoxDescent + 2);
			context.fillRect(t3Pos.x - 1, t3Pos.y - t3Metrics.actualBoundingBoxAscent - 1, t3Metrics.width + 2,  t3Metrics.actualBoundingBoxAscent + t3Metrics.actualBoundingBoxDescent + 2);
			context.fillStyle = 'white';
			context.fillText(t1, t1Pos.x, t1Pos.y);
			context.fillText(t2, t2Pos.x, t2Pos.y);
			context.fillText(t3, t3Pos.x, t3Pos.y);
			context.fillStyle = 'black';
			context.fillText(t4, t4Pos.x, t4Pos.y);

			t1Pos = {x : 10, 
				y: 2 + 6 * littleRectHeight + 3 + t1Metrics.actualBoundingBoxAscent};
			t2Pos = {x : 20 + t1Metrics.width, 
				y: 2 + 6 * littleRectHeight + 3 + t2Metrics.actualBoundingBoxAscent};
			t3Pos = {x : 30 + t1Metrics.width + t2Metrics.width, 
				y: 2 + 6 * littleRectHeight + 3 + t3Metrics.actualBoundingBoxAscent};
			t4Pos = {x : 10, 
				y: 4 + 6 * littleRectHeight + 3 + t4Metrics.actualBoundingBoxAscent + t1Metrics.actualBoundingBoxAscent + t1Metrics.actualBoundingBoxDescent};

			context.fillStyle = "darkred";
			context.fillRect(t1Pos.x - 1, t1Pos.y - t1Metrics.actualBoundingBoxAscent - 1, t1Metrics.width + 2,  t1Metrics.actualBoundingBoxAscent + t1Metrics.actualBoundingBoxDescent + 2);
			context.fillRect(t3Pos.x - 1, t3Pos.y - t3Metrics.actualBoundingBoxAscent - 1, t3Metrics.width + 2,  t3Metrics.actualBoundingBoxAscent + t3Metrics.actualBoundingBoxDescent + 2);
			context.fillStyle = 'white';
			context.fillText(t1, t1Pos.x, t1Pos.y);
			context.fillStyle = 'black';
			context.fillText(t2, t2Pos.x, t2Pos.y);
			context.fillStyle = 'white';
			context.fillText(t3, t3Pos.x, t3Pos.y);
			context.fillStyle = 'black';
			context.fillText(t4, t4Pos.x, t4Pos.y);

			t1Pos = {x : 10, 
				y: 2 + 7* littleRectHeight + 3 + t1Metrics.actualBoundingBoxAscent};
			t2Pos = {x : 20 + t1Metrics.width, 
				y: 2 + 7* littleRectHeight + 3 + t2Metrics.actualBoundingBoxAscent};
			t3Pos = {x : 30 + t1Metrics.width + t2Metrics.width, 
				y: 2 + 7* littleRectHeight + 3 + t3Metrics.actualBoundingBoxAscent};
			t4Pos = {x : 10, 
				y: 4 + 7* littleRectHeight + 3 + t4Metrics.actualBoundingBoxAscent + t1Metrics.actualBoundingBoxAscent + t1Metrics.actualBoundingBoxDescent};

			context.fillStyle = "darkred";
			context.fillRect(t2Pos.x - 1, t2Pos.y - t2Metrics.actualBoundingBoxAscent - 1, t2Metrics.width + 2,  t2Metrics.actualBoundingBoxAscent + t2Metrics.actualBoundingBoxDescent + 2);
			context.fillRect(t3Pos.x - 1, t3Pos.y - t3Metrics.actualBoundingBoxAscent - 1, t3Metrics.width + 2,  t3Metrics.actualBoundingBoxAscent + t3Metrics.actualBoundingBoxDescent + 2);
			context.fillStyle = 'black';
			context.fillText(t1, t1Pos.x, t1Pos.y);
			context.fillStyle = 'white';
			context.fillText(t2, t2Pos.x, t2Pos.y);
			context.fillText(t3, t3Pos.x, t3Pos.y);
			context.fillStyle = 'black';
			context.fillText(t4, t4Pos.x, t4Pos.y);


		}

		//Draw diagram
		{
			let values = [0.9, 0, 0, 0.3, 0.5, 0.8];
			let diagramRectWidth = 3 * littleRectWidth / values.length;
			for (let i = 0; i < values.length; ++i){
				let value = values[i];
				if (value > 0.75){
					context.fillStyle = 'purple';
				} else if (value > 0.4){
					context.fillStyle = 'yellow';
				} else {
					context.fillStyle = 'orange';
				}
				let diagramRectHeight = value * 2 * littleRectHeight;

				context.fillRect( 1.5 * littleRectWidth + (i * diagramRectWidth), 2.5 * littleRectHeight - diagramRectHeight, diagramRectWidth, diagramRectHeight);
			}
		}
	}

    isInPath (context: CanvasRenderingContext2D, p: Point): boolean {
        if (context.isPointInPath(this._path, p.x, p.y)){
            return true;
        }
        return false;
    }

}