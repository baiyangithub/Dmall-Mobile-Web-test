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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
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

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)

const headerTpl = __webpack_require__(30)
const footerTpl = __webpack_require__(1)
const memberTpl = __webpack_require__(31)
const bannerTpl = __webpack_require__(32)
const loginTpl = __webpack_require__(33)

// import mineController from './controllers/mine'
// const memberController = require('./controllers/member')
const indexController = __webpack_require__(2)

$('#root').html(indexTpl)
$('.container').html(headerTpl + memberTpl + footerTpl)
$('.container main').html(bannerTpl + loginTpl)

// $('#root main').html(memberController.render())

indexController.footerAction()


/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = "<header>    <i></i>    <span>验证手机</span></header>"

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = "<main>    </main>"

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">    <img src=\"https://img.dmallcdn.com/common/e2767579-05b5-4b08-87b1-12d4fc62d59f_750H\" alt=\"\"></div>"

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">    <div class=\"phone\">        <input type=\"tel\" maxlength=\"11\" placeholder=\"请输入你的手机号\">        <div class=\"phone-right\">            <span>获取验证码</span>        </div>    </div>    <div class=\"code\">        <input type=\"text\" placeholder=\"请输入验证码\" maxlength=\"6\">    </div></div><p class=\"tips\">    验证手机视为已阅读并同意    <a href=\"\">用户协议</a></p><div class=\"btn\">    <button>确定</button></div>"

/***/ })

/******/ });