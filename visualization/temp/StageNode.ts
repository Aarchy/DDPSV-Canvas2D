// import ProgressCircle from "./ProgressCircle";

export enum Stage {
	ProgressCircle,
	RoundedRectangle
}

export default class StageNode {
	// General information
	private parent: 	StageNode | null 	= null;
	private children: 	Array<StageNode>	= [];
	private stage: 		Stage				= Stage.ProgressCircle;

	// ProgressCircle information
	private progress	: number	= 0;
	private firstText	: string	= "";
	private secondText	: string	= "";
	private thirdText	: string	= "";

	// ProgressRectangleInformation
	private stages: Array<string> = ['Stage1', 'Stage2', 'Stage3']; 

	// Constructor
	constructor () {

	}

	// General functions
	addChild (newChild: StageNode) : void {
		this.children.push(newChild);
		newChild.parent = this;
	}

	get Children() : Array<StageNode> {
		return this.children;
	}




}