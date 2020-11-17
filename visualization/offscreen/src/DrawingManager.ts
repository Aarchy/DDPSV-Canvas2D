import Camera from "./Camera";
import Component from "./Component";
import Point from "./Point";
import TreeGenerator from './TreeGenerator';
import TWEEN from '@tweenjs/tween.js'
import { flextree } from "d3-flextree";

export default class DrawingManager {    
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _camera: Camera;
    private _layoutCounter: number;
    private _isLayoutHorizontal: boolean;
    private _root: Component;

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
        this._root = TreeGenerator.generateTree(3);
        this._isLayoutHorizontal = true;
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
        [tree.x, tree.y] = [tree.y, tree.x];
    }

    updateLayout(){
        const flextreeLayout = flextree({ spacing: 10});

        const rootLayout = this._root.getLayout(); 

        if (this._isLayoutHorizontal) { this.flipLayout1(rootLayout); }
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
        this._root.draw(this._context);
        this._camera.end();
    }
    
    tick() {
        this.update();
        this.draw();
        window.requestAnimationFrame(() => this.tick());
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