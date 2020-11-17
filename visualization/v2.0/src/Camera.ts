import Component from './Component';
import Point from './Point'

export class ViewPort {
    left:   number = 0;
    right:  number = 0;
    top:    number = 0;
    bottom: number = 0;
    width:  number = 0;
    height: number = 0;
    scale:  [number, number] = [0, 0];
}

export default class Camera {
    distance: number = 1000;
    lookAt: Point = {x: 0, y: 0};
    fieldOfView : number =  Math.PI / 4.0;
    viewport : ViewPort = new ViewPort;
    aspectRatio : number = 1;

    constructor(public context: CanvasRenderingContext2D) {
        this.addListeners();
        this.updateViewport();
    }

    begin() : void {
        this.context.save();
        this.applyScale();
        this.applyTranslation();
    }

    end() : void {
        this.context.restore();
    }

    applyScale() : void {
        this.context.scale(this.viewport.scale[0], this.viewport.scale[1]);
    }

    applyTranslation() : void {
        this.context.translate(-this.viewport.left, -this.viewport.top);
    }

    updateViewport() : void {
        this.aspectRatio = this.context.canvas.width / this.context.canvas.height;
        this.viewport.width = this.distance * Math.tan(this.fieldOfView);
        this.viewport.height = this.viewport.width / this.aspectRatio;
        this.viewport.left = this.lookAt.x - (this.viewport.width / 2.0);
        this.viewport.top = this.lookAt.y - (this.viewport.height / 2.0);
        this.viewport.right = this.viewport.left + this.viewport.width;
        this.viewport.bottom = this.viewport.top + this.viewport.height;
        this.viewport.scale[0] = this.context.canvas.width / this.viewport.width;
        this.viewport.scale[1] = this.context.canvas.height / this.viewport.height;
    }

    zoomTo(z : number) : void {
        this.distance = z;
        this.updateViewport();
    }

    moveTo(point : Point) : void {
        this.lookAt = point;
        this.updateViewport();
    }

    manageZoomEvent(event : WheelEvent) : void {
        let zoomLevel = this.distance;
        if (event.deltaY > 0) {
            zoomLevel *= 1.2;
        } else {
            zoomLevel *= (1.0/1.2);
        }
        if (zoomLevel <= 1) {
            zoomLevel = 1;
        }

        let clientBeforeZoom = this.screenToWorld(event);

        this.zoomTo(zoomLevel);

        let clientAfterZoom = this.screenToWorld(event);
        let newLookat = {
            x: this.lookAt.x + clientBeforeZoom.x - clientAfterZoom.x,
            y: this.lookAt.y + clientBeforeZoom.y - clientAfterZoom.y
        };

        this.moveTo(newLookat);
    }

    manageMoveEvent(event : MouseEvent) : void {
        if(event.which === 1){
            const x = this.lookAt.x - (event.movementX / this.viewport.scale[0]);
            const y = this.lookAt.y - (event.movementY / this.viewport.scale[1]);

            this.moveTo({x, y});
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
                this.zoomTo(1000);
                this.moveTo({x: 0, y: 0});
            }
        });
    }
    
    screenToWorld(p : Point) : Point {
        const x = (p.x / this.viewport.scale[0]) + this.viewport.left;
        const y = (p.y / this.viewport.scale[1]) + this.viewport.top;
        return {x, y};
    }

    worldToScreen(p : Point) : Point {
        const x = (p.x - this.viewport.left) * (this.viewport.scale[0]);
        const y = (p.y - this.viewport.top) * (this.viewport.scale[1]);
        return {x, y};
    }

    isScreenPointInCamera(p : Point) : Boolean {
        return this.viewport.left <= p.x && p.x <= this.viewport.right && 
        this.viewport.top <= p.y &&  p.y <= this.viewport.bottom;
    }

    isVisible (c : Component) : Boolean {
        let topLeft     = {x:c.boundingBox.left, y:c.boundingBox.top};
        let topRight    = {x:c.boundingBox.left + c.boundingBox.width, y:c.boundingBox.top};
        let bottomLeft  = {x:c.boundingBox.left, y:c.boundingBox.top + c.boundingBox.height};
        let bottomRight = {x:c.boundingBox.left + c.boundingBox.width, 
                           y:c.boundingBox.top+ c.boundingBox.height};

        return  this.isScreenPointInCamera(topLeft) ||
                this.isScreenPointInCamera(topRight) ||
                this.isScreenPointInCamera(bottomLeft) ||
                this.isScreenPointInCamera(bottomRight) ||
                (c.boundingBox.left <= this.viewport.left &&
                c.boundingBox.left + c.boundingBox.width >= this.viewport.right &&
                c.boundingBox.top <= this.viewport.top &&
                c.boundingBox.top + c.boundingBox.height >= this.viewport.bottom)
    }   
};
