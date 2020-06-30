import TWEEN from '@tweenjs/tween.js'
import Rectangle from './Rectangle'
import TNode from "./TNode";
import Component from "./Component";
import ProgressCircle from './ProgressCircle';
import Text from './Text'
import FixContainer from './FixContainer';

const randBetween = (n: number, m: number) => n + Math.floor((m - n) * Math.random());


const generateRectangle = (context : CanvasRenderingContext2D) : Rectangle => {
    const r = new Rectangle(randBetween(100,400), randBetween(100,400));
    
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

 function generateRectContainer(context : CanvasRenderingContext2D) : FixContainer {
    var width = randBetween(100,400);
    var height = randBetween(100,400);
    var fixContainer = new FixContainer(width, height);

    var boundingRect = new Rectangle(width, height);
    fixContainer.addComponent(boundingRect, 0, 0);

    var innerRectHeight = 2 * fixContainer.height / 3 / 4;
    var innerRectWidth  = 4 * fixContainer.width / 10;
    for (let i = 0; i < randBetween(1,4); ++i) {
        var innerRect = new Rectangle(innerRectWidth, innerRectHeight);
        fixContainer.addComponent(innerRect, 0, i*innerRectHeight);
        if(Math.random() < 0.5) {
            const text = new Text(generateString(randBetween(3,5)), {x:0, y:0}, context);
            fixContainer.addComponent(text, innerRectWidth / 5, (i+ 0.5)*innerRectHeight - text.boundingBox.height / 2);
        }
    }
    for (let i = 0; i < randBetween(1,4); ++i) {
        var innerRect = new Rectangle(innerRectWidth, innerRectHeight);
        fixContainer.addComponent(innerRect, 1.5 * innerRectWidth, i*innerRectHeight);
        if(Math.random() < 0.5) {
            const text = new Text(generateString(randBetween(3,5)), {x:0, y:0}, context);
            fixContainer.addComponent(text, 1.5 * innerRectWidth + innerRectWidth / 5, (i+ 0.5)*innerRectHeight - text.boundingBox.height / 2);
        }
    }

    return fixContainer;
 }
 
 function generateProgressContainer(context : CanvasRenderingContext2D) : FixContainer {
    const r = randBetween(40,60);
    const fixContainer = new FixContainer(2*r, 2*r);

    const progCircre = new ProgressCircle(r, Math.random());
    progCircre.onClick.subscribe(
        (pCircle: ProgressCircle) => {
            new TWEEN.Tween(pCircle).to({ progress: (Math.random()) }, 1000).start();
        }        
    );
    fixContainer.addComponent(progCircre, 0, 0);
    
    const text = new Text(generateString(randBetween(3,5)), {x:0, y:0}, context);
    fixContainer.addComponent(text, r - text.boundingBox.width / 2, r- text.boundingBox.height / 2);
    return fixContainer;
 }

const generateText = (context : CanvasRenderingContext2D) : Text => {
    const r = new Text(generateString(randBetween(4,15)), {x:0, y:0}, context);

    return r;
} 

export default class TreeGenerator {
    private static generators: Array<Function> = [generateRectangle, generateProgCircle, generateText, generateRectContainer, generateProgressContainer];

    public static generateTree(depth: number, context : CanvasRenderingContext2D) : TNode {
        const root : TNode = new TNode(this.generateRandomComponent(context));

        if(depth > 0){
            const children = [...Array(randBetween(1, 3))].map(
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
