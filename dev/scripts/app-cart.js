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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"></div>"

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = "<footer class=\"foot iconfont\">  <ul>      <li class=\"active\">          <i class=\"iconfont\">&#xe61f;</i>          <span >首页</span>      </li>      <li>          <i class=\"iconfont\">&#xe609;</i>          <span>分类</span>      </li>      <li>          <i class=\"iconfont\">&#xe619;</i>          <span>会员</span>      </li>            <li>          <i style=\"font-family: \'shop-cart\';padding-top: .02rem;\">&#xe65c;</i>          <span>购物车</span>      </li>      <li>          <i class=\"iconfont\">&#xe626;</i>          <span>我的</span>      </li>  </ul></footer>"

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

const indexController = {
  footerAction() {
    const pagelist = ['index.html', 'classify.html', 'member.html','cart.html','mine.html']
    $('footer li').on('click', function(){
      location.href = pagelist[$(this).index()]
    })
    let pathname = location.pathname.substr(1)
    let curIndex = pagelist.indexOf(pathname)
    curIndex = curIndex > 0 ? curIndex : 0
    $('.foot li').eq(curIndex).addClass('active').siblings().removeClass('active')
    // $('.foot li i').eq(curIndex).addClass('active').siblings('i').removeClass('active')
  }
}

module.exports = indexController


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)

const headerTpl = __webpack_require__(35)
const footerTpl = __webpack_require__(1)
const cartTpl = __webpack_require__(36)
const buyTpl = __webpack_require__(37)
const indexController = __webpack_require__(2)

$("#root").html(indexTpl)
$(".container").html(headerTpl + cartTpl + footerTpl)
$(".container main").html(buyTpl)
indexController.footerAction()

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = "<header>    <section></section>    <div class=\"address\">        <p>多点君需要你的详细地址哟~</p>        <p class=\"send\">送至 : 北京市工业部件表面强化与修复工程技术研究中心 </p>        <span>＞</span>    </div></header>"

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = "<main>    </main>"

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = "<div class=\"buybuybuy\">    <img src=\"https://img.dmallcdn.com/common/31fd8440-0a94-4aba-a239-6b77e13f9824\" alt=\"\">    <span>购物车还木有商品？</span>    <button class=\"buybtn\">我要买买买</button></div>"

/***/ })

/******/ });