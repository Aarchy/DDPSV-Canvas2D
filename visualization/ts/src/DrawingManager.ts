import Camera from "./Camera";
import Rectangle from "./Rectangle";
import TNode from "./TNode";
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
    private _root: TNode;

    constructor(){
        this._canvas = document.createElement("canvas");
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._context = this._canvas.getContext("2d")!;
        this._context.font = '24px Arial';

        this._camera = new Camera(this._context);
        this._layoutCounter = 0;
        // const tree = new TNode(new Rectangle(100, 100));
        // tree.addChild(new TNode(new Rectangle(50, 50)));
        // const tree2 = new TNode(new Rectangle(25, 50));
        // tree.addChild(tree2);
        // tree2.addChild(new TNode(new Rectangle(50, 50)));
        this._root = TreeGenerator.generateTree(6, this._context);
        this._isLayoutHorizontal = true;
        this.addListeners();
    }      

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    flipLayout(tree : any) {
        tree.size.reverse();
        if (tree.children) {
            tree.children.forEach((child : any) => this.flipLayout(child));
        }
    }


    reflipLayout2(tree : any, rootsize: number){
        let right = tree.x + tree.size[0];
        let leftDistance = rootsize - tree.x;
        let newTop = right - leftDistance;
        [tree.x, tree.y] = [tree.y, -newTop];

        tree.size.reverse();

        if (tree.children) {
            tree.children.forEach((child : any) => this.reflipLayout2(child, rootsize));
        }
    }

    reflipLayout(tree : any) {
        [tree.x, tree.y] = [tree.y, tree.x];
        if (tree.children) {
            tree.children.forEach((child : any) => this.reflipLayout2(child, tree.size[0]));
        }
        tree.size.reverse();
    }

    updateLayout(){
        const flextreeLayout = flextree({ spacing: 3});

        const rootLayout = this._root.getLayout(); 

        if (this._isLayoutHorizontal) { this.flipLayout(rootLayout); }
        const tree = flextreeLayout.hierarchy(rootLayout);
        flextreeLayout(tree);
        //console.log(flextreeLayout.dump(tree));
        if (this._isLayoutHorizontal) { this.reflipLayout(tree); }           
    
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
        this._root.traverse( (obj) => obj.draw(this._context));
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
        //console.log('wordcoords: ');
       // console.log(wordCoords);
        this._root.traverse( 
            (obj : Component) : void => obj.manageClick(this._context, wordCoords)
        );
    }

    addListeners() {       
        this._canvas.addEventListener('click', e => {
            e.preventDefault();
            this.manageClick(e)});
    }
}