import Point from './Point'


export default class Camera {
    private _scale : number = 1.0;
    private _offset : Point = {x: 0, y: 0};

    constructor(public context: CanvasRenderingContext2D) {
        this.addListeners();
    }

    begin() : void {
        this.context.save();
        this.applyTranslation();
        this.applyScale();
    }

    end() : void {
        this.context.restore();
    }

    applyScale() : void {
        this.context.scale(this._scale, this._scale);
    }

    applyTranslation() : void {
        this.context.translate(this._offset.x, -this._offset.y);
    }

    manageZoomEvent(event : WheelEvent) : void {
        this._scale *= event.deltaY > 0 ?  (1.0/1.2) : 1.2;

        if (this._scale <= 0.1) {
            this._scale = 0.1;
        }
    }

    manageMoveEvent(event : MouseEvent) : void {
        if(event.which === 1){
            this._offset.x +=  event.movementX;
            this._offset.y -=  event.movementY;
        }
    }

    addListeners() : void {
        this.context.canvas.onwheel = e => {
            e.preventDefault();
            this.manageZoomEvent(e);
        };
        
        this.context.canvas.addEventListener('mousemove', e => {
            e.preventDefault();
            this.manageMoveEvent(e)});

        window.addEventListener('keydown', e => {
            if (e.key === 'r') {
                this._scale = 1.0;
                this._offset = {x: 0, y: 0};
            }
        });
    }
    
    screenToWorld(p : Point) : Point {
        const x = (p.x - this._offset.x)  / this._scale;
        const y = (p.y  + this._offset.y) / this._scale;
        return {x, y};
    }

    // worldToScreen(p : Point) : Point {
    //     const x = (p.x - this.viewport.left) * (this.viewport.scale[0]);
    //     const y = (p.y - this.viewport.top) * (this.viewport.scale[1]);
    //     return {x, y};
    // }
};