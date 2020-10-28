(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/reactor.js":
/*!*************************!*\
  !*** ../pkg/reactor.js ***!
  \*************************/
/*! exports provided: ConcBuilder, Parameters, RateBuilder, ReactionBuilder, Settings, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reactor_bg.wasm */ \"../pkg/reactor_bg.wasm\");\n/* harmony import */ var _reactor_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactor_bg.js */ \"../pkg/reactor_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ConcBuilder\", function() { return _reactor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"ConcBuilder\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Parameters\", function() { return _reactor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Parameters\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RateBuilder\", function() { return _reactor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"RateBuilder\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ReactionBuilder\", function() { return _reactor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"ReactionBuilder\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Settings\", function() { return _reactor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Settings\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _reactor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/reactor.js?");

/***/ }),

/***/ "../pkg/reactor_bg.js":
/*!****************************!*\
  !*** ../pkg/reactor_bg.js ***!
  \****************************/
/*! exports provided: ConcBuilder, Parameters, RateBuilder, ReactionBuilder, Settings, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConcBuilder\", function() { return ConcBuilder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Parameters\", function() { return Parameters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RateBuilder\", function() { return RateBuilder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReactionBuilder\", function() { return ReactionBuilder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Settings\", function() { return Settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reactor_bg.wasm */ \"../pkg/reactor_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* Loadable concentration structure.\n*/\nclass ConcBuilder {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_concbuilder_free\"](ptr);\n    }\n}\n/**\n* Input parameters.\n*/\nclass Parameters {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Parameters.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_parameters_free\"](ptr);\n    }\n    /**\n    * Construct a new instance from a json string.\n    * @param {string} s\n    * @returns {Parameters}\n    */\n    static from_json(s) {\n        var ptr0 = passStringToWasm0(s, _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        var ret = _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"parameters_from_json\"](ptr0, len0);\n        return Parameters.__wrap(ret);\n    }\n}\n/**\n* Rate of reaction builder.\n*/\nclass RateBuilder {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_ratebuilder_free\"](ptr);\n    }\n}\n/**\n* Reaction builder.\n*/\nclass ReactionBuilder {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_reactionbuilder_free\"](ptr);\n    }\n}\n/**\n* Integration settings structure.\n*/\nclass Settings {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _reactor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_settings_free\"](ptr);\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../web/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/reactor_bg.js?");

/***/ }),

/***/ "../pkg/reactor_bg.wasm":
/*!******************************!*\
  !*** ../pkg/reactor_bg.wasm ***!
  \******************************/
/*! exports provided: memory, __wbg_reactionbuilder_free, __wbg_parameters_free, parameters_from_json, __wbg_concbuilder_free, __wbg_settings_free, __wbg_ratebuilder_free, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./reactor_bg.js */ \"../pkg/reactor_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/reactor_bg.wasm?");

/***/ }),

/***/ "./draw.js":
/*!*****************!*\
  !*** ./draw.js ***!
  \*****************/
/*! exports provided: clear_canvas, fill_canvas, draw_circle, draw_rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear_canvas\", function() { return clear_canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fill_canvas\", function() { return fill_canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw_circle\", function() { return draw_circle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw_rect\", function() { return draw_rect; });\n/// Clear the canvas.\nfunction clear_canvas(canvas) {\n    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);\n}\n\n/// Fill the canvas.\nfunction fill_canvas(canvas) {\n    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);\n}\n\n/// Draw a circle to the given canvas with the given fractional positioning and pixel radius.\nfunction draw_circle(canvas, fx, fy, rad) {\n    const ctx = canvas.ctx;\n    ctx.beginPath();\n    ctx.arc(canvas.width * fx, canvas.height * (1.0 - fy), rad, 0.0, 2.0 * Math.PI, false);\n    ctx.stroke();\n}\n\n/// Draw a rectangle to the given canvas with the given fractional positioning.\nfunction draw_rect(canvas, fx, fy, dx, dy) {\n    const ctx = canvas.ctx;\n    ctx.beginPath();\n    ctx.fillRect(canvas.width * fx, canvas.height * (1.0 - fy), canvas.width * dx, canvas.width * dy);\n    ctx.stroke();\n}\n\n\n//# sourceURL=webpack:///./draw.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ \"./draw.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./ui.js\");\n/* harmony import */ var reactor_reactor_bg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactor/reactor_bg */ \"../pkg/reactor_bg.wasm\");\n/* harmony import */ var reactor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactor */ \"../pkg/reactor.js\");\n\n\n\n\n\n\n\n//  == HANDLES ==\n/// -- Forms --\nconst top_form = document.getElementById(\"top_form\");\nconst bottom_form = document.getElementById(\"bottom_form\");\n\n/// -- Ranges --\nconst starting_number_range = document.getElementById(\"starting_number_range\");\n\n/// -- Buttons --\nconst time_button = document.getElementById(\"time_button\");\n\n\n\n//  == SYSTEMS ==\n/// Example 3-reactions.\nconst REACTION_TRIPLE = '{concs:[[\"A\",1.0],[\"B\",1.0],],reactions:[{reactants:[[\"A\",2.0],[\"B\",1.0]],products:[[\"C\",3.0]],rate:[2.0,[[\"A\",2.0],[\"B\",1.0]]]},{reactants:[[\"A\",1.0],[\"D\",1.0]],products:[[\"E\",2.0]],rate:[3.0,[[\"A\",1.0],[\"D\",1.0]]]},{reactants:[[\"C\",2.0],[\"E\",1.0]],products:[[\"F\",3.0]],rate:[4.0,[[\"C\",1.0],[\"E\",1.0]]]}],sett:{time:1.0,num_steps:1000}}'\n\n\n\n/// == GLOBALS ==\nlet frame_id = null;\nlet y_min = 0.0;\nlet y_max = 1.0;\n\n\n\n/// == CONSTANTS ==\n/// -- Settings --\nconst HISTORY = 100;\n\n\n\n/// == FUNCTIONS ==\n/// -- Initialisation --\n/// Initialise a canvas object.\nfunction init_canvas(id, width, height) {\n    console.log(\"Initialising canvas...\");\n\n    const canvas = document.getElementById(id);\n    canvas.width = width;\n    canvas.height = height;\n\n    return {\n        width,\n        height,\n        ctx: canvas.getContext(\"2d\")\n    }\n}\n\n/// Create a new array and initialise its elements to a given value.\nfunction init_array(len, val) {\n    let arr = [];\n    arr.length = len;\n    arr.fill(val);\n\n    return arr;\n}\n\n\n\n/// -- Drawing --\n/// Draw everything.\nfunction draw_parts(canvas) {\n    Object(_draw__WEBPACK_IMPORTED_MODULE_0__[\"draw_circle\"])(canvas, 0.5, 0.5, 10);\n}\n\n/// Draw a concentration line.\nfunction draw_conc(canvas, concs) {\n    let dt = 1.0 / (concs.length - 1);\n    for (let i = 0; i < concs.length; ++i) {\n        Object(_draw__WEBPACK_IMPORTED_MODULE_0__[\"draw_circle\"])(canvas, dt * i, concs[i] / y_max, 2);\n    }\n}\n\n\n\n/// == START ==\nconsole.log(\"Hello world!\");\nObject(_ui__WEBPACK_IMPORTED_MODULE_1__[\"toggle_forms\"])(top_form, bottom_form);\nObject(_ui__WEBPACK_IMPORTED_MODULE_1__[\"toggle_forms\"])(top_form, bottom_form);\n\nconst canvas = init_canvas(\"main_canvas\", 800, 800);\n\ncanvas.ctx.lineWidth = 2;\ncanvas.ctx.strokeStyle = \"red\";\ndraw_parts(canvas);\n\nconst concs = init_array(6, init_array(HISTORY, 0));\nfor (let i = 0; i < HISTORY; ++i) {\n    concs[0][i] = 0.01 * i;\n}\n\ndraw_conc(canvas, concs[0]);\n\nconst params = reactor__WEBPACK_IMPORTED_MODULE_3__[\"Parameters\"].from_json(\"pies\");\n\n// let params = Parameters.from_json(REACTION_TRIPLE);\n// console.log(params);\n// console.log(\"bewbs\");\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./ui.js":
/*!***************!*\
  !*** ./ui.js ***!
  \***************/
/*! exports provided: toggle_forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggle_forms\", function() { return toggle_forms; });\n/// Toggle the form visibility.\nfunction toggle_forms(top, bottom) {\n    console.log(\"Toggling form visibility...\");\n\n    if (top.style.display == \"block\") {\n        top.style.display = \"none\";\n        bottom.style.display = \"none\";\n    } else {\n        top.style.display = \"block\";\n        bottom.style.display = \"block\";\n    }\n}\n\n\n//# sourceURL=webpack:///./ui.js?");

/***/ })

}]);