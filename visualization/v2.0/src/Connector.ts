import Component from './Component'
import Point from './Point'

export default class Connector {
    private _from: Component;
    private _to: Component;

    constructor(from: Component, to: Component) {
        this._from = from;
        this._to = to;
    }

    draw (context: CanvasRenderingContext2D): void {
        context.beginPath();

        let from : Point = { 
            x: this._from.boundingBox.left + this._from.boundingBox.width,
            y: this._from.boundingBox.top + this._from.boundingBox.height / 2
        };

        let to : Point = { 
            x: this._to.boundingBox.left,
            y: this._to.boundingBox.top + this._to.boundingBox.height / 2
        };

        context.moveTo(from.x, from.y);
        
        context.bezierCurveTo(
            from.x + (to.x - from.x) / 2, from.y,
            from.x + (to.x - from.x) / 2, to.y,
            to.x, to.y
        );
        context.stroke();

    }

}