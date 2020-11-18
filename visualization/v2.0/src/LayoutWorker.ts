import { flextree } from "d3-flextree";

const ctx: Worker = self as any;

class LayoutCalculator {
    flexTree: any;

    constructor(){
       this.flexTree = flextree({ spacing: 10});
    }

    flipLayout1(tree : any) {
      tree.size.reverse();
      if (tree.children) {
          tree.children.forEach((child : any) => this.flipLayout1(child));
      }
    }

    flipLayout(tree : any) {
        if (tree.children) {
            tree.children.forEach((child : any) => this.flipLayout(child));
        }
        [tree.x, tree.y] = [tree.y, tree.x - tree.xSize / 2];
    }

    calculate(rootLayout: any) {
      this.flipLayout1(rootLayout); 
      const tree = this.flexTree.hierarchy(rootLayout);  
      this.flexTree(tree);
      this.flipLayout(tree);
  
      return this.getLayout(tree);
    }

    getLayout (tree:any) { 
      return ({
          x: tree.x,
          y: tree.y,
          children: tree.children === null ? [] : tree.children.map(c => this.getLayout(c))
      });
    }
}

const layoutCalculator = new LayoutCalculator();

ctx.addEventListener("message", (event) => {

    const tree = layoutCalculator.calculate(event.data.rootLayout);

    ctx.postMessage({tree});
});
