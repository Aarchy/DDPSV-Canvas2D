/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/ts-loader/index.js!./src/LayoutWorker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d3-flextree/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-flextree/index.js ***!
  \*******************************************/
/*! exports provided: flextree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_flextree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/flextree */ \"./node_modules/d3-flextree/src/flextree.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flextree\", function() { return _src_flextree__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-flextree/index.js?");

/***/ }),

/***/ "./node_modules/d3-flextree/package.json":
/*!***********************************************!*\
  !*** ./node_modules/d3-flextree/package.json ***!
  \***********************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bugs, dependencies, description, devDependencies, homepage, jsnext:main, keywords, license, main, module, name, repository, scripts, version, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"_args\\\":[[\\\"d3-flextree@2.1.1\\\",\\\"C:\\\\\\\\Users\\\\\\\\mesza\\\\\\\\OneDrive\\\\\\\\Dokumentumok\\\\\\\\DDPS\\\\\\\\DDPSV-Canvas2D\\\\\\\\visualization\\\\\\\\v2.0\\\"]],\\\"_from\\\":\\\"d3-flextree@2.1.1\\\",\\\"_id\\\":\\\"d3-flextree@2.1.1\\\",\\\"_inBundle\\\":false,\\\"_integrity\\\":\\\"sha512-P0SK6bRm0PT5ZZON8Lh/aOcFfr4rO53kaYCXCgwBCvsHJcYjtOb8fNrgmpOmCMCgfrT9EczXzD8wqEO8mlkBrA==\\\",\\\"_location\\\":\\\"/d3-flextree\\\",\\\"_phantomChildren\\\":{},\\\"_requested\\\":{\\\"type\\\":\\\"version\\\",\\\"registry\\\":true,\\\"raw\\\":\\\"d3-flextree@2.1.1\\\",\\\"name\\\":\\\"d3-flextree\\\",\\\"escapedName\\\":\\\"d3-flextree\\\",\\\"rawSpec\\\":\\\"2.1.1\\\",\\\"saveSpec\\\":null,\\\"fetchSpec\\\":\\\"2.1.1\\\"},\\\"_requiredBy\\\":[\\\"/\\\"],\\\"_resolved\\\":\\\"https://registry.npmjs.org/d3-flextree/-/d3-flextree-2.1.1.tgz\\\",\\\"_spec\\\":\\\"2.1.1\\\",\\\"_where\\\":\\\"C:\\\\\\\\Users\\\\\\\\mesza\\\\\\\\OneDrive\\\\\\\\Dokumentumok\\\\\\\\DDPS\\\\\\\\DDPSV-Canvas2D\\\\\\\\visualization\\\\\\\\v2.0\\\",\\\"author\\\":{\\\"name\\\":\\\"Chris Maloney\\\",\\\"url\\\":\\\"http://chrismaloney.org\\\"},\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/klortho/d3-flextree/issues\\\"},\\\"dependencies\\\":{\\\"d3-hierarchy\\\":\\\"^1.1.5\\\"},\\\"description\\\":\\\"Flexible tree layout algorithm that allows for variable node sizes.\\\",\\\"devDependencies\\\":{\\\"babel-plugin-external-helpers\\\":\\\"^6.22.0\\\",\\\"babel-preset-es2015-rollup\\\":\\\"^3.0.0\\\",\\\"d3\\\":\\\"^4.13.0\\\",\\\"d3-selection-multi\\\":\\\"^1.0.1\\\",\\\"eslint\\\":\\\"^4.19.1\\\",\\\"jsdom\\\":\\\"^11.6.2\\\",\\\"npm-run-all\\\":\\\"^4.1.2\\\",\\\"rollup\\\":\\\"^0.55.3\\\",\\\"rollup-plugin-babel\\\":\\\"^2.7.1\\\",\\\"rollup-plugin-commonjs\\\":\\\"^8.0.2\\\",\\\"rollup-plugin-copy\\\":\\\"^0.2.3\\\",\\\"rollup-plugin-json\\\":\\\"^2.3.0\\\",\\\"rollup-plugin-node-resolve\\\":\\\"^3.0.2\\\",\\\"rollup-plugin-uglify\\\":\\\"^3.0.0\\\",\\\"uglify-es\\\":\\\"^3.3.9\\\"},\\\"homepage\\\":\\\"https://github.com/klortho/d3-flextree\\\",\\\"jsnext:main\\\":\\\"index\\\",\\\"keywords\\\":[\\\"d3\\\",\\\"d3-module\\\",\\\"layout\\\",\\\"tree\\\",\\\"hierarchy\\\",\\\"d3-hierarchy\\\",\\\"plugin\\\",\\\"d3-plugin\\\",\\\"infovis\\\",\\\"visualization\\\",\\\"2d\\\"],\\\"license\\\":\\\"WTFPL\\\",\\\"main\\\":\\\"build/d3-flextree.js\\\",\\\"module\\\":\\\"index\\\",\\\"name\\\":\\\"d3-flextree\\\",\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"git+https://github.com/klortho/d3-flextree.git\\\"},\\\"scripts\\\":{\\\"build\\\":\\\"rollup -c\\\",\\\"build:demo\\\":\\\"rollup -c --environment BUILD:demo\\\",\\\"build:dev\\\":\\\"rollup -c --environment BUILD:dev\\\",\\\"build:prod\\\":\\\"rollup -c --environment BUILD:prod\\\",\\\"build:test\\\":\\\"rollup -c --environment BUILD:test\\\",\\\"clean\\\":\\\"rm -rf build demo test\\\",\\\"lint\\\":\\\"eslint index.js src\\\",\\\"prepare\\\":\\\"npm-run-all clean build lint test\\\",\\\"test\\\":\\\"npm-run-all test:*\\\",\\\"test:browser\\\":\\\"node test/browser-tests.js\\\",\\\"test:main\\\":\\\"node test/bundle.js\\\"},\\\"version\\\":\\\"2.1.1\\\"}\");\n\n//# sourceURL=webpack:///./node_modules/d3-flextree/package.json?");

/***/ }),

/***/ "./node_modules/d3-flextree/src/flextree.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-flextree/src/flextree.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return flextree; });\n/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-hierarchy */ \"./node_modules/d3-hierarchy/src/index.js\");\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../package.json */ \"./node_modules/d3-flextree/package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./node_modules/d3-flextree/package.json\", 1);\n\n\n\nconst defaults = Object.freeze({\n  children: data => data.children,\n  nodeSize: node => node.data.size,\n  spacing: 0,\n});\n\n// Create a layout function with customizable options. Per D3-style, the\n// options can be set at any time using setter methods. The layout function\n// will compute the tree node positions based on the options in effect at the\n// time it is called.\nfunction flextree(options) {\n  const opts = Object.assign({}, defaults, options);\n  function accessor(name) {\n    const opt = opts[name];\n    return typeof opt === 'function' ? opt : () => opt;\n  }\n\n  function layout(tree) {\n    const wtree = wrap(getWrapper(), tree, node=>node.children);\n    wtree.update();\n    return wtree.data;\n  }\n\n  function getFlexNode() {\n    const nodeSize = accessor('nodeSize');\n    const spacing = accessor('spacing');\n    return class FlexNode extends d3_hierarchy__WEBPACK_IMPORTED_MODULE_0__[\"hierarchy\"].prototype.constructor {\n      constructor(data) {\n        super(data);\n      }\n      copy() {\n        const c = wrap(this.constructor, this, node=>node.children);\n        c.each(node => node.data = node.data.data);\n        return c;\n      }\n      get size() { return nodeSize(this); }\n      spacing(oNode) { return spacing(this, oNode); }\n      get nodes() { return this.descendants(); }\n      get xSize() { return this.size[0]; }\n      get ySize() { return this.size[1]; }\n      get top() { return this.y; }\n      get bottom() { return this.y + this.ySize; }\n      get left() { return this.x - this.xSize / 2; }\n      get right() { return this.x + this.xSize / 2; }\n      get root() {\n        const ancs = this.ancestors();\n        return ancs[ancs.length - 1];\n      }\n      get numChildren() {\n        return this.hasChildren ? this.children.length : 0;\n      }\n      get hasChildren() { return !this.noChildren; }\n      get noChildren() { return this.children === null; }\n      get firstChild() {\n        return this.hasChildren ? this.children[0] : null;\n      }\n      get lastChild() {\n        return this.hasChildren ? this.children[this.numChildren - 1] : null;\n      }\n      get extents() {\n        return (this.children || []).reduce(\n          (acc, kid) => FlexNode.maxExtents(acc, kid.extents),\n          this.nodeExtents);\n      }\n      get nodeExtents() {\n        return {\n          top: this.top,\n          bottom: this.bottom,\n          left: this.left,\n          right: this.right,\n        };\n      }\n      static maxExtents(e0, e1) {\n        return {\n          top: Math.min(e0.top, e1.top),\n          bottom: Math.max(e0.bottom, e1.bottom),\n          left: Math.min(e0.left, e1.left),\n          right: Math.max(e0.right, e1.right),\n        };\n      }\n    };\n  }\n\n  function getWrapper() {\n    const FlexNode = getFlexNode();\n    const nodeSize = accessor('nodeSize');\n    const spacing = accessor('spacing');\n    return class extends FlexNode {\n      constructor(data) {\n        super(data);\n        Object.assign(this, {\n          x: 0, y: 0,\n          relX: 0, prelim: 0, shift: 0, change: 0,\n          lExt: this, lExtRelX: 0, lThr: null,\n          rExt: this, rExtRelX: 0, rThr: null,\n        });\n      }\n      get size() { return nodeSize(this.data); }\n      spacing(oNode) { return spacing(this.data, oNode.data); }\n      get x() { return this.data.x; }\n      set x(v) { this.data.x = v; }\n      get y() { return this.data.y; }\n      set y(v) { this.data.y = v; }\n      update() {\n        layoutChildren(this);\n        resolveX(this);\n        return this;\n      }\n    };\n  }\n\n  function wrap(FlexClass, treeData, children) {\n    const _wrap = (data, parent) => {\n      const node = new FlexClass(data);\n      Object.assign(node, {\n        parent,\n        depth: parent === null ? 0 : parent.depth + 1,\n        height: 0,\n        length: 1,\n      });\n      const kidsData = children(data) || [];\n      node.children = kidsData.length === 0 ? null\n        : kidsData.map(kd => _wrap(kd, node));\n      if (node.children) {\n        Object.assign(node, node.children.reduce(\n          (hl, kid) => ({\n            height: Math.max(hl.height, kid.height + 1),\n            length: hl.length + kid.length,\n          }), node\n        ));\n      }\n      return node;\n    };\n    return _wrap(treeData, null);\n  }\n\n\n  Object.assign(layout, {\n    nodeSize(arg) {\n      return arguments.length ? (opts.nodeSize = arg, layout) : opts.nodeSize;\n    },\n    spacing(arg) {\n      return arguments.length ? (opts.spacing = arg, layout) : opts.spacing;\n    },\n    children(arg) {\n      return arguments.length ? (opts.children = arg, layout) : opts.children;\n    },\n    hierarchy(treeData, children) {\n      const kids = typeof children === 'undefined' ? opts.children : children;\n      return wrap(getFlexNode(), treeData, kids);\n    },\n    dump(tree) {\n      const nodeSize = accessor('nodeSize');\n      const _dump = i0 => node => {\n        const i1 = i0 + '  ';\n        const i2 = i0 + '    ';\n        const {x, y} = node;\n        const size = nodeSize(node);\n        const kids = (node.children || []);\n        const kdumps = (kids.length === 0) ? ' ' :\n          `,${i1}children: [${i2}${kids.map(_dump(i2)).join(i2)}${i1}],${i0}`;\n        return `{ size: [${size.join(', ')}],${i1}x: ${x}, y: ${y}${kdumps}},`;\n      };\n      return _dump('\\n')(tree);\n    },\n  });\n  return layout;\n}\nflextree.version = _package_json__WEBPACK_IMPORTED_MODULE_1__[\"version\"];\n\nconst layoutChildren = (w, y = 0) => {\n  w.y = y;\n  (w.children || []).reduce((acc, kid) => {\n    const [i, lastLows] = acc;\n    layoutChildren(kid, w.y + w.ySize);\n    // The lowest vertical coordinate while extreme nodes still point\n    // in current subtree.\n    const lowY = (i === 0 ? kid.lExt : kid.rExt).bottom;\n    if (i !== 0) separate(w, i, lastLows);\n    const lows = updateLows(lowY, i, lastLows);\n    return [i + 1, lows];\n  }, [0, null]);\n  shiftChange(w);\n  positionRoot(w);\n  return w;\n};\n\n// Resolves the relative coordinate properties - relX and prelim --\n// to set the final, absolute x coordinate for each node. This also sets\n// `prelim` to 0, so that `relX` for each node is its x-coordinate relative\n// to its parent.\nconst resolveX = (w, prevSum, parentX) => {\n  // A call to resolveX without arguments is assumed to be for the root of\n  // the tree. This will set the root's x-coord to zero.\n  if (typeof prevSum === 'undefined') {\n    prevSum = -w.relX - w.prelim;\n    parentX = 0;\n  }\n  const sum = prevSum + w.relX;\n  w.relX = sum + w.prelim - parentX;\n  w.prelim = 0;\n  w.x = parentX + w.relX;\n  (w.children || []).forEach(k => resolveX(k, sum, w.x));\n  return w;\n};\n\n// Process shift and change for all children, to add intermediate spacing to\n// each child's modifier.\nconst shiftChange = w => {\n  (w.children || []).reduce((acc, child) => {\n    const [lastShiftSum, lastChangeSum] = acc;\n    const shiftSum = lastShiftSum + child.shift;\n    const changeSum = lastChangeSum + shiftSum + child.change;\n    child.relX += changeSum;\n    return [shiftSum, changeSum];\n  }, [0, 0]);\n};\n\n// Separates the latest child from its previous sibling\n/* eslint-disable complexity */\nconst separate = (w, i, lows) => {\n  const lSib = w.children[i - 1];\n  const curSubtree = w.children[i];\n  let rContour = lSib;\n  let rSumMods = lSib.relX;\n  let lContour = curSubtree;\n  let lSumMods = curSubtree.relX;\n  let isFirst = true;\n  while (rContour && lContour) {\n    if (rContour.bottom > lows.lowY) lows = lows.next;\n    // How far to the left of the right side of rContour is the left side\n    // of lContour? First compute the center-to-center distance, then add\n    // the \"spacing\"\n    const dist =\n      (rSumMods + rContour.prelim) - (lSumMods + lContour.prelim) +\n      rContour.xSize / 2 + lContour.xSize / 2 +\n      rContour.spacing(lContour);\n    if (dist > 0 || (dist < 0 && isFirst)) {\n      lSumMods += dist;\n      // Move subtree by changing relX.\n      moveSubtree(curSubtree, dist);\n      distributeExtra(w, i, lows.index, dist);\n    }\n    isFirst = false;\n    // Advance highest node(s) and sum(s) of modifiers\n    const rightBottom = rContour.bottom;\n    const leftBottom = lContour.bottom;\n    if (rightBottom <= leftBottom) {\n      rContour = nextRContour(rContour);\n      if (rContour) rSumMods += rContour.relX;\n    }\n    if (rightBottom >= leftBottom) {\n      lContour = nextLContour(lContour);\n      if (lContour) lSumMods += lContour.relX;\n    }\n  }\n  // Set threads and update extreme nodes. In the first case, the\n  // current subtree is taller than the left siblings.\n  if (!rContour && lContour) setLThr(w, i, lContour, lSumMods);\n  // In the next case, the left siblings are taller than the current subtree\n  else if (rContour && !lContour) setRThr(w, i, rContour, rSumMods);\n};\n/* eslint-enable complexity */\n\n// Move subtree by changing relX.\nconst moveSubtree = (subtree, distance) => {\n  subtree.relX += distance;\n  subtree.lExtRelX += distance;\n  subtree.rExtRelX += distance;\n};\n\nconst distributeExtra = (w, curSubtreeI, leftSibI, dist) => {\n  const curSubtree = w.children[curSubtreeI];\n  const n = curSubtreeI - leftSibI;\n  // Are there intermediate children?\n  if (n > 1) {\n    const delta = dist / n;\n    w.children[leftSibI + 1].shift += delta;\n    curSubtree.shift -= delta;\n    curSubtree.change -= dist - delta;\n  }\n};\n\nconst nextLContour = w => {\n  return w.hasChildren ? w.firstChild : w.lThr;\n};\n\nconst nextRContour = w => {\n  return w.hasChildren ? w.lastChild : w.rThr;\n};\n\nconst setLThr = (w, i, lContour, lSumMods) => {\n  const firstChild = w.firstChild;\n  const lExt = firstChild.lExt;\n  const curSubtree = w.children[i];\n  lExt.lThr = lContour;\n  // Change relX so that the sum of modifier after following thread is correct.\n  const diff = lSumMods - lContour.relX - firstChild.lExtRelX;\n  lExt.relX += diff;\n  // Change preliminary x coordinate so that the node does not move.\n  lExt.prelim -= diff;\n  // Update extreme node and its sum of modifiers.\n  firstChild.lExt = curSubtree.lExt;\n  firstChild.lExtRelX = curSubtree.lExtRelX;\n};\n\n// Mirror image of setLThr.\nconst setRThr = (w, i, rContour, rSumMods) => {\n  const curSubtree = w.children[i];\n  const rExt = curSubtree.rExt;\n  const lSib = w.children[i - 1];\n  rExt.rThr = rContour;\n  const diff = rSumMods - rContour.relX - curSubtree.rExtRelX;\n  rExt.relX += diff;\n  rExt.prelim -= diff;\n  curSubtree.rExt = lSib.rExt;\n  curSubtree.rExtRelX = lSib.rExtRelX;\n};\n\n// Position root between children, taking into account their modifiers\nconst positionRoot = w => {\n  if (w.hasChildren) {\n    const k0 = w.firstChild;\n    const kf = w.lastChild;\n    const prelim = (k0.prelim + k0.relX - k0.xSize / 2 +\n      kf.relX + kf.prelim + kf.xSize / 2 ) / 2;\n    Object.assign(w, {\n      prelim,\n      lExt: k0.lExt, lExtRelX: k0.lExtRelX,\n      rExt: kf.rExt, rExtRelX: kf.rExtRelX,\n    });\n  }\n};\n\n// Make/maintain a linked list of the indexes of left siblings and their\n// lowest vertical coordinate.\nconst updateLows = (lowY, index, lastLows) => {\n  // Remove siblings that are hidden by the new subtree.\n  while (lastLows !== null && lowY >= lastLows.lowY)\n    lastLows = lastLows.next;\n  // Prepend the new subtree.\n  return {\n    lowY,\n    index,\n    next: lastLows,\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/d3-flextree/src/flextree.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/accessors.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/accessors.js ***!
  \****************************************************/
/*! exports provided: optional, required */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"optional\", function() { return optional; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"required\", function() { return required; });\nfunction optional(f) {\n  return f == null ? null : required(f);\n}\n\nfunction required(f) {\n  if (typeof f !== \"function\") throw new Error;\n  return f;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/accessors.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/array.js":
/*!************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/array.js ***!
  \************************************************/
/*! exports provided: slice, shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\nvar slice = Array.prototype.slice;\n\nfunction shuffle(array) {\n  var m = array.length,\n      t,\n      i;\n\n  while (m) {\n    i = Math.random() * m-- | 0;\n    t = array[m];\n    array[m] = array[i];\n    array[i] = t;\n  }\n\n  return array;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/array.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/cluster.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/cluster.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction defaultSeparation(a, b) {\n  return a.parent === b.parent ? 1 : 2;\n}\n\nfunction meanX(children) {\n  return children.reduce(meanXReduce, 0) / children.length;\n}\n\nfunction meanXReduce(x, c) {\n  return x + c.x;\n}\n\nfunction maxY(children) {\n  return 1 + children.reduce(maxYReduce, 0);\n}\n\nfunction maxYReduce(y, c) {\n  return Math.max(y, c.y);\n}\n\nfunction leafLeft(node) {\n  var children;\n  while (children = node.children) node = children[0];\n  return node;\n}\n\nfunction leafRight(node) {\n  var children;\n  while (children = node.children) node = children[children.length - 1];\n  return node;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var separation = defaultSeparation,\n      dx = 1,\n      dy = 1,\n      nodeSize = false;\n\n  function cluster(root) {\n    var previousNode,\n        x = 0;\n\n    // First walk, computing the initial x & y values.\n    root.eachAfter(function(node) {\n      var children = node.children;\n      if (children) {\n        node.x = meanX(children);\n        node.y = maxY(children);\n      } else {\n        node.x = previousNode ? x += separation(node, previousNode) : 0;\n        node.y = 0;\n        previousNode = node;\n      }\n    });\n\n    var left = leafLeft(root),\n        right = leafRight(root),\n        x0 = left.x - separation(left, right) / 2,\n        x1 = right.x + separation(right, left) / 2;\n\n    // Second walk, normalizing x & y to the desired size.\n    return root.eachAfter(nodeSize ? function(node) {\n      node.x = (node.x - root.x) * dx;\n      node.y = (root.y - node.y) * dy;\n    } : function(node) {\n      node.x = (node.x - x0) / (x1 - x0) * dx;\n      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;\n    });\n  }\n\n  cluster.separation = function(x) {\n    return arguments.length ? (separation = x, cluster) : separation;\n  };\n\n  cluster.size = function(x) {\n    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);\n  };\n\n  cluster.nodeSize = function(x) {\n    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);\n  };\n\n  return cluster;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/cluster.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/constant.js ***!
  \***************************************************/
/*! exports provided: constantZero, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"constantZero\", function() { return constantZero; });\nfunction constantZero() {\n  return 0;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return function() {\n    return x;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var node = this, nodes = [node];\n  while (node = node.parent) {\n    nodes.push(node);\n  }\n  return nodes;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/ancestors.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/count.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/count.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction count(node) {\n  var sum = 0,\n      children = node.children,\n      i = children && children.length;\n  if (!i) sum = 1;\n  else while (--i >= 0) sum += children[i].value;\n  node.value = sum;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return this.eachAfter(count);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/count.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/descendants.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var nodes = [];\n  this.each(function(node) {\n    nodes.push(node);\n  });\n  return nodes;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/descendants.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(callback) {\n  var node = this, current, next = [node], children, i, n;\n  do {\n    current = next.reverse(), next = [];\n    while (node = current.pop()) {\n      callback(node), children = node.children;\n      if (children) for (i = 0, n = children.length; i < n; ++i) {\n        next.push(children[i]);\n      }\n    }\n  } while (next.length);\n  return this;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/each.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(callback) {\n  var node = this, nodes = [node], next = [], children, i, n;\n  while (node = nodes.pop()) {\n    next.push(node), children = node.children;\n    if (children) for (i = 0, n = children.length; i < n; ++i) {\n      nodes.push(children[i]);\n    }\n  }\n  while (node = next.pop()) {\n    callback(node);\n  }\n  return this;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(callback) {\n  var node = this, nodes = [node], children, i;\n  while (node = nodes.pop()) {\n    callback(node), children = node.children;\n    if (children) for (i = children.length - 1; i >= 0; --i) {\n      nodes.push(children[i]);\n    }\n  }\n  return this;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/index.js ***!
  \**********************************************************/
/*! exports provided: default, computeHeight, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hierarchy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"computeHeight\", function() { return computeHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Node\", function() { return Node; });\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count.js */ \"./node_modules/d3-hierarchy/src/hierarchy/count.js\");\n/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ \"./node_modules/d3-hierarchy/src/hierarchy/each.js\");\n/* harmony import */ var _eachBefore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eachBefore.js */ \"./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js\");\n/* harmony import */ var _eachAfter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachAfter.js */ \"./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js\");\n/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sum.js */ \"./node_modules/d3-hierarchy/src/hierarchy/sum.js\");\n/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort.js */ \"./node_modules/d3-hierarchy/src/hierarchy/sort.js\");\n/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path.js */ \"./node_modules/d3-hierarchy/src/hierarchy/path.js\");\n/* harmony import */ var _ancestors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ancestors.js */ \"./node_modules/d3-hierarchy/src/hierarchy/ancestors.js\");\n/* harmony import */ var _descendants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./descendants.js */ \"./node_modules/d3-hierarchy/src/hierarchy/descendants.js\");\n/* harmony import */ var _leaves_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaves.js */ \"./node_modules/d3-hierarchy/src/hierarchy/leaves.js\");\n/* harmony import */ var _links_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./links.js */ \"./node_modules/d3-hierarchy/src/hierarchy/links.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction hierarchy(data, children) {\n  var root = new Node(data),\n      valued = +data.value && (root.value = data.value),\n      node,\n      nodes = [root],\n      child,\n      childs,\n      i,\n      n;\n\n  if (children == null) children = defaultChildren;\n\n  while (node = nodes.pop()) {\n    if (valued) node.value = +node.data.value;\n    if ((childs = children(node.data)) && (n = childs.length)) {\n      node.children = new Array(n);\n      for (i = n - 1; i >= 0; --i) {\n        nodes.push(child = node.children[i] = new Node(childs[i]));\n        child.parent = node;\n        child.depth = node.depth + 1;\n      }\n    }\n  }\n\n  return root.eachBefore(computeHeight);\n}\n\nfunction node_copy() {\n  return hierarchy(this).eachBefore(copyData);\n}\n\nfunction defaultChildren(d) {\n  return d.children;\n}\n\nfunction copyData(node) {\n  node.data = node.data.data;\n}\n\nfunction computeHeight(node) {\n  var height = 0;\n  do node.height = height;\n  while ((node = node.parent) && (node.height < ++height));\n}\n\nfunction Node(data) {\n  this.data = data;\n  this.depth =\n  this.height = 0;\n  this.parent = null;\n}\n\nNode.prototype = hierarchy.prototype = {\n  constructor: Node,\n  count: _count_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  each: _each_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  eachAfter: _eachAfter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  eachBefore: _eachBefore_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  sum: _sum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  sort: _sort_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  path: _path_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  ancestors: _ancestors_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  descendants: _descendants_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  leaves: _leaves_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  links: _links_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  copy: node_copy\n};\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/index.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/leaves.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var leaves = [];\n  this.eachBefore(function(node) {\n    if (!node.children) {\n      leaves.push(node);\n    }\n  });\n  return leaves;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/leaves.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/links.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/links.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var root = this, links = [];\n  root.each(function(node) {\n    if (node !== root) { // Don’t include the root’s parent, if any.\n      links.push({source: node.parent, target: node});\n    }\n  });\n  return links;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/links.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/path.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/path.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(end) {\n  var start = this,\n      ancestor = leastCommonAncestor(start, end),\n      nodes = [start];\n  while (start !== ancestor) {\n    start = start.parent;\n    nodes.push(start);\n  }\n  var k = nodes.length;\n  while (end !== ancestor) {\n    nodes.splice(k, 0, end);\n    end = end.parent;\n  }\n  return nodes;\n});\n\nfunction leastCommonAncestor(a, b) {\n  if (a === b) return a;\n  var aNodes = a.ancestors(),\n      bNodes = b.ancestors(),\n      c = null;\n  a = aNodes.pop();\n  b = bNodes.pop();\n  while (a === b) {\n    c = a;\n    a = aNodes.pop();\n    b = bNodes.pop();\n  }\n  return c;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/path.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(compare) {\n  return this.eachBefore(function(node) {\n    if (node.children) {\n      node.children.sort(compare);\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/sort.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sum.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sum.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(value) {\n  return this.eachAfter(function(node) {\n    var sum = +value(node.data) || 0,\n        children = node.children,\n        i = children && children.length;\n    while (--i >= 0) sum += children[i].value;\n    node.value = sum;\n  });\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/hierarchy/sum.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/index.js ***!
  \************************************************/
/*! exports provided: cluster, hierarchy, pack, packSiblings, packEnclose, partition, stratify, tree, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cluster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cluster.js */ \"./node_modules/d3-hierarchy/src/cluster.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cluster\", function() { return _cluster_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index.js */ \"./node_modules/d3-hierarchy/src/hierarchy/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hierarchy\", function() { return _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _pack_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pack/index.js */ \"./node_modules/d3-hierarchy/src/pack/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pack\", function() { return _pack_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _pack_siblings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pack/siblings.js */ \"./node_modules/d3-hierarchy/src/pack/siblings.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"packSiblings\", function() { return _pack_siblings_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _pack_enclose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pack/enclose.js */ \"./node_modules/d3-hierarchy/src/pack/enclose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"packEnclose\", function() { return _pack_enclose_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _partition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partition.js */ \"./node_modules/d3-hierarchy/src/partition.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"partition\", function() { return _partition_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _stratify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stratify.js */ \"./node_modules/d3-hierarchy/src/stratify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stratify\", function() { return _stratify_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree.js */ \"./node_modules/d3-hierarchy/src/tree.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tree\", function() { return _tree_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _treemap_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./treemap/index.js */ \"./node_modules/d3-hierarchy/src/treemap/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemap\", function() { return _treemap_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _treemap_binary_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treemap/binary.js */ \"./node_modules/d3-hierarchy/src/treemap/binary.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapBinary\", function() { return _treemap_binary_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _treemap_dice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./treemap/dice.js */ \"./node_modules/d3-hierarchy/src/treemap/dice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapDice\", function() { return _treemap_dice_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _treemap_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./treemap/slice.js */ \"./node_modules/d3-hierarchy/src/treemap/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapSlice\", function() { return _treemap_slice_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _treemap_sliceDice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./treemap/sliceDice.js */ \"./node_modules/d3-hierarchy/src/treemap/sliceDice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapSliceDice\", function() { return _treemap_sliceDice_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _treemap_squarify_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./treemap/squarify.js */ \"./node_modules/d3-hierarchy/src/treemap/squarify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapSquarify\", function() { return _treemap_squarify_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _treemap_resquarify_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./treemap/resquarify.js */ \"./node_modules/d3-hierarchy/src/treemap/resquarify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapResquarify\", function() { return _treemap_resquarify_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/enclose.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/enclose.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ \"./node_modules/d3-hierarchy/src/array.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(circles) {\n  var i = 0, n = (circles = Object(_array_js__WEBPACK_IMPORTED_MODULE_0__[\"shuffle\"])(_array_js__WEBPACK_IMPORTED_MODULE_0__[\"slice\"].call(circles))).length, B = [], p, e;\n\n  while (i < n) {\n    p = circles[i];\n    if (e && enclosesWeak(e, p)) ++i;\n    else e = encloseBasis(B = extendBasis(B, p)), i = 0;\n  }\n\n  return e;\n});\n\nfunction extendBasis(B, p) {\n  var i, j;\n\n  if (enclosesWeakAll(p, B)) return [p];\n\n  // If we get here then B must have at least one element.\n  for (i = 0; i < B.length; ++i) {\n    if (enclosesNot(p, B[i])\n        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {\n      return [B[i], p];\n    }\n  }\n\n  // If we get here then B must have at least two elements.\n  for (i = 0; i < B.length - 1; ++i) {\n    for (j = i + 1; j < B.length; ++j) {\n      if (enclosesNot(encloseBasis2(B[i], B[j]), p)\n          && enclosesNot(encloseBasis2(B[i], p), B[j])\n          && enclosesNot(encloseBasis2(B[j], p), B[i])\n          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {\n        return [B[i], B[j], p];\n      }\n    }\n  }\n\n  // If we get here then something is very wrong.\n  throw new Error;\n}\n\nfunction enclosesNot(a, b) {\n  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;\n  return dr < 0 || dr * dr < dx * dx + dy * dy;\n}\n\nfunction enclosesWeak(a, b) {\n  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;\n  return dr > 0 && dr * dr > dx * dx + dy * dy;\n}\n\nfunction enclosesWeakAll(a, B) {\n  for (var i = 0; i < B.length; ++i) {\n    if (!enclosesWeak(a, B[i])) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction encloseBasis(B) {\n  switch (B.length) {\n    case 1: return encloseBasis1(B[0]);\n    case 2: return encloseBasis2(B[0], B[1]);\n    case 3: return encloseBasis3(B[0], B[1], B[2]);\n  }\n}\n\nfunction encloseBasis1(a) {\n  return {\n    x: a.x,\n    y: a.y,\n    r: a.r\n  };\n}\n\nfunction encloseBasis2(a, b) {\n  var x1 = a.x, y1 = a.y, r1 = a.r,\n      x2 = b.x, y2 = b.y, r2 = b.r,\n      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,\n      l = Math.sqrt(x21 * x21 + y21 * y21);\n  return {\n    x: (x1 + x2 + x21 / l * r21) / 2,\n    y: (y1 + y2 + y21 / l * r21) / 2,\n    r: (l + r1 + r2) / 2\n  };\n}\n\nfunction encloseBasis3(a, b, c) {\n  var x1 = a.x, y1 = a.y, r1 = a.r,\n      x2 = b.x, y2 = b.y, r2 = b.r,\n      x3 = c.x, y3 = c.y, r3 = c.r,\n      a2 = x1 - x2,\n      a3 = x1 - x3,\n      b2 = y1 - y2,\n      b3 = y1 - y3,\n      c2 = r2 - r1,\n      c3 = r3 - r1,\n      d1 = x1 * x1 + y1 * y1 - r1 * r1,\n      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,\n      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,\n      ab = a3 * b2 - a2 * b3,\n      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,\n      xb = (b3 * c2 - b2 * c3) / ab,\n      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,\n      yb = (a2 * c3 - a3 * c2) / ab,\n      A = xb * xb + yb * yb - 1,\n      B = 2 * (r1 + xa * xb + ya * yb),\n      C = xa * xa + ya * ya - r1 * r1,\n      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);\n  return {\n    x: x1 + xa + xb * r,\n    y: y1 + ya + yb * r,\n    r: r\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/pack/enclose.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _siblings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siblings.js */ \"./node_modules/d3-hierarchy/src/pack/siblings.js\");\n/* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessors.js */ \"./node_modules/d3-hierarchy/src/accessors.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant.js */ \"./node_modules/d3-hierarchy/src/constant.js\");\n\n\n\n\nfunction defaultRadius(d) {\n  return Math.sqrt(d.value);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var radius = null,\n      dx = 1,\n      dy = 1,\n      padding = _constant_js__WEBPACK_IMPORTED_MODULE_2__[\"constantZero\"];\n\n  function pack(root) {\n    root.x = dx / 2, root.y = dy / 2;\n    if (radius) {\n      root.eachBefore(radiusLeaf(radius))\n          .eachAfter(packChildren(padding, 0.5))\n          .eachBefore(translateChild(1));\n    } else {\n      root.eachBefore(radiusLeaf(defaultRadius))\n          .eachAfter(packChildren(_constant_js__WEBPACK_IMPORTED_MODULE_2__[\"constantZero\"], 1))\n          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))\n          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));\n    }\n    return root;\n  }\n\n  pack.radius = function(x) {\n    return arguments.length ? (radius = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_1__[\"optional\"])(x), pack) : radius;\n  };\n\n  pack.size = function(x) {\n    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];\n  };\n\n  pack.padding = function(x) {\n    return arguments.length ? (padding = typeof x === \"function\" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(+x), pack) : padding;\n  };\n\n  return pack;\n});\n\nfunction radiusLeaf(radius) {\n  return function(node) {\n    if (!node.children) {\n      node.r = Math.max(0, +radius(node) || 0);\n    }\n  };\n}\n\nfunction packChildren(padding, k) {\n  return function(node) {\n    if (children = node.children) {\n      var children,\n          i,\n          n = children.length,\n          r = padding(node) * k || 0,\n          e;\n\n      if (r) for (i = 0; i < n; ++i) children[i].r += r;\n      e = Object(_siblings_js__WEBPACK_IMPORTED_MODULE_0__[\"packEnclose\"])(children);\n      if (r) for (i = 0; i < n; ++i) children[i].r -= r;\n      node.r = e + r;\n    }\n  };\n}\n\nfunction translateChild(k) {\n  return function(node) {\n    var parent = node.parent;\n    node.r *= k;\n    if (parent) {\n      node.x = parent.x + k * node.x;\n      node.y = parent.y + k * node.y;\n    }\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/pack/index.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/siblings.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/siblings.js ***!
  \********************************************************/
/*! exports provided: packEnclose, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"packEnclose\", function() { return packEnclose; });\n/* harmony import */ var _enclose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enclose.js */ \"./node_modules/d3-hierarchy/src/pack/enclose.js\");\n\n\nfunction place(b, a, c) {\n  var dx = b.x - a.x, x, a2,\n      dy = b.y - a.y, y, b2,\n      d2 = dx * dx + dy * dy;\n  if (d2) {\n    a2 = a.r + c.r, a2 *= a2;\n    b2 = b.r + c.r, b2 *= b2;\n    if (a2 > b2) {\n      x = (d2 + b2 - a2) / (2 * d2);\n      y = Math.sqrt(Math.max(0, b2 / d2 - x * x));\n      c.x = b.x - x * dx - y * dy;\n      c.y = b.y - x * dy + y * dx;\n    } else {\n      x = (d2 + a2 - b2) / (2 * d2);\n      y = Math.sqrt(Math.max(0, a2 / d2 - x * x));\n      c.x = a.x + x * dx - y * dy;\n      c.y = a.y + x * dy + y * dx;\n    }\n  } else {\n    c.x = a.x + c.r;\n    c.y = a.y;\n  }\n}\n\nfunction intersects(a, b) {\n  var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;\n  return dr > 0 && dr * dr > dx * dx + dy * dy;\n}\n\nfunction score(node) {\n  var a = node._,\n      b = node.next._,\n      ab = a.r + b.r,\n      dx = (a.x * b.r + b.x * a.r) / ab,\n      dy = (a.y * b.r + b.y * a.r) / ab;\n  return dx * dx + dy * dy;\n}\n\nfunction Node(circle) {\n  this._ = circle;\n  this.next = null;\n  this.previous = null;\n}\n\nfunction packEnclose(circles) {\n  if (!(n = circles.length)) return 0;\n\n  var a, b, c, n, aa, ca, i, j, k, sj, sk;\n\n  // Place the first circle.\n  a = circles[0], a.x = 0, a.y = 0;\n  if (!(n > 1)) return a.r;\n\n  // Place the second circle.\n  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;\n  if (!(n > 2)) return a.r + b.r;\n\n  // Place the third circle.\n  place(b, a, c = circles[2]);\n\n  // Initialize the front-chain using the first three circles a, b and c.\n  a = new Node(a), b = new Node(b), c = new Node(c);\n  a.next = c.previous = b;\n  b.next = a.previous = c;\n  c.next = b.previous = a;\n\n  // Attempt to place each remaining circle…\n  pack: for (i = 3; i < n; ++i) {\n    place(a._, b._, c = circles[i]), c = new Node(c);\n\n    // Find the closest intersecting circle on the front-chain, if any.\n    // “Closeness” is determined by linear distance along the front-chain.\n    // “Ahead” or “behind” is likewise determined by linear distance.\n    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;\n    do {\n      if (sj <= sk) {\n        if (intersects(j._, c._)) {\n          b = j, a.next = b, b.previous = a, --i;\n          continue pack;\n        }\n        sj += j._.r, j = j.next;\n      } else {\n        if (intersects(k._, c._)) {\n          a = k, a.next = b, b.previous = a, --i;\n          continue pack;\n        }\n        sk += k._.r, k = k.previous;\n      }\n    } while (j !== k.next);\n\n    // Success! Insert the new circle c between a and b.\n    c.previous = a, c.next = b, a.next = b.previous = b = c;\n\n    // Compute the new closest circle pair to the centroid.\n    aa = score(a);\n    while ((c = c.next) !== b) {\n      if ((ca = score(c)) < aa) {\n        a = c, aa = ca;\n      }\n    }\n    b = a.next;\n  }\n\n  // Compute the enclosing circle of the front chain.\n  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = Object(_enclose_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a);\n\n  // Translate the circles to put the enclosing circle around the origin.\n  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;\n\n  return c.r;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(circles) {\n  packEnclose(circles);\n  return circles;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/pack/siblings.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/partition.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/partition.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _treemap_round_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treemap/round.js */ \"./node_modules/d3-hierarchy/src/treemap/round.js\");\n/* harmony import */ var _treemap_dice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treemap/dice.js */ \"./node_modules/d3-hierarchy/src/treemap/dice.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var dx = 1,\n      dy = 1,\n      padding = 0,\n      round = false;\n\n  function partition(root) {\n    var n = root.height + 1;\n    root.x0 =\n    root.y0 = padding;\n    root.x1 = dx;\n    root.y1 = dy / n;\n    root.eachBefore(positionNode(dy, n));\n    if (round) root.eachBefore(_treemap_round_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    return root;\n  }\n\n  function positionNode(dy, n) {\n    return function(node) {\n      if (node.children) {\n        Object(_treemap_dice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);\n      }\n      var x0 = node.x0,\n          y0 = node.y0,\n          x1 = node.x1 - padding,\n          y1 = node.y1 - padding;\n      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;\n      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;\n      node.x0 = x0;\n      node.y0 = y0;\n      node.x1 = x1;\n      node.y1 = y1;\n    };\n  }\n\n  partition.round = function(x) {\n    return arguments.length ? (round = !!x, partition) : round;\n  };\n\n  partition.size = function(x) {\n    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];\n  };\n\n  partition.padding = function(x) {\n    return arguments.length ? (padding = +x, partition) : padding;\n  };\n\n  return partition;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/partition.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/stratify.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/stratify.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessors.js */ \"./node_modules/d3-hierarchy/src/accessors.js\");\n/* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index.js */ \"./node_modules/d3-hierarchy/src/hierarchy/index.js\");\n\n\n\nvar keyPrefix = \"$\", // Protect against keys like “__proto__”.\n    preroot = {depth: -1},\n    ambiguous = {};\n\nfunction defaultId(d) {\n  return d.id;\n}\n\nfunction defaultParentId(d) {\n  return d.parentId;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var id = defaultId,\n      parentId = defaultParentId;\n\n  function stratify(data) {\n    var d,\n        i,\n        n = data.length,\n        root,\n        parent,\n        node,\n        nodes = new Array(n),\n        nodeId,\n        nodeKey,\n        nodeByKey = {};\n\n    for (i = 0; i < n; ++i) {\n      d = data[i], node = nodes[i] = new _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__[\"Node\"](d);\n      if ((nodeId = id(d, i, data)) != null && (nodeId += \"\")) {\n        nodeKey = keyPrefix + (node.id = nodeId);\n        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;\n      }\n    }\n\n    for (i = 0; i < n; ++i) {\n      node = nodes[i], nodeId = parentId(data[i], i, data);\n      if (nodeId == null || !(nodeId += \"\")) {\n        if (root) throw new Error(\"multiple roots\");\n        root = node;\n      } else {\n        parent = nodeByKey[keyPrefix + nodeId];\n        if (!parent) throw new Error(\"missing: \" + nodeId);\n        if (parent === ambiguous) throw new Error(\"ambiguous: \" + nodeId);\n        if (parent.children) parent.children.push(node);\n        else parent.children = [node];\n        node.parent = parent;\n      }\n    }\n\n    if (!root) throw new Error(\"no root\");\n    root.parent = preroot;\n    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(_hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__[\"computeHeight\"]);\n    root.parent = null;\n    if (n > 0) throw new Error(\"cycle\");\n\n    return root;\n  }\n\n  stratify.id = function(x) {\n    return arguments.length ? (id = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_0__[\"required\"])(x), stratify) : id;\n  };\n\n  stratify.parentId = function(x) {\n    return arguments.length ? (parentId = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_0__[\"required\"])(x), stratify) : parentId;\n  };\n\n  return stratify;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/stratify.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/tree.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-hierarchy/src/tree.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hierarchy/index.js */ \"./node_modules/d3-hierarchy/src/hierarchy/index.js\");\n\n\nfunction defaultSeparation(a, b) {\n  return a.parent === b.parent ? 1 : 2;\n}\n\n// function radialSeparation(a, b) {\n//   return (a.parent === b.parent ? 1 : 2) / a.depth;\n// }\n\n// This function is used to traverse the left contour of a subtree (or\n// subforest). It returns the successor of v on this contour. This successor is\n// either given by the leftmost child of v or by the thread of v. The function\n// returns null if and only if v is on the highest level of its subtree.\nfunction nextLeft(v) {\n  var children = v.children;\n  return children ? children[0] : v.t;\n}\n\n// This function works analogously to nextLeft.\nfunction nextRight(v) {\n  var children = v.children;\n  return children ? children[children.length - 1] : v.t;\n}\n\n// Shifts the current subtree rooted at w+. This is done by increasing\n// prelim(w+) and mod(w+) by shift.\nfunction moveSubtree(wm, wp, shift) {\n  var change = shift / (wp.i - wm.i);\n  wp.c -= change;\n  wp.s += shift;\n  wm.c += change;\n  wp.z += shift;\n  wp.m += shift;\n}\n\n// All other shifts, applied to the smaller subtrees between w- and w+, are\n// performed by this function. To prepare the shifts, we have to adjust\n// change(w+), shift(w+), and change(w-).\nfunction executeShifts(v) {\n  var shift = 0,\n      change = 0,\n      children = v.children,\n      i = children.length,\n      w;\n  while (--i >= 0) {\n    w = children[i];\n    w.z += shift;\n    w.m += shift;\n    shift += w.s + (change += w.c);\n  }\n}\n\n// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,\n// returns the specified (default) ancestor.\nfunction nextAncestor(vim, v, ancestor) {\n  return vim.a.parent === v.parent ? vim.a : ancestor;\n}\n\nfunction TreeNode(node, i) {\n  this._ = node;\n  this.parent = null;\n  this.children = null;\n  this.A = null; // default ancestor\n  this.a = this; // ancestor\n  this.z = 0; // prelim\n  this.m = 0; // mod\n  this.c = 0; // change\n  this.s = 0; // shift\n  this.t = null; // thread\n  this.i = i; // number\n}\n\nTreeNode.prototype = Object.create(_hierarchy_index_js__WEBPACK_IMPORTED_MODULE_0__[\"Node\"].prototype);\n\nfunction treeRoot(root) {\n  var tree = new TreeNode(root, 0),\n      node,\n      nodes = [tree],\n      child,\n      children,\n      i,\n      n;\n\n  while (node = nodes.pop()) {\n    if (children = node._.children) {\n      node.children = new Array(n = children.length);\n      for (i = n - 1; i >= 0; --i) {\n        nodes.push(child = node.children[i] = new TreeNode(children[i], i));\n        child.parent = node;\n      }\n    }\n  }\n\n  (tree.parent = new TreeNode(null, 0)).children = [tree];\n  return tree;\n}\n\n// Node-link tree diagram using the Reingold-Tilford \"tidy\" algorithm\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var separation = defaultSeparation,\n      dx = 1,\n      dy = 1,\n      nodeSize = null;\n\n  function tree(root) {\n    var t = treeRoot(root);\n\n    // Compute the layout using Buchheim et al.’s algorithm.\n    t.eachAfter(firstWalk), t.parent.m = -t.z;\n    t.eachBefore(secondWalk);\n\n    // If a fixed node size is specified, scale x and y.\n    if (nodeSize) root.eachBefore(sizeNode);\n\n    // If a fixed tree size is specified, scale x and y based on the extent.\n    // Compute the left-most, right-most, and depth-most nodes for extents.\n    else {\n      var left = root,\n          right = root,\n          bottom = root;\n      root.eachBefore(function(node) {\n        if (node.x < left.x) left = node;\n        if (node.x > right.x) right = node;\n        if (node.depth > bottom.depth) bottom = node;\n      });\n      var s = left === right ? 1 : separation(left, right) / 2,\n          tx = s - left.x,\n          kx = dx / (right.x + s + tx),\n          ky = dy / (bottom.depth || 1);\n      root.eachBefore(function(node) {\n        node.x = (node.x + tx) * kx;\n        node.y = node.depth * ky;\n      });\n    }\n\n    return root;\n  }\n\n  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is\n  // applied recursively to the children of v, as well as the function\n  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the\n  // node v is placed to the midpoint of its outermost children.\n  function firstWalk(v) {\n    var children = v.children,\n        siblings = v.parent.children,\n        w = v.i ? siblings[v.i - 1] : null;\n    if (children) {\n      executeShifts(v);\n      var midpoint = (children[0].z + children[children.length - 1].z) / 2;\n      if (w) {\n        v.z = w.z + separation(v._, w._);\n        v.m = v.z - midpoint;\n      } else {\n        v.z = midpoint;\n      }\n    } else if (w) {\n      v.z = w.z + separation(v._, w._);\n    }\n    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);\n  }\n\n  // Computes all real x-coordinates by summing up the modifiers recursively.\n  function secondWalk(v) {\n    v._.x = v.z + v.parent.m;\n    v.m += v.parent.m;\n  }\n\n  // The core of the algorithm. Here, a new subtree is combined with the\n  // previous subtrees. Threads are used to traverse the inside and outside\n  // contours of the left and right subtree up to the highest common level. The\n  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the\n  // superscript o means outside and i means inside, the subscript - means left\n  // subtree and + means right subtree. For summing up the modifiers along the\n  // contour, we use respective variables si+, si-, so-, and so+. Whenever two\n  // nodes of the inside contours conflict, we compute the left one of the\n  // greatest uncommon ancestors using the function ANCESTOR and call MOVE\n  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.\n  // Finally, we add a new thread (if necessary).\n  function apportion(v, w, ancestor) {\n    if (w) {\n      var vip = v,\n          vop = v,\n          vim = w,\n          vom = vip.parent.children[0],\n          sip = vip.m,\n          sop = vop.m,\n          sim = vim.m,\n          som = vom.m,\n          shift;\n      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {\n        vom = nextLeft(vom);\n        vop = nextRight(vop);\n        vop.a = v;\n        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);\n        if (shift > 0) {\n          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);\n          sip += shift;\n          sop += shift;\n        }\n        sim += vim.m;\n        sip += vip.m;\n        som += vom.m;\n        sop += vop.m;\n      }\n      if (vim && !nextRight(vop)) {\n        vop.t = vim;\n        vop.m += sim - sop;\n      }\n      if (vip && !nextLeft(vom)) {\n        vom.t = vip;\n        vom.m += sip - som;\n        ancestor = v;\n      }\n    }\n    return ancestor;\n  }\n\n  function sizeNode(node) {\n    node.x *= dx;\n    node.y = node.depth * dy;\n  }\n\n  tree.separation = function(x) {\n    return arguments.length ? (separation = x, tree) : separation;\n  };\n\n  tree.size = function(x) {\n    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);\n  };\n\n  tree.nodeSize = function(x) {\n    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);\n  };\n\n  return tree;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/tree.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/binary.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/binary.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(parent, x0, y0, x1, y1) {\n  var nodes = parent.children,\n      i, n = nodes.length,\n      sum, sums = new Array(n + 1);\n\n  for (sums[0] = sum = i = 0; i < n; ++i) {\n    sums[i + 1] = sum += nodes[i].value;\n  }\n\n  partition(0, n, parent.value, x0, y0, x1, y1);\n\n  function partition(i, j, value, x0, y0, x1, y1) {\n    if (i >= j - 1) {\n      var node = nodes[i];\n      node.x0 = x0, node.y0 = y0;\n      node.x1 = x1, node.y1 = y1;\n      return;\n    }\n\n    var valueOffset = sums[i],\n        valueTarget = (value / 2) + valueOffset,\n        k = i + 1,\n        hi = j - 1;\n\n    while (k < hi) {\n      var mid = k + hi >>> 1;\n      if (sums[mid] < valueTarget) k = mid + 1;\n      else hi = mid;\n    }\n\n    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;\n\n    var valueLeft = sums[k] - valueOffset,\n        valueRight = value - valueLeft;\n\n    if ((x1 - x0) > (y1 - y0)) {\n      var xk = (x0 * valueRight + x1 * valueLeft) / value;\n      partition(i, k, valueLeft, x0, y0, xk, y1);\n      partition(k, j, valueRight, xk, y0, x1, y1);\n    } else {\n      var yk = (y0 * valueRight + y1 * valueLeft) / value;\n      partition(i, k, valueLeft, x0, y0, x1, yk);\n      partition(k, j, valueRight, x0, yk, x1, y1);\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/treemap/binary.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/dice.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/dice.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(parent, x0, y0, x1, y1) {\n  var nodes = parent.children,\n      node,\n      i = -1,\n      n = nodes.length,\n      k = parent.value && (x1 - x0) / parent.value;\n\n  while (++i < n) {\n    node = nodes[i], node.y0 = y0, node.y1 = y1;\n    node.x0 = x0, node.x1 = x0 += node.value * k;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/treemap/dice.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/index.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round.js */ \"./node_modules/d3-hierarchy/src/treemap/round.js\");\n/* harmony import */ var _squarify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squarify.js */ \"./node_modules/d3-hierarchy/src/treemap/squarify.js\");\n/* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessors.js */ \"./node_modules/d3-hierarchy/src/accessors.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant.js */ \"./node_modules/d3-hierarchy/src/constant.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var tile = _squarify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      round = false,\n      dx = 1,\n      dy = 1,\n      paddingStack = [0],\n      paddingInner = _constant_js__WEBPACK_IMPORTED_MODULE_3__[\"constantZero\"],\n      paddingTop = _constant_js__WEBPACK_IMPORTED_MODULE_3__[\"constantZero\"],\n      paddingRight = _constant_js__WEBPACK_IMPORTED_MODULE_3__[\"constantZero\"],\n      paddingBottom = _constant_js__WEBPACK_IMPORTED_MODULE_3__[\"constantZero\"],\n      paddingLeft = _constant_js__WEBPACK_IMPORTED_MODULE_3__[\"constantZero\"];\n\n  function treemap(root) {\n    root.x0 =\n    root.y0 = 0;\n    root.x1 = dx;\n    root.y1 = dy;\n    root.eachBefore(positionNode);\n    paddingStack = [0];\n    if (round) root.eachBefore(_round_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    return root;\n  }\n\n  function positionNode(node) {\n    var p = paddingStack[node.depth],\n        x0 = node.x0 + p,\n        y0 = node.y0 + p,\n        x1 = node.x1 - p,\n        y1 = node.y1 - p;\n    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;\n    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;\n    node.x0 = x0;\n    node.y0 = y0;\n    node.x1 = x1;\n    node.y1 = y1;\n    if (node.children) {\n      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;\n      x0 += paddingLeft(node) - p;\n      y0 += paddingTop(node) - p;\n      x1 -= paddingRight(node) - p;\n      y1 -= paddingBottom(node) - p;\n      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;\n      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;\n      tile(node, x0, y0, x1, y1);\n    }\n  }\n\n  treemap.round = function(x) {\n    return arguments.length ? (round = !!x, treemap) : round;\n  };\n\n  treemap.size = function(x) {\n    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];\n  };\n\n  treemap.tile = function(x) {\n    return arguments.length ? (tile = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_2__[\"required\"])(x), treemap) : tile;\n  };\n\n  treemap.padding = function(x) {\n    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();\n  };\n\n  treemap.paddingInner = function(x) {\n    return arguments.length ? (paddingInner = typeof x === \"function\" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(+x), treemap) : paddingInner;\n  };\n\n  treemap.paddingOuter = function(x) {\n    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();\n  };\n\n  treemap.paddingTop = function(x) {\n    return arguments.length ? (paddingTop = typeof x === \"function\" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(+x), treemap) : paddingTop;\n  };\n\n  treemap.paddingRight = function(x) {\n    return arguments.length ? (paddingRight = typeof x === \"function\" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(+x), treemap) : paddingRight;\n  };\n\n  treemap.paddingBottom = function(x) {\n    return arguments.length ? (paddingBottom = typeof x === \"function\" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(+x), treemap) : paddingBottom;\n  };\n\n  treemap.paddingLeft = function(x) {\n    return arguments.length ? (paddingLeft = typeof x === \"function\" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(+x), treemap) : paddingLeft;\n  };\n\n  return treemap;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/treemap/index.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/resquarify.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/resquarify.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ \"./node_modules/d3-hierarchy/src/treemap/dice.js\");\n/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ \"./node_modules/d3-hierarchy/src/treemap/slice.js\");\n/* harmony import */ var _squarify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./squarify.js */ \"./node_modules/d3-hierarchy/src/treemap/squarify.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function custom(ratio) {\n\n  function resquarify(parent, x0, y0, x1, y1) {\n    if ((rows = parent._squarify) && (rows.ratio === ratio)) {\n      var rows,\n          row,\n          nodes,\n          i,\n          j = -1,\n          n,\n          m = rows.length,\n          value = parent.value;\n\n      while (++j < m) {\n        row = rows[j], nodes = row.children;\n        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;\n        if (row.dice) Object(_dice_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);\n        else Object(_slice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);\n        value -= row.value;\n      }\n    } else {\n      parent._squarify = rows = Object(_squarify_js__WEBPACK_IMPORTED_MODULE_2__[\"squarifyRatio\"])(ratio, parent, x0, y0, x1, y1);\n      rows.ratio = ratio;\n    }\n  }\n\n  resquarify.ratio = function(x) {\n    return custom((x = +x) > 1 ? x : 1);\n  };\n\n  return resquarify;\n})(_squarify_js__WEBPACK_IMPORTED_MODULE_2__[\"phi\"]));\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/treemap/resquarify.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/round.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/round.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(node) {\n  node.x0 = Math.round(node.x0);\n  node.y0 = Math.round(node.y0);\n  node.x1 = Math.round(node.x1);\n  node.y1 = Math.round(node.y1);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/treemap/round.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/slice.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/slice.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(parent, x0, y0, x1, y1) {\n  var nodes = parent.children,\n      node,\n      i = -1,\n      n = nodes.length,\n      k = parent.value && (y1 - y0) / parent.value;\n\n  while (++i < n) {\n    node = nodes[i], node.x0 = x0, node.x1 = x1;\n    node.y0 = y0, node.y1 = y0 += node.value * k;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/treemap/slice.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/sliceDice.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ \"./node_modules/d3-hierarchy/src/treemap/dice.js\");\n/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ \"./node_modules/d3-hierarchy/src/treemap/slice.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(parent, x0, y0, x1, y1) {\n  (parent.depth & 1 ? _slice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : _dice_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent, x0, y0, x1, y1);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/treemap/sliceDice.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/squarify.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/squarify.js ***!
  \***********************************************************/
/*! exports provided: phi, squarifyRatio, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"phi\", function() { return phi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"squarifyRatio\", function() { return squarifyRatio; });\n/* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ \"./node_modules/d3-hierarchy/src/treemap/dice.js\");\n/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ \"./node_modules/d3-hierarchy/src/treemap/slice.js\");\n\n\n\nvar phi = (1 + Math.sqrt(5)) / 2;\n\nfunction squarifyRatio(ratio, parent, x0, y0, x1, y1) {\n  var rows = [],\n      nodes = parent.children,\n      row,\n      nodeValue,\n      i0 = 0,\n      i1 = 0,\n      n = nodes.length,\n      dx, dy,\n      value = parent.value,\n      sumValue,\n      minValue,\n      maxValue,\n      newRatio,\n      minRatio,\n      alpha,\n      beta;\n\n  while (i0 < n) {\n    dx = x1 - x0, dy = y1 - y0;\n\n    // Find the next non-empty node.\n    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);\n    minValue = maxValue = sumValue;\n    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);\n    beta = sumValue * sumValue * alpha;\n    minRatio = Math.max(maxValue / beta, beta / minValue);\n\n    // Keep adding nodes while the aspect ratio maintains or improves.\n    for (; i1 < n; ++i1) {\n      sumValue += nodeValue = nodes[i1].value;\n      if (nodeValue < minValue) minValue = nodeValue;\n      if (nodeValue > maxValue) maxValue = nodeValue;\n      beta = sumValue * sumValue * alpha;\n      newRatio = Math.max(maxValue / beta, beta / minValue);\n      if (newRatio > minRatio) { sumValue -= nodeValue; break; }\n      minRatio = newRatio;\n    }\n\n    // Position and record the row orientation.\n    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});\n    if (row.dice) Object(_dice_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);\n    else Object(_slice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);\n    value -= sumValue, i0 = i1;\n  }\n\n  return rows;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function custom(ratio) {\n\n  function squarify(parent, x0, y0, x1, y1) {\n    squarifyRatio(ratio, parent, x0, y0, x1, y1);\n  }\n\n  squarify.ratio = function(x) {\n    return custom((x = +x) > 1 ? x : 1);\n  };\n\n  return squarify;\n})(phi));\n\n\n//# sourceURL=webpack:///./node_modules/d3-hierarchy/src/treemap/squarify.js?");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/LayoutWorker.ts":
/*!******************************************************!*\
  !*** ./node_modules/ts-loader!./src/LayoutWorker.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_flextree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-flextree */ \"./node_modules/d3-flextree/index.js\");\n\r\nconst ctx = self;\r\nclass LayoutCalculator {\r\n    constructor() {\r\n        this.flexTree = Object(d3_flextree__WEBPACK_IMPORTED_MODULE_0__[\"flextree\"])({ spacing: 10 });\r\n    }\r\n    flipLayout1(tree) {\r\n        tree.size.reverse();\r\n        if (tree.children) {\r\n            tree.children.forEach((child) => this.flipLayout1(child));\r\n        }\r\n    }\r\n    flipLayout(tree) {\r\n        if (tree.children) {\r\n            tree.children.forEach((child) => this.flipLayout(child));\r\n        }\r\n        [tree.x, tree.y] = [tree.y, tree.x - tree.xSize / 2];\r\n    }\r\n    calculate(rootLayout) {\r\n        this.flipLayout1(rootLayout);\r\n        const tree = this.flexTree.hierarchy(rootLayout);\r\n        this.flexTree(tree);\r\n        this.flipLayout(tree);\r\n        return this.getLayout(tree);\r\n    }\r\n    getLayout(tree) {\r\n        return ({\r\n            x: tree.x,\r\n            y: tree.y,\r\n            children: tree.children === null ? [] : tree.children.map(c => this.getLayout(c))\r\n        });\r\n    }\r\n}\r\nconst layoutCalculator = new LayoutCalculator();\r\nctx.addEventListener(\"message\", (event) => {\r\n    const tree = layoutCalculator.calculate(event.data.rootLayout);\r\n    ctx.postMessage({ tree });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/LayoutWorker.ts?./node_modules/ts-loader");

/***/ })

/******/ });