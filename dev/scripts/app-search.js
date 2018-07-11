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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"></div>"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<footer class=\"foot iconfont\">  <ul>      <li class=\"active\">          <i class=\"iconfont\">&#xe61f;</i>          <span >首页</span>      </li>      <li>          <i class=\"iconfont\">&#xe609;</i>          <span>分类</span>      </li>      <li>          <i class=\"iconfont\">&#xe619;</i>          <span>会员</span>      </li>            <li>          <i style=\"font-family: \'shop-cart\';padding-top: .02rem;\">&#xe65c;</i>          <span>购物车</span>      </li>      <li>          <i class=\"iconfont\">&#xe626;</i>          <span>我的</span>      </li>  </ul></footer>"

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

// 从接口获得后端的数据
const model = {
  find() {
    // fetch('/lagou/listmore.json')
    // fetch('http://localhost:3000/backend/poslist')
    return fetch('/api/poslist')
      .then(response => response.json())
      .then(result => {
        return result
        console.log(result)
      })
  },

}

module.exports = model



/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(23)
const footerTpl = __webpack_require__(1)
const classifyTpl = __webpack_require__(24)
const goodsTpl = __webpack_require__(25)

const classifyGoodsController = __webpack_require__(26)

const indexController = __webpack_require__(2)
const classifyBannerController = __webpack_require__(28)

$('#root').html(indexTpl)
$('.container').html(headerTpl + classifyTpl + footerTpl)

$('#root main').html(goodsTpl)

;(async () => {
    // 渲染
    const Goods_html = await classifyGoodsController.render()
    $('#oil').html(Goods_html)
  })()


indexController.footerAction()

// banner列表
classifyBannerController.swiper()

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<header>    <img style=\"height: 1.5rem;\" src=\"https://static.dmall.com/kayak-project/wxdmall/dist/wxdmall/common/UPBundle.bundle/Dmall/Weixin/Minisite/Images/background.jpg\" alt=\"\">    <img class=\"shadow-top\" src=\"https://static.dmall.com/kayak-project/wxdmall/dist/wxdmall/common/UPBundle.bundle/Dmall/Weixin/Minisite/Images/musk_up.png\" alt=\"\">    <img class=\"shadow-bottom\" src=\"https://static.dmall.com/kayak-project/wxdmall/dist/wxdmall/common/UPBundle.bundle/Dmall/Weixin/Minisite/Images/musk_down.png\" alt=\"\">    <div class=\"head\" style=\"background: black;opacity: 0.8;\">        <ul class=\"swiper-wrapper\">            <li class=\"all swiper-slide\">                <img src=\"../../images/all.png\" alt=\"\">            </li>            <li class=\"swiper-slide\">全部分类</li>            <li class=\"swiper-slide\">奶饮熟食</li>            <li class=\"active swiper-slide\">粮油速食</li>            <li class=\"swiper-slide\">休闲食品</li>            <li class=\"swiper-slide\">酒水饮料</li>            <li class=\"swiper-slide\">母婴用品</li>            <li class=\"swiper-slide\">清洁洗护</li>            <li class=\"swiper-slide\">日用百货</li>        </ul>    </div></header>"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<main></main>"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\" >    <ul id=\"oil\">    </ul></div>"

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const model = __webpack_require__(3)
const classifyGoodsTpl = __webpack_require__(27)

const classifyGoodsController = {
    async render() {
        let result = await model.find()
        let data = result.data.pageModules[4].data
        // console.log(data)
        let html = template.render(classifyGoodsTpl, data)
        return html
        
    }
}

module.exports = classifyGoodsController


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "{{each list}}<li>    <a href=\"detail.html\">        <img src=\"//img.dmallcdn.com/common/b8cb181b-5e07-4e6a-97f1-6ef1789c2cb1\" alt=\"\" style=\"display: none\">        <img src=\"{{$value.img}}\" alt=\"\">    </a>    <div class=\"details\">        <b>精选价</b>        <span>{{$value.title}}</span>        <div class=\"price\">            <span class=\"price-item\">￥</span>            <i>{{$value.price}}</i>            <i class=\"icon-add-cart\">&#xe63e;</i>        </div>    </div></li>{{/each}}"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

const classifyBannerController = {
    swiper() {
        new Swiper ('.swiper-container',{
            loop:true,
        })
    }
}

module.exports = classifyBannerController

/***/ })
/******/ ]);