export default class Point {
        
    //#region Constructor
    /**
    * Create a Point.
    * @param {Number} x
    * @param {Number} y
    */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    //#endregion

    //#region Getters
    
    /** 
    *  * @return {Number} X.
    */
    GetX() {
        return this.x;
    }
    
    /** 
    *  * @return {Number} Y.
    */
    GetY() {
        return this.y;
    }
    
    //#endregion
    
    //#region Setters
    
    /** 
    * @param {Number}   x           New x value.
    * @param {Number}   y           New y value.
    */ 
    Set(x,y){
        this.x = x;
        this.y = y;
    }
    
    /** 
    * @param {Number}   x           New x value.
    */ 
    SetX (x){
        this.x = x;
    }
    
    /** 
    * @param {Number}   y           New y value.
    */ 
    SetY(y){
        this.y = y;
    }
    
    //#endregion
}