// import ProgressCircle from "./ProgressCircle";

export default class StageNodeDrawer {
	private static radius: number = 150;
	private static innerRadius: number = StageNodeDrawer.radius - 10;

	draw (context: CanvasRenderingContext2D, progCircle: ProgressCircle): void {
        context.beginPath();
        context.arc(progCircle.x, progCircle.y, StageNodeDrawer.radius, 0, 2 * Math.PI)
        context.stroke();

        context.beginPath();
        context.arc(progCircle.x, progCircle.y, StageNodeDrawer.innerRadius, 0, 2 * Math.PI) 
        context.stroke();

        context.beginPath();
        let oldStroke = context.strokeStyle;
        let oldWidth = context.lineWidth;
        let oldTextStyle = context.font; 

        if (progCircle.progress < 0.35){
            context.strokeStyle = 'red';
        } else if (progCircle.progress < 0.7) {
            context.strokeStyle = 'orange';
        } else {
            context.strokeStyle = 'green';
        }
        context.lineWidth = 10 - oldWidth;
        context.arc(progCircle.x, progCircle.y, (StageNodeDrawer.radius - StageNodeDrawer.radius) / 2, 0, progCircle.progress * 2 * Math.PI)
        context.stroke();

        context.font = '10px serif';
        var _firstTextMetrics = context.measureText(progCircle.firstText);
        var _secondTextMetrics = context.measureText(progCircle.secondText);
        var _thirdTextMetrics = context.measureText(progCircle.thirdText);
        context.fillText(
            progCircle.firstText, 
            progCircle.x - (_firstTextMetrics.width / 2.0), 
            progCircle.y - 18
        );

        context.fillText(
            progCircle.secondText, 
            progCircle.x - (_secondTextMetrics.width / 2.0), 
            progCircle.y
        );

        context.fillText(progCircle.thirdText, 
            progCircle.x - (_thirdTextMetrics.width / 2.0), 
            progCircle.y + 18
        );

        context.strokeStyle = oldStroke;
        context.lineWidth = oldWidth;
        context.font = oldTextStyle;
    }
}