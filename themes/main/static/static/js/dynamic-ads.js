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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var adSenseAd = function adSenseAd(pub_id, slot_id) {
  var html = "\n        <ins class=\"adsbygoogle\"\n     style=\"display:block\"\n     data-ad-client=\"".concat(pub_id, "\"\n     data-ad-slot=\"").concat(slot_id, "\"\n     data-ad-format=\"auto\"\n     data-full-width-responsive=\"true\"></ins>");
  return {
    html: html,
    afterInsertFunc: function afterInsertFunc() {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  };
};

var bannerAd = function bannerAd(bannerSrc, link) {
  var html = "<div class=\"banner\">\n                    <a href=\"".concat(link, "\">\n                    <img src=\"").concat(bannerSrc, "\">\n                    </a>\n                    </div>\n                    ");
  return {
    html: html
  };
};

var sentenceAd = function sentenceAd(text, linkText, link) {
  link = "<a href=\"".concat(link, "\">").concat(linkText, "</a>");
  var html = "\n<p style=\"display: inline-block; padding: 1rem; margin: 1rem 0; background-color: #22303D\">\n".concat(text.replace(linkText, link), "\n</p>    \n    ");
  return {
    html: html
  };
};

var insertAd = function insertAd(adConfig, location) {
  var locationNode = document.querySelector(".dynamic-".concat(location));

  if (!locationNode) {
    return;
  }

  locationNode.innerHTML = adConfig.html;

  if (adConfig.afterInsertFunc) {
    adConfig.afterInsertFunc();
  }
};

var run = function run() {
  insertAd(adSenseAd('ca-pub-3609124934128625', '9809657559'), 'top');
  insertAd(bannerAd('https://eu1-us1.ckcdnassets.com/1298/creatives/6195/Forskolin250_english_300x300.jpg', 'https://mixi.mn/?a=146186&c=6186&p=r&s2=side-banner'), 'side');
  insertAd(sentenceAd('testing here', 'here', 'https://google.com'), 'before_content');
};

/* harmony default export */ __webpack_exports__["default"] = (run);

/***/ })
/******/ ]);