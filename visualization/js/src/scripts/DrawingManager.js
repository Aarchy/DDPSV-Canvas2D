import Point from './Point'
import Camera from './Camera';
import Rectangle from './Rectangle';
import TNode from './TNode';
import TWEEN from '../../node_modules/@tweenjs/tween.js/dist/tween.esm';
const flextree = require('d3-flextree').flextree;

export default class DrawingManager {    
    constructor(){
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
        this.camera = new Camera(this.context);
        this.layoutCounter = 0;
        const tree = new TNode(new Rectangle({ x: 0, y: 0}, 100, 100));
        tree.addChild(new TNode(new Rectangle({ x: 0, y: 0}, 50, 50)));
        const tree2 = new TNode(new Rectangle({ x: 0, y: 0}, 25, 50));
        tree.addChild(tree2);
        tree2.addChild(new TNode(new Rectangle({ x: 0, y: 0}, 50, 50)));
        this.root = tree;
        this.horizontal = true;
        this.addListeners();
    }      

    flipLayout(tree) {
        tree.size.reverse();
        if (tree.children) {
            tree.children.forEach((child) => this.flipLayout(child));
        }
        [tree.x, tree.y] = [tree.y, tree.x];
    }

    updateLayout(){
        const flextreeLayout = flextree({ spacing: 10});

        const rootLayout = this.root.getLayout(); 

        if (this.horizontal) { this.flipLayout(rootLayout); }
        const tree = flextreeLayout.hierarchy(rootLayout);
        flextreeLayout(tree);
        //console.log(flextreeLayout.dump(tree));
        if (this.horizontal) { this.flipLayout(tree); }           
    
        this.root.setLayout(tree);
    }

    update() {
        if (this.layoutCounter === 60) {
            this.updateLayout();
            this.layoutCounter = 0;
        }
        this.layoutCounter++;
        TWEEN.update();
    }
    
    clear() {        
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw() {
        this.clear();
        this.camera.begin();
        this.root.traverse( (obj) => obj.draw(this.context));
        this.camera.end();
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

    manageClick(e) {
        console.log(TWEEN);
        const wordCoords = this.camera.screenToWorld(e.x, e.y);
        this.root.traverse( 
            (obj) => obj.isInPath(this.context, wordCoords.x, wordCoords.y, 
            (rect) => {
                new TWEEN.Tween(obj)
                .to({ width: obj.width + 100 }, 1000)
                .start();}
            ));
    }

    addListeners() {       
        this.canvas.addEventListener('click', e => {
            e.preventDefault();
            this.manageClick(e)});
    }
}