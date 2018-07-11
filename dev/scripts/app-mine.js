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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(39)
const footerTpl = __webpack_require__(1)
const mineTpl = __webpack_require__(40)
const orderTpl = __webpack_require__(41)
const surviceTpl = __webpack_require__(42)

const indexController = __webpack_require__(2)
$('#root').html(indexTpl)
$('.container').html(headerTpl + mineTpl +footerTpl)
$('.container main').html(orderTpl + surviceTpl)
indexController.footerAction()

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = "<header>    <div class=\"top-box\">        <div class=\"welcome\">Hello,你好</div>        <a href=\"member.html\" class=\"login\">去登录</a>        <img src=\"https://static.dmall.com/kayak-project/usercenter/dist/usercenter/common/image/offline-barcode.png\" alt=\"\">    </div></header>"

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = "<main>    </main>"

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = "<div class=\"order\">    <div class=\"order-header\">        <h4>我的订单</h4>        <span>全部订单</span>    </div>    <ul>        <li>            <i class=\"icon-needpay\"></i>            <p>待支付</p>        </li>        <li>            <i class=\"icon-waiting\"></i>            <p>待发货</p>        </li>        <li>            <i class=\"icon-recive\"></i>            <p>已发货</p>        </li>    </ul></div><div class=\"wallet-list\">    <div class=\"wallet-list-header\">        <h4>我的资产</h4>    </div>    <ul>        <li>            <span>￥0.00</span>            <p>余额</p>        </li>        <li>            <span>0</span>            <p>积分</p>        </li>        <li>            <span>￥0.00</span>            <p>卡包</p>        </li>        <li>            <span>0</span>            <p>优惠券</p>        </li>    </ul>  </div>"

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = "<div class=\"survice\">    <div class=\"survice-header\">        <h4>我的服务</h4>    </div>    <ul class=\"survice-list\">        <li>            <i class=\"icon-member\"></i>            <h4>会员中心</h4>            <p>会员有好礼</p>        </li>        <li>            <i class=\"icon-location\"></i>            <h4>收货地址</h4>        </li>        <li>            <i class=\"icon-help\"></i>            <h4>帮助中心</h4>        </li>        <li>            <i class=\"icon-service\"></i>            <h4>客服电话</h4>        </li>        <li>            <i class=\"icon-download\"></i>            <h4>体验APP</h4>        </li>        <li>            <i class=\"icon-innvoice\"></i>            <h4>发票中心</h4>        </li>        <li>            <i class=\"icon-bindcard\"></i>            <h4>绑卡中心</h4>        </li>        <li>            <i class=\"icon-freedombuy\"></i>            <h4>自由购</h4>            <p>仅限App使用</p>        </li>        <li>            <i class=\"icon-wantbuy\"></i>            <h4>我想买的</h4>        </li>    </ul></div>"

/***/ })

/******/ });