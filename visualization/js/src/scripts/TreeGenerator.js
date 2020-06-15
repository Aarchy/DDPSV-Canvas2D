import Rectangle from './Rectangle'

const randBetween = (n, m) => n + Math.floor((m - n) * Math.random())

const makeRectangle = () => {
  const r = new Rectangle({
    width: randBetween(40, 200),
    height: randBetween(30, 50)
  })

  r.pixiGraphics.addListener(
    'pointerdown',
    () => {
      r.setWidth(randBetween(40, 200))
      r.setHeight(randBetween(30, 50))
    }
  )

  r.update()
  return r
}

const generators = [
  makeRectangle
]

export default {
    makeTree (root, depth) {
      if (depth === 0 || (depth < 3 && Math.random() < 0.5)) {
        return
      }
  
      const children = [...Array(randomChildCount(depth))].map(
        () => generators[randBetween(0, 5)]()
      )
  
      children.forEach(c => {
        this.makeTree(c, ((Math.random() + (children.length / 5) < 0.5) ? depth : depth - 1))
        root.addChild(c)
      })
    }
}
  