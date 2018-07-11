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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"></div>"

/***/ }),

/***/ 4:
/***/ (function(module, exports) {


  const bannerController = {
      swiper() {
            new Swiper ('.swiper-container', {
            // direction: 'vertical',
            loop: true,  
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }, 
          })
      }
  }
  module.exports = bannerController

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(44)
const detailTpl = __webpack_require__(45)
const footerTpl = __webpack_require__(46)
const goodsTpl = __webpack_require__(47)
const bannerController = __webpack_require__(4)

$('#root').html(indexTpl)
$('.container').html(headerTpl + detailTpl + footerTpl)

$('#root main').html(goodsTpl)

bannerController.swiper()

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = "<header>    <div class=\"J_toolbarCont\">        <span class=\"J_Link\" href=\"javascript:void(0)\" onclick=\"javascript:history.go(-1);\">            <i class=\"icon-arrow-left-white\"></i>        </span>        <div class=\"warename animate\"> [次日达] 福临门金典东北米 5kg </div>        <div class=\"collect\">            <a class=\"animate J_Link J_collect\" data-type=\"fav\">                <i class=\"icon-collect\"></i>            </a>        </div>        <div class=\"act\">            <a class=\"J_Link\">                <i class=\"icon-home\"></i>            </a>        </div>    </div></header>"

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "<main>    </main>"

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = "<footer>    <i class=\"icon-cart-gray\"></i>    <button class=\"orangebtn J_AddCart\">加入购物车</button></footer>"

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = "<div class=\"swiper-container\">    <div class=\"swiper-wrapper\">        <div class=\"swiper-slide\">            <img src=\"http://img.dmallcdn.com/20170901/8a459286-f2eb-4cd2-a77f-e334cf3439ac_800x800L\" alt=\"\">        </div>        <div class=\"swiper-slide\">            <img src=\"http://img.dmallcdn.com/20170901/70bdc598-c4fd-4252-9f3b-2f1dd17ba6c4_800x800L\" alt=\"\">        </div>        <div class=\"swiper-slide\">            <img src=\"http://img.dmallcdn.com/20170901/3fe634b7-2b1e-4a39-a42f-eea3258a1833_800x800L\" alt=\"\">        </div>        <div class=\"swiper-slide\">            <img src=\"http://img.dmallcdn.com/20170901/3f6466eb-e840-4cbe-919b-680d75ab3244_800x800L\" alt=\"\">        </div>    </div>    <!-- 如果需要分页器 -->    <div class=\"swiper-pagination\"></div></div><!-- 价格 --><div class=\"price\"><div>    <div class=\"name\">        <p class=\"J_name\" data-name=\"[次日达] 福临门金典东北米 5kg\">             [次日达] 福临门金典东北米 5kg            <span class=\"J_PresaleNum salenum\">已售                <i class=\"J-data\">5200</i> 件            </span>        </p>    </div>    <!-- 促销价格 -->    <p class=\"price-orange\">        <sup>¥</sup>        <span class=\"f20\">29.90 </span>        <span class=\"original\">35.90</span>        <span class=\"type1\">精选价</span>    </p></div></div><!-- 产地 --><div class=\"product-origin\">    <ul>        <li class=\"saleblack\"> 黑龙江            <span>产地</span>        </li>        <li class=\"saleblack\"> 5kg            <span>规格</span>        </li>        <li class=\"saleblack\"> 常温            <span>储存方式</span>        </li>    </ul></div><!-- 购买 --><div class=\"buy\">    <div class=\"buy-container\">        <h4>            <i class=\"icon icon-detail-send\"></i>             22:00前成功支付的订单预计明日送达        </h4>        <p class=\"pay\">            <i class=\"icon icon-detail-pay\"></i>            仅支持在线支付        </p>    </div></div><!-- 图文详情 --><div class=\"descriptionDetail\" style=\"opacity: 1;\">    <h4>规格参数</h4>    <ul class=\"attributes_box\">        <li class=\"clearfix\">            <div class=\"attr_key\">类别</div>            <div class=\"attr_value\">                <span>米</span>            </div>        </li>    </ul>    <h4 class=\"\">商品介绍</h4>    <p>        <img src=\"http://img.dmallcdn.com/20160113/c648ed94-7f9b-4ebe-bd8a-a00c13f2bcb2_m640\" alt=\"\">        <img src=\"http://img.dmallcdn.com/20160113/7a028b02-c8d6-42f9-be8e-50cb0d83d41f_m640\" alt=\"\">        <img src=\"http://img.dmallcdn.com/20160113/2db17888-11e0-4a51-9e63-5f737e2f8be2_m640\" alt=\"\">        <img src=\"http://img.dmallcdn.com/20160113/f126198a-f401-4439-a0cc-ff481360f479_m640\" alt=\"\">        <img src=\"http://img.dmallcdn.com/20160113/39ad4e08-9f55-422f-9620-3f172c5c4d80_m640\" alt=\"\">        <img src=\"http://img.dmallcdn.com/20160113/50b93f36-7af7-4d1e-9730-11e3e9203699_m640\" alt=\"\">        <img src=\"http://img.dmallcdn.com/20160113/b7afd59a-6c4b-4589-be13-15ca5844ee8c_m640\" alt=\"\">        <img src=\"http://img.dmallcdn.com/20160113/03d4c69e-06f8-4165-85d7-9e1e8ece70ec_m640\" alt=\"\">        <br>    </p>    <p class=\"last-img\">        <img src=\"http://img.dmallcdn.com//20180408/38fb0f09-bd05-4302-9519-331d4dcf7752_m640\" alt=\"\">    </p></div>"

/***/ })

/******/ });