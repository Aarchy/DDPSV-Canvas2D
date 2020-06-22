import TWEEN from '@tweenjs/tween.js'
import Rectangle from './Rectangle'
import TNode from "./TNode";
import Component from "./Component";
import ProgressCircle from './ProgressCircle';

const randBetween = (n: number, m: number) => n + Math.floor((m - n) * Math.random());


const generateRectangle = () : Rectangle => {
    const r = new Rectangle(randBetween(40, 200), randBetween(30, 50));
    
    r.onClick.subscribe(
        (rectange: Rectangle) => {

            new TWEEN.Tween(rectange).to({ width: (randBetween(40, 200)) }, 1000).start();
        }        
    );

    return r;
}       

const generateProgCircle = () : ProgressCircle => {
    const r = new ProgressCircle(randBetween(20, 50), Math.random());
    
    r.onClick.subscribe(
        (pCircle: ProgressCircle) => {

            new TWEEN.Tween(pCircle).to({ progress: (Math.random()) }, 1000).start();
        }        
    );

    return r;
}        

export default class TreeGenerator {
    private static generators: Array<Function> = [generateRectangle, generateProgCircle];

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
        return this.generators[randBetween(0, this.generators.length)]();
    }
    
}
