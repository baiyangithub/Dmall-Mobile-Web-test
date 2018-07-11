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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(6)
const footerTpl = __webpack_require__(1)
const homeTpl = __webpack_require__(7)
const bannerTpl = __webpack_require__(8)
const prolistTpl = __webpack_require__(9)
const salesTpl = __webpack_require__(10)
const carefulChooseTpl = __webpack_require__(11)
const oilGrainTpl = __webpack_require__(12)
const summerTpl = __webpack_require__(13)
const bottomTpl = __webpack_require__(14)
const downloadTpl = __webpack_require__(15)

const homeProlistController = __webpack_require__(16)
const homeOilGrainController = __webpack_require__(18)
const homeSummerController = __webpack_require__(20)
// 轮播图
const bannerController = __webpack_require__(4)
const indexController = __webpack_require__(2)
// 渲染主页面
$('#root').html(indexTpl)
$('.container').html(headerTpl + homeTpl + footerTpl)
$('.container main').html(bannerTpl + prolistTpl + salesTpl + carefulChooseTpl + oilGrainTpl 
+ summerTpl + bottomTpl + downloadTpl)

;(async () => {
  // 渲染商品分类
  const prolist_html = await homeProlistController.render()
  $('#postlist').html(prolist_html)
  // 粮油调味
  const oilgrain_html = await homeOilGrainController.render()
  $('#oil').html(oilgrain_html)
  // 夏日畅饮
  const summer_html = await homeSummerController.render()
  $('#summer').html(summer_html)
})()

// 多页面切换
indexController.footerAction()
//轮播图
bannerController.swiper()

// MVC
// M: model 模型，数据源
// V: view 视图，模板
// C: controller 控制器，业务逻辑


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<header class=\"head\">  <div class=\"address\">      <label>送至:</label>      <span>          <i>北京市工业部件表面强化与修复工程技术研究中心</i>      </span>  </div>  <div class=\"search iconfont\">          &#xe6a4;  </div></header><nav class=\"menu\">  <div class=\"choose\">      <span>全球精选</span>      <em></em>  </div></nav>"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<main>    </main>"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=\"swiper-container\">    <div class=\"swiper-wrapper\">        <div class=\"swiper-slide\">            <img src=\"https://img.dmallcdn.com/mIndex/201806/1a1df133-dfe2-4df3-9b5b-f2cb6603fae3_750H\" alt=\"\">        </div>        <div class=\"swiper-slide\">                <img src=\"https://img.dmallcdn.com/mIndex/201806/1a1df133-dfe2-4df3-9b5b-f2cb6603fae3_750H\" alt=\"\">            <!-- <img src=\"https://img.dmallcdn.com/mIndex/201806/3f6805fd-0c1c-444b-901e-efea9e45cd30_750H\" alt=\"\"> -->        </div>        <div class=\"swiper-slide\">                <img src=\"https://img.dmallcdn.com/mIndex/201806/1a1df133-dfe2-4df3-9b5b-f2cb6603fae3_750H\" alt=\"\">            <!-- <img src=\"https://img.dmallcdn.com/mIndex/201806/b3117156-9905-40f3-b5d3-f85ea35b3003_750H\" alt=\"\"> -->        </div>    </div>    <!-- 如果需要分页器 -->    <div class=\"swiper-pagination\"></div></div>"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pro-list\">    <ul id=\"postlist\">    </ul></div>"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<!-- 促销活动 sales promotion --><div class=\"sales-pro1\">    <ul>        <li>            <img src=\"https://img.dmallcdn.com/mIndex/201804/b460bc01-c613-430a-bad7-74c1931b9826_480x480H\" alt=\"\">        </li>        <li>            <div class=\"item-box\">                <img src=\"https://img.dmallcdn.com/mIndex/201804/b9da5656-cda8-45c7-a0a2-b5dc17fe527d_480x480H\" alt=\"\">                <img src=\"https://img.dmallcdn.com/mIndex/201712/55c79dbf-e914-4228-8554-9b5807b54503_480x480H\" alt=\"\">            </div>        </li>    </ul></div>"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<!-- 精选会场 --><section class=\"sales-pro2-logo\">    <img src=\"https://img.dmallcdn.com/mIndex/201711/4573e9e8-db1b-427a-8c7b-dbf0300fa2c2_750H\" alt=\"\"></section><!-- 产品 --><div class=\"item-discount\">    <ul>        <li>            <img src=\"https://img.dmallcdn.com/mIndex/201804/68c7acde-1d8e-4d3b-a724-949371680e7d_360x360H\" alt=\"\">        </li>        <li>            <img src=\"https://img.dmallcdn.com/mIndex/201804/fabb98bb-e64d-434e-a06a-47185519d5b8_360x360H\" alt=\"\">        </li>        <li>            <img src=\"https://img.dmallcdn.com/mIndex/201804/cd99cb6c-5822-48f4-a44e-e82111be279a_360x360H\" alt=\"\">        </li>        <li>            <img src=\"https://img.dmallcdn.com/mIndex/201804/a50ed78c-d4e3-4edc-8e10-886130c259aa_360x360H\" alt=\"\">        </li>        <li>            <img src=\"https://img.dmallcdn.com/mIndex/201804/cfeeba75-5b6a-4c2c-b444-62dfcb05db98_360x360H\" alt=\"\">        </li>        <li>            <img src=\"https://img.dmallcdn.com/mIndex/201804/3b9d89dc-7eaa-4deb-b2ba-38b707b582a3_360x360H\" alt=\"\">        </li>    </ul></div>"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<!-- 粮油广告 --><section class=\"jumppage\">    <img src=\"https://img.dmallcdn.com/mIndex/201806/f0a2bea7-e323-43e5-84d1-2ac45a24fcef_750H\" alt=\"\"></section><!-- 粮油产品 --><div class=\"item\" >    <ul id=\"oil\">            </ul></div>"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<section class=\"jumppage\">    <img src=\"https://img.dmallcdn.com/mIndex/201805/b61ed368-0a1e-46ea-b867-bdb4d274061e_750H\" alt=\"\"></section><!-- 饮品 --><div class=\"item\">    <ul id=\"summer\">            </ul></div>"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div class=\"down\">    <div class=\"down-middle\">        <span>已到底了哦~</span>    </div>    <hr></div>"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div class=\"download\">    <img src=\"https://img.dmallcdn.com/mIndex/201603/c076c74f-6dc9-4c5f-a7e4-eccd748abb40\" alt=\"\"></div>"

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const model = __webpack_require__(3)

const prolistTpl = __webpack_require__(17)

const homeProlistController = {
  async render() {
    let result = await model.find()
    let data = result.data.pageModules[1]

    let html = template.render(prolistTpl, data)
    return html
  }
}

module.exports = homeProlistController



/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "{{each dataList}}  <li>    <img src=\"{{$value.imageUrl}}\" alt=\"\">    <span>{{$value.data.title}}</span>  </li>  {{/each}}"

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const model = __webpack_require__(3)
const oilGrainTpl = __webpack_require__(19)

const homeOilGrainController = {
    async render() {
        let result = await model.find()
        let data = result.data.pageModules[2]
        // console.log(data)
        let html = template.render(oilGrainTpl, data)
        return html
    }
}

module.exports = homeOilGrainController

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "{{each dataList}}<li>    <a href=\"\">        <img src=\"//img.dmallcdn.com/common/b8cb181b-5e07-4e6a-97f1-6ef1789c2cb1\" alt=\"\" style=\"display: none\">        <img src=\"{{$value.imageUrl}}\" alt=\"\">    </a>    <div class=\"details\">        <b>{{$value.data.promotionDisplayLable}}</b>        <span>{{$value.data.name}}</span>        <em>￥{{$value.data.price}}</em>        <div class=\"price\">            <span class=\"price-item\">￥</span>            <i>{{$value.data.promotionPrice}}</i>            <i class=\"icon-add-cart\">&#xe63e;</i>        </div>    </div></li>{{/each}}"

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

const model = __webpack_require__(3)
const summerTpl = __webpack_require__(21)

const summerController = {
    async render() {
        let result = await model.find()
        let data = result.data.pageModules[3]
        // console.log(data)
        let html = template.render(summerTpl,data)
        return html
    } 
}
module.exports = summerController

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "{{each dataList}}<li>    <a href=\"\">        <img src=\"//img.dmallcdn.com/common/b8cb181b-5e07-4e6a-97f1-6ef1789c2cb1\" alt=\"\" style=\"display: none\">        <img src=\"{{$value.imageUrl}}\" alt=\"\">    </a>    <div class=\"details\">        <b>{{$value.data.promotionDisplayLable}}</b>        <span>{{$value.data.name}}</span>        <em>￥{{$value.data.price}}</em>        <div class=\"price\">            <span class=\"price-item\">￥</span>            <i>{{$value.data.promotionPrice}}</i>            <i class=\"icon-add-cart\">&#xe63e;</i>        </div>    </div></li>{{/each}}"

/***/ })
/******/ ]);