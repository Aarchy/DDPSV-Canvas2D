import TWEEN from '@tweenjs/tween.js'
import Rectangle from './Rectangle'
import TNode from "./TNode";
import Component from "./Component";
import ProgressCircle from './ProgressCircle';
import Text from './Text'

const randBetween = (n: number, m: number) => n + Math.floor((m - n) * Math.random());


const generateRectangle = (context : CanvasRenderingContext2D) : Rectangle => {
    const r = new Rectangle(randBetween(40, 200), randBetween(30, 50));
    
    r.onClick.subscribe(
        (rectange: Rectangle) => {

            new TWEEN.Tween(rectange).to({ width: (randBetween(40, 200)) }, 1000).start();
        }        
    );

    return r;
}       

const generateProgCircle = (context : CanvasRenderingContext2D) : ProgressCircle => {
    const r = new ProgressCircle(randBetween(20, 50), Math.random());
    
    r.onClick.subscribe(
        (pCircle: ProgressCircle) => {

            new TWEEN.Tween(pCircle).to({ progress: (Math.random()) }, 1000).start();
        }        
    );

    return r;
}        

function generateString(length : number) : string {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

const generateText = (context : CanvasRenderingContext2D) : Text => {
    const r = new Text(generateString(randBetween(4,15)), context);

    return r;
} 

export default class TreeGenerator {
    private static generators: Array<Function> = [generateRectangle, generateProgCircle, generateText];

    public static generateTree(depth: number, context : CanvasRenderingContext2D) : TNode {
        const root : TNode = new TNode(this.generateRandomComponent(context));

        if(depth > 0){
            const children = [...Array(randBetween(1, 5))].map(
                () => TreeGenerator.generateTree(depth - 1, context)
            )
            children.forEach(c => {
                root.addChild(c);
            });
        }        

        return root;
    }
    
    private static generateRandomComponent(context : CanvasRenderingContext2D) : Component {
        return this.generators[randBetween(0, this.generators.length)](context);
    }
    
}
