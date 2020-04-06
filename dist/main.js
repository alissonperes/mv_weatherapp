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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  background-color: cadetblue;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n@media (max-width: 767px) { \\n  body    {\\n    font-size: 0.7rem;\\n  }\\n  #current-forecast{\\n    font-size: 0.8rem;\\n  }\\n}\\n\\n#app {\\n  height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.main-forecast {\\n  display: flex;\\n  flex-flow: row;\\n  flex-wrap: nowrap;\\n  overflow: auto;\\n}\\n.forecast-item {\\n  padding: 0 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n  align-items: center;\\n\\n}\\n\\n#current-weather {\\n  text-align: center;\\n  display: flex;\\n  justify-content: center;\\n  flex-grow: 1;\\n  margin-bottom: 275px;\\n  align-items: center;\\n  border-bottom: 3px dotted #d6c902;\\n  border-top: 2px dotted #d6c902;\\n}\\n\\n.current-weather-nodes {\\n  margin: 0 1.3rem;\\n}\\n\\n.location {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n}\\n\\n#current-forecast {\\n  height: 275px;\\n  display: flex;\\n  overflow: auto;\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  white-space: nowrap;\\n}\\n\\n.units-div {\\n  display: flex;\\n  align-items: center;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getCurrentWeather, getForecast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentWeather\", function() { return getCurrentWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getForecast\", function() { return getForecast; });\n/* harmony import */ var _renderViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderViews */ \"./src/renderViews.js\");\n\n\nconst APP_ID = '07de9ba11ff7a9f82f38e6eee1f5515b';\n\nasync function getCurrentWeather(node, preferences) {\n  const builtURL = `https://api.openweathermap.org/data/2.5/weather?q=${preferences.city}&units=${preferences.units}&APPID=${APP_ID}`;\n  try {\n    const response = await fetch(builtURL);\n    if (response.ok) {\n      const data = await response.json();\n\n      Object(_renderViews__WEBPACK_IMPORTED_MODULE_0__[\"renderCurrentWeather\"])(node, data, preferences);\n      return data;\n    }\n    while (node.firstChild) {\n      node.removeChild(node.firstChild);\n    }\n    node.appendChild(document.createTextNode(response.statusText));\n    return response.statusText;\n  } catch (e) {\n    while (node.firstChild) {\n      node.removeChild(node.firstChild);\n    }\n    node.appendChild(document.createTextNode(e));\n    node.appendChild(\n      document.createTextNode(\n        \"This might be cause by a plugin in your browser, or the openWeatherMap API isn't online at the moment.\",\n      ),\n    );\n    return e;\n  }\n}\n\nasync function getForecast(node, preferences) {\n  const builtURL = `https://api.openweathermap.org/data/2.5/forecast?q=${preferences.city}&units=${preferences.units}&APPID=${APP_ID}`;\n\n  try {\n    const response = await fetch(builtURL);\n    if (response.ok) {\n      const data = await response.json();\n\n      Object(_renderViews__WEBPACK_IMPORTED_MODULE_0__[\"renderMainForecast\"])(node, data.list, preferences);\n      return data;\n    }\n    while (node.firstChild) {\n      node.removeChild(node.firstChild);\n    }\n    node.appendChild(document.createTextNode(response.statusText));\n    return response.statusText;\n  } catch (e) {\n    return e;\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst app = document.getElementById('app');\nconst get = () => JSON.parse(localStorage.getItem('preferences'));\nconst set = (value) => {\n  localStorage.setItem('preferences', JSON.stringify(value));\n  return get();\n};\n\nconst basePreferences = {\n  units: 'metric',\n  city: '',\n};\n\nconst preferences = get() || set(basePreferences);\n\nconst locationDiv = document.createElement('div');\nlocationDiv.className = 'location';\n\nconst unitsDiv = document.createElement('div');\nunitsDiv.className = 'units-div';\n\nconst unitsHeader = document.createElement('h3');\nunitsHeader.innerText = `Units: ${preferences.units}`;\n\nconst toggleUnitBtn = document.createElement('button');\ntoggleUnitBtn.id = 'units-toggle';\ntoggleUnitBtn.innerText = 'Toggle units';\n\nunitsDiv.appendChild(toggleUnitBtn);\nunitsDiv.appendChild(unitsHeader);\nlocationDiv.appendChild(unitsDiv);\n\nconst newLocationDiv = document.createElement('div');\nnewLocationDiv.className = 'new-location';\nconst newLocationInput = document.createElement('input');\nnewLocationInput.id = 'change-location-input';\nnewLocationInput.setAttribute('type', 'text');\nnewLocationInput.setAttribute('placeholder', 'New Location');\nnewLocationInput.setAttribute('required', 'true');\nnewLocationDiv.appendChild(newLocationInput);\n\nconst newLocationBtn = document.createElement('button');\nnewLocationBtn.setAttribute('id', 'change-location-btn');\nnewLocationBtn.setAttribute('type', 'button');\nnewLocationBtn.setAttribute('name', 'changeLocation');\nnewLocationBtn.innerText = 'Change Location';\nnewLocationDiv.appendChild(newLocationBtn);\n\nlocationDiv.appendChild(newLocationDiv);\n\nconst currentWeatherForecast = document.createElement('div');\ncurrentWeatherForecast.id = 'current-weather';\nconst mainForecastDiv = document.createElement('div');\nmainForecastDiv.id = 'current-forecast';\n\napp.appendChild(locationDiv);\napp.appendChild(currentWeatherForecast);\napp.appendChild(mainForecastDiv);\n\nconst unitsToggle = document.getElementById('units-toggle');\nunitsToggle.onclick = () => {\n  preferences.units = preferences.units === 'metric' ? 'imperial' : 'metric';\n  set(preferences);\n  unitsHeader.innerText = `Units: ${preferences.units}`;\n  Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentWeather\"])(currentWeatherForecast, preferences);\n  Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getForecast\"])(mainForecastDiv, preferences);\n};\n\nconst changeLocationBtn = document.getElementById('change-location-btn');\nchangeLocationBtn.onclick = () => {\n  const locationInput = document.getElementById('change-location-input');\n  if (locationInput.checkValidity()) {\n    preferences.city = locationInput.value;\n    set(preferences);\n    Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentWeather\"])(currentWeatherForecast, preferences);\n    Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getForecast\"])(mainForecastDiv, preferences);\n    locationInput.value = '';\n  } else {\n    locationInput.reportValidity();\n  }\n};\n\nasync function posSuccess(position) {\n  const { latitude, longitude } = position.coords;\n  const geoCodingApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en-us`;\n  fetch(geoCodingApiUrl)\n    .then((response) => response.json())\n    .then((response) => {\n      const cityObj = response.localityInfo.administrative;\n      basePreferences.city =\n        cityObj[cityObj.length - 2].isoName || cityObj[cityObj.length - 2].name;\n      set(basePreferences);\n      Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentWeather\"])(currentWeatherForecast, basePreferences);\n      Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getForecast\"])(mainForecastDiv, basePreferences);\n      return basePreferences;\n    });\n}\n\nfunction errorCase() {\n  basePreferences.city = 'Siberia';\n  set(basePreferences);\n  Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentWeather\"])(currentWeatherForecast, basePreferences);\n  Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getForecast\"])(mainForecastDiv, basePreferences);\n\n  return basePreferences;\n}\n\nif (navigator.geolocation) {\n  if (preferences.city === '') {\n    navigator.geolocation.getCurrentPosition(posSuccess, errorCase);\n  } else {\n    Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentWeather\"])(currentWeatherForecast, preferences);\n    Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getForecast\"])(mainForecastDiv, preferences);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/renderViews.js":
/*!****************************!*\
  !*** ./src/renderViews.js ***!
  \****************************/
/*! exports provided: renderCurrentWeather, renderMainForecast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCurrentWeather\", function() { return renderCurrentWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMainForecast\", function() { return renderMainForecast; });\nconst navigatorLanguage = navigator.language || navigator.userLanguage || 'en-US';\n\nconst dateFormat = (intDate) => {\n  const newDate = new Date(intDate * 1000);\n  const date = new Date(intDate * 1000).toLocaleDateString(navigatorLanguage);\n  function hhMM() {\n    const hours = newDate.getHours().toLocaleString(navigatorLanguage, {\n      minimumIntegerDigits: 2,\n      useGrouping: false,\n    });\n    const minutes = newDate.getMinutes().toLocaleString(navigatorLanguage, {\n      minimumIntegerDigits: 2,\n      useGrouping: false,\n    });\n\n    const dateStr = `${hours}:${minutes}`;\n    return dateStr;\n  }\n\n  return { date, hhMM };\n};\n\nfunction renderCurrentWeather(node, dataList, preferences) {\n  while (node.firstChild) {\n    node.removeChild(node.firstChild);\n  }\n\n  const { weather, main, sys } = dataList;\n\n  const tempUnit = preferences.units === 'metric' ? 'ºC' : ' ºF';\n  const currentDate = document.createElement('h4');\n  currentDate.innerText = `Updated: ${dateFormat(dataList.dt).date} - ${dateFormat(\n    dataList.dt,\n  ).hhMM()}`;\n  const mainCityDiv = document.createElement('div');\n  mainCityDiv.className = 'current-weather-nodes';\n  const cityNameHeader = document.createElement('h1');\n  cityNameHeader.innerText = dataList.name;\n  const weatherIcon = document.createElement('img');\n  weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;\n  weatherIcon.alt = weather[0].description;\n  const weatherDescription = document.createElement('h3');\n  weatherDescription.innerText = weather[0].description;\n\n  const mainTempDiv = document.createElement('div');\n  mainTempDiv.className = 'current-weather-nodes';\n  const temperature = document.createElement('h3');\n  temperature.innerText = `Temperature: ${main.temp} ${tempUnit}`;\n  const feelsLike = document.createElement('h3');\n  feelsLike.innerText = `Feels like: ${main.feels_like} ${tempUnit}`;\n  const tempMin = document.createElement('h3');\n  tempMin.innerText = `Min: ${main.temp_min} ${tempUnit}`;\n  const tempMax = document.createElement('h3');\n  tempMax.innerText = `Max: ${main.temp_max} ${tempUnit}`;\n\n  const mainOthersDiv = document.createElement('div');\n  mainOthersDiv.className = 'current-weather-nodes';\n  const pressure = document.createElement('h3');\n  pressure.innerText = `Pressure: ${main.pressure} hPa`;\n  const humidity = document.createElement('h3');\n  humidity.innerText = `Humidity: ${main.humidity}%`;\n  const sunrise = document.createElement('h3');\n  sunrise.innerText = `Sunrise: ${dateFormat(sys.sunrise).hhMM()}`;\n  const sunset = document.createElement('h3');\n  sunset.innerText = `Sunset: ${dateFormat(sys.sunset).hhMM()}`;\n\n  const mainCityNodes = [currentDate, cityNameHeader, weatherIcon, weatherDescription];\n  const mainTempNodes = [temperature, feelsLike, tempMin, tempMax];\n  const miainOthersNode = [pressure, humidity, sunrise, sunset];\n\n  mainCityNodes.forEach((item) => {\n    mainCityDiv.appendChild(item);\n  });\n\n  mainTempNodes.forEach((item) => {\n    mainTempDiv.appendChild(item);\n  });\n\n  miainOthersNode.forEach((item) => {\n    mainOthersDiv.appendChild(item);\n  });\n\n  node.appendChild(mainCityDiv);\n  node.appendChild(mainTempDiv);\n  node.appendChild(mainOthersDiv);\n  return 'This';\n}\n\nfunction renderMainForecast(node, dataList, preferences) {\n  while (node.firstChild) {\n    node.removeChild(node.firstChild);\n  }\n  const tempUnit = preferences.units === 'metric' ? 'ºC' : ' ºF';\n  dataList.forEach((item) => {\n    const weatherItem = item.weather[0];\n    const mainItem = item.main;\n    const forecastItem = document.createElement('div');\n    forecastItem.className = 'forecast-item';\n    const dateHeading = document.createElement('h5');\n    dateHeading.innerText = dateFormat(item.dt).date;\n    const dateHourHeading = document.createElement('h5');\n    dateHourHeading.innerText = dateFormat(item.dt).hhMM();\n    const forecastImg = document.createElement('img');\n    forecastImg.src = `https://openweathermap.org/img/wn/${weatherItem.icon}.png`;\n    const forecastDescription = document.createElement('p');\n    forecastDescription.appendChild(document.createTextNode(weatherItem.description));\n    const forecastTemperature = document.createElement('p');\n    forecastTemperature.appendChild(document.createTextNode(`${mainItem.temp} ${tempUnit}`));\n\n    forecastItem.appendChild(dateHeading);\n    forecastItem.appendChild(dateHourHeading);\n    forecastItem.appendChild(forecastImg);\n    forecastItem.appendChild(forecastDescription);\n    forecastItem.appendChild(forecastTemperature);\n    node.appendChild(forecastItem);\n  });\n}\n\n\n\n\n//# sourceURL=webpack:///./src/renderViews.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });