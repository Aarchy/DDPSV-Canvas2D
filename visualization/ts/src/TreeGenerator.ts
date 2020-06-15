import TWEEN from '@tweenjs/tween.js'
import Rectangle from './Rectangle'
import TNode from "./TNode";
import Component from "./Component";

const randBetween = (n: number, m: number) => n + Math.floor((m - n) * Math.random());


const generateRectangle = () : Rectangle => {
    const r = new Rectangle(randBetween(40, 200), randBetween(30, 50));
    
    r.onClick.subscribe(
        (rectange: Rectangle) => {

            new TWEEN.Tween(rectange).to({ width: (randBetween(40, 200)) }, 1000).start();
            // rectange.width = (randBetween(40, 200));
            // rectange.height = (randBetween(30, 50));
        }        
    );

    return r;
}        


export default class TreeGenerator {
    private static generators: Array<Function> = [generateRectangle];

    public static generateTree(depth: number) : TNode {
        const root : TNode = new TNode(this.generateRandomComponent());

        if(depth > 0){
            const children = [...Array(randBetween(1, 5))].map(
                () => TreeGenerator.generateTree(depth - 1)
            )
            children.forEach(c => {
                root.addChild(c);
            });
        }        

        return root;
    }
    
    private static generateRandomComponent() : Component {
        return this.generators[randBetween(0, this.generators.length - 1)]();
    }
    
}
