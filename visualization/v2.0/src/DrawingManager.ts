import Camera from "./Camera";
import Component from "./Component";
import Point from "./Point";
import TreeGenerator from './TreeGenerator';
import TWEEN from '@tweenjs/tween.js'
import { flextree } from "d3-flextree";
import Stats from "../node_modules/stats.js/src/Stats.js";
//import { createWorker } from '../node_modules/typed-web-workers/lib/index.esm.js'

var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

// async function printDelayed(root: Component, isLayoutHorizontal : Boolean = true) : Promise<void> {
//     const flextreeLayout = flextree({ spacing: 10});

//     const rootLayout = root.getLayout(); 

//     if (isLayoutHorizontal) { flipLayout1(rootLayout); }
//    // this._worker.postMessage({flextree: flextree, rootLayout: rootLayout});
//     const tree = flextreeLayout.hierarchy(rootLayout);  
//     flextreeLayout(tree);
//     if (isLayoutHorizontal) { flipLayout(tree); }           

//     root.setLayout(tree);
// }

export default class DrawingManager {    
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _camera: Camera;
    private _layoutCounter: number;
    private _isLayoutHorizontal: boolean;
    private _root: Component;
    private _worker: any;
    
    constructor(){
        this._canvas = document.createElement("canvas");
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._context = this._canvas.getContext("2d")!;
        this._camera = new Camera(this._context);
        this._layoutCounter = 0;
        // const tree = new TNode(new Rectangle(100, 100));
        // tree.addChild(new TNode(new Rectangle(50, 50)));
        // const tree2 = new TNode(new Rectangle(25, 50));
        // tree.addChild(tree2);
        // tree2.addChild(new TNode(new Rectangle(50, 50)));
        this._root = TreeGenerator.generateTree(1);
        this._isLayoutHorizontal = true;
        // this._worker = createWorker({
        //     workerFunction: ({input, callback}) => {
        //         const flextreeLayout = input.flextree({ spacing: 10});
        //         const tree = flextreeLayout.hierarchy(input.rootLayout);  
        //         flextreeLayout(tree);
        //         callback(tree);
        //     },    
        //     onMessage: result => console.log(`Worker returned: ${result}`),
        //     onError: error => console.log(`unhandled exception in Worker`)
        //   });
          
        this.addListeners();
    }      

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    flipLayout1(tree : any) {
        tree.size.reverse();
        if (tree.children) {
            tree.children.forEach((child : any) => this.flipLayout1(child));
        }
    }
    
    flipLayout(tree : any) {
        if (tree.children) {
            tree.children.forEach((child : any) => this.flipLayout(child));
        }
        [tree.x, tree.y] = [tree.y, tree.x - tree.xSize / 2];
    }
    
    updateLayout() {
        //printDelayed(this._root);
        const flextreeLayout = flextree({ spacing: 10});

        const rootLayout = this._root.getLayout(); 

        if (this._isLayoutHorizontal) { this.flipLayout1(rootLayout); }
       // this._worker.postMessage({flextree: flextree, rootLayout: rootLayout});
        const tree = flextreeLayout.hierarchy(rootLayout);  
        flextreeLayout(tree);
        if (this._isLayoutHorizontal) { this.flipLayout(tree); }           
    
        this._root.setLayout(tree);
    }

    update() {
        if (this._layoutCounter === 60) {
            this.updateLayout();
            this._layoutCounter = 0;
        }
        this._layoutCounter++;
        TWEEN.update();
    }
    
    clear() {        
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    draw() {
        this.clear();
        this._camera.begin();
        this._root.draw(this._context, this._camera);
        this._camera.end();
    }
    
    tick() {
        stats.begin();

        this.update();
        this.draw();
        window.requestAnimationFrame(() => this.tick());
        stats.end();
      }
    
    
    start() {
        this.updateLayout();
        window.requestAnimationFrame(() => this.tick());
    }

    manageClick(e: MouseEvent) {
        const wordCoords : Point = this._camera.screenToWorld({x: e.offsetX, y: e.offsetY});
        this._root.click(this._context, wordCoords);
    }

    addListeners() {       
        this._canvas.addEventListener('click', e => {
            e.preventDefault();
            this.manageClick(e)});
    }
}