const indexTpl = require('./views/index.html')
const headerTpl = require('./views/classify-header.html')
const footerTpl = require('./views/footer.html')
const classifyTpl = require('./views/classify.html')
const goodsTpl = require('./views/classify-goods.html')

const classifyGoodsController = require('./controllers/classify.js')

const indexController = require('./controllers/index')
const classifyBannerController = require('./controllers/classify-banner')

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