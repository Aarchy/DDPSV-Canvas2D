import ProgressCircle from "./ProgressCircle";

export default abstract class NodeCache {
	private static roundedRects = {};
	private static progressCircle: OffscreenCanvas | null  = null;
	private static detailedNode: OffscreenCanvas | null  = null;

	static getDetailedNode () {
		if (this.detailedNode != null) {
			return this.detailedNode;
		} else {
			this.detailedNode = new OffscreenCanvas(250, 250);
			const context = this.detailedNode.getContext("2d")!;
			context.translate(10, 0);
			context.lineWidth = 4;
			context.lineJoin = 'round';
			context.strokeStyle = 'gray';
			context.strokeRect (0, 0, 200, 200);

			//Draw little rects
			context.lineJoin = 'miter';
			context.lineWidth = 2;
			let littleRectHeight = 200 / 8;
			let littleRectWidth = 200 / 6;
			for(let i = 0; i < 5; ++i) {
				context.strokeRect (0, i * littleRectHeight, littleRectWidth, littleRectHeight);
				context.strokeRect (5 * littleRectWidth, i * littleRectHeight, littleRectWidth, littleRectHeight);
			}

			//Draw wide rects
			context.fillStyle = 'darkred';
			context.fillRect (0, 5* littleRectHeight, 200, 3 * littleRectHeight);
			context.fillStyle = 'lightgray';
			context.strokeStyle = 'lightgray';
			context.lineJoin = 'round';
			for(let i = 0; i < 3; ++i) {
				context.strokeRect (3, (5 + i) * littleRectHeight + 3, 200 - 6, littleRectHeight - 6);
				context.fillRect (3, (5 + i) * littleRectHeight + 3, 200 - 6, littleRectHeight - 6);
			}

			//Draw middle rect
			context.fillStyle = 'lightblue';
			context.fillRect (littleRectWidth + 1, 2, 200 - 2 * littleRectWidth - 2, 5 * littleRectHeight - 2);

			//Draw circles
			context.strokeStyle = 'black';
			for(let i = 0; i < 8; ++i) {
				context.beginPath();
				context.arc (-4, (i+1) * littleRectHeight - littleRectHeight / 2, 2, 0, 2 * Math.PI);
				context.stroke();
				context.beginPath();
				context.arc (200 + 4, (i+1) * littleRectHeight - littleRectHeight / 2, 2, 0, 2 * Math.PI);
				context.stroke();
			}

			//Draw success
			{
			context.fillStyle = 'green';
			context.fillRect (0, 0, littleRectWidth, littleRectHeight / 2);
			context.fillStyle = 'lightgreen';
			context.fillRect (0, littleRectHeight / 2, littleRectWidth, littleRectHeight / 2);

			context.fillStyle = 'green';
			context.fillRect (200 - littleRectWidth, 0, littleRectWidth, littleRectHeight / 2);
			context.fillStyle = 'lightgreen';
			context.fillRect (200 - littleRectWidth, littleRectHeight / 2, littleRectWidth, littleRectHeight / 2);
		
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
			return this.detailedNode;
		}
	}

	static getProgressCircle () {
		if (this.progressCircle != null) {
			return this.progressCircle;
		} else {
			this.progressCircle = new OffscreenCanvas(100, 100);
			const context = this.progressCircle.getContext("2d")!;

			context.beginPath();
			context.arc(40, 40, 40, 0, 2 * Math.PI)
			context.stroke();
	
			context.beginPath();
			context.arc(40, 40, 40 - 10, 0, 2 * Math.PI) // todo: replace -10 constant 
			context.stroke();
		
			const firstText = "20";
			const secondText = "count";
			const thirdText = "Cha 90";
			context.font = '10px sans-serif';
			const _firstTextMetrics = context.measureText(firstText);
			const _secondTextMetrics = context.measureText(secondText);
			const _thirdTextMetrics = context.measureText(thirdText);
			context.fillText(
				firstText, 
				40 - (_firstTextMetrics.width / 2.0), 
				40 - 18
			);

			context.fillText(
				secondText, 
				40 - (_secondTextMetrics.width / 2.0), 
				40
			);

			context.fillText(thirdText, 
				40 - (_thirdTextMetrics.width / 2.0), 
				40 + 18
			);
			return this.progressCircle;
		}		
	}

	static getRoundedRects (stageNum: number) {
		if (this.roundedRects[stageNum] != null) {
			return this.roundedRects[stageNum];
		} else {
			this.roundedRects[stageNum] = new OffscreenCanvas(205, 85);
			const context = this.roundedRects[stageNum].getContext("2d")!;
			const stages : Array<string> 	= []
			for (let i = 0; i < stageNum; ++i) {
				stages.push("Stage" + i.toString());
			}

			const radius : number = 80 / 2;
	
			context.font = '10px sans-serif';
			const unitWidth : number = 200 / 13;
			const topPos : number = 80 / 3;
			stages.forEach((stage,i) => {
				const left = ((1 + i * 4) * unitWidth);
				context.strokeRect(left, topPos, 3 * unitWidth, topPos);
				context.fillText(stage, 
					left + (3 * unitWidth / 5), 
					5 * topPos / 3
				);
			})
			return this.roundedRects[stageNum];


			// if(visibleWidth < 1.0) {
			// 	const region = new Path2D();
			// 	region.arc(
			// 		boundingBox.width - radius, 
			// 		radius, 
			// 		radius,  
			// 		3 * Math.PI / 2,  Math.PI / 2);    
			// 	region.lineTo(
			// 		origWidth,
			// 		boundingBox.height)
			// 	region.lineTo(
			// 		origWidth,
			// 		0)
			// 	region.lineTo(
			// 		boundingBox.width - radius,
			// 		0)
			// 	region.closePath();
	
			// 	context.fillStyle = 'white';
			// 	context.fill(region, 'evenodd');
			// }
	
			// context.beginPath();
			// context.arc(radius, radius, radius, Math.PI / 2,  3 * Math.PI / 2);
			// context.arc(boundingBox.width - radius, radius, radius,  3 * Math.PI / 2,  Math.PI / 2);
			// context.lineTo(radius, boundingBox.height);
			// context.stroke();	
		}
	}


	

}