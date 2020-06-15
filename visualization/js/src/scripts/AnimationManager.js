const TWEEN = require('@tweenjs/tween.js');

export default class AnimationManager {
    constructor(){
        var tween = new TWEEN.Tween(position).to(target, 2000);
    }
}