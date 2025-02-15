/******/ var __webpack_modules__ = ({

/***/ 736:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: C:\Users\Lucian\AppData\Roaming\npm\node_modules\@vercel\ncc\dist\ncc\@@notfound.js?@actions/core
var core = __nccwpck_require__(736);
;// CONCATENATED MODULE: ./src/tag-helper.js
function generateNextTag(current_tag, preserve_v) {
    if(!current_tag)
      throw new Error("current_tag is not defined");
    
    const match = current_tag.match(/^v?([0-9]+)\.([0-9]+)\.([0-9]+)/);
    if (!match || match.length <= 3)
        throw new Error("The provided current_tag format is not valid");

    let nextTag = `${match[1]}.${match[2]}.${parseInt(match[3]) + 1}`;
    if((preserve_v === "true" || preserve_v === true) && current_tag.startsWith("v"))
        nextTag = "v" + nextTag

    return nextTag;
}

/* harmony default export */ const tag_helper = (generateNextTag);

;// CONCATENATED MODULE: ./src/main.js



function main() {
  try {
    const current_tag = process.env.INPUT_CURRENT_TAG
    const preserve_v = process.env.INPUT_PRESERVE_V
    const nextTag = tag_helper(current_tag, preserve_v)

    ;(0,core.info)(`nextTag=${nextTag}`)
    ;(0,core.setOutput)("tag", nextTag);
  }
  catch (error) {
    (0,core.setFailed)(error);
  }
}

main()

