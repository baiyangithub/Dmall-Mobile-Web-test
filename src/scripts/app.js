const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const homeTpl = require('./views/home.html')
const bannerTpl = require('./views/home_banner.html')
const prolistTpl = require('./views/home_pro-list.html')
const salesTpl = require('./views/home_sales.html')
const carefulChooseTpl = require('./views/home_carefulchoose.html')
const oilGrainTpl = require('./views/home_oilGrain.html')
const summerTpl = require('./views/home_summer.html')
const bottomTpl = require('./views/home_bottom.html')
const downloadTpl = require('./views/home_download.html')

const homeProlistController = require('./controllers/home_pro-list.js')
const homeOilGrainController = require('./controllers/home_oilGrain.js')
const homeSummerController = require('./controllers/home_summer.js')
// 轮播图
const bannerController = require('./controllers/banner.js')
const indexController = require('./controllers/index')
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
