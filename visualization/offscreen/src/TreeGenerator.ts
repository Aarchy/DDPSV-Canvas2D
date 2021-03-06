import TWEEN from '@tweenjs/tween.js'
import Component from './Component';
import ProgressCircle from './ProgressCircle';
import RoundedRectangle from './RoundedRect';

const randBetween = (n: number, m: number) => n + Math.floor((m - n) * Math.random());


const generateRoundedRectangle = () : RoundedRectangle => {

    const r = new RoundedRectangle(200, 80, ['Stage1', 'Stage2', 'Stage3']);
    
    r.onClick.subscribe(
        (rectange: RoundedRectangle) => {

            new TWEEN.Tween(rectange).to({ visibleWidth: Math.random() }, 1000).start();
        }        
    );

    return r;
}       

const generateProgCircle = () : ProgressCircle => {
    const r = new ProgressCircle(40, Math.random(), "20", "count", "Cha 90"); //randBetween(20, 50)
    
    r.onClick.subscribe(
        (pCircle: ProgressCircle) => {

            new TWEEN.Tween(pCircle).to({ progress: (Math.random()) }, 1000).start();
        }        
    );

    return r;
}        

export default class TreeGenerator {
    private static generators: Array<Function> = [generateProgCircle, generateRoundedRectangle];

    public static generateTree(depth: number) : Component {
        const root : Component = this.generateRandomComponent();

        if(depth > 0){
            const children = [...Array(randBetween(3, 4))].map(
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
